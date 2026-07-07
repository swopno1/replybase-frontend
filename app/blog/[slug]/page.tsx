import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";

const postsDirectory = path.join(process.cwd(), "_posts");

export async function generateStaticParams() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("No posts directory found.");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      date: string;
      excerpt?: string;
      keywords?: string;
      category?: string;
      tags?: string[];
      featured_image?: string;
    }),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  if (!postData) {
    return { title: "Post Not Found" };
  }

  const ogImage = postData.featured_image
    ? `https://replybase.co.uk${postData.featured_image}`
    : "https://replybase.co.uk/opengraph-image.png";

  return {
    title: postData.title,
    description: postData.excerpt,
    keywords: postData.keywords,
    authors: [{ name: "Shaun", url: "https://replybase.co.uk/about" }],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      url: `https://replybase.co.uk/blog/${slug}`,
      type: "article",
      publishedTime: postData.date,
      authors: ["https://replybase.co.uk/about"],
      tags: postData.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: postData.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground antialiased selection:bg-indigo-500/20 font-inter min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: postData.title,
            description: postData.excerpt,
            datePublished: postData.date,
            dateModified: postData.date,
            url: `https://replybase.co.uk/blog/${slug}`,
            image: postData.featured_image
              ? `https://replybase.co.uk${postData.featured_image}`
              : "https://replybase.co.uk/opengraph-image.png",
            keywords: postData.keywords,
            articleSection: postData.category,
            publisher: {
              "@type": "Organization",
              name: "ReplyBase",
              url: "https://replybase.co.uk",
              logo: {
                "@type": "ImageObject",
                url: "https://replybase.co.uk/icon.png",
              },
            },
            author: {
              "@type": "Person",
              name: "Shaun",
              url: "https://replybase.co.uk/about",
            },
          }),
        }}
      />
      <LandingNavbar />

      {/* Signature Glow Header (T029) */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-linear-to-b from-indigo-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-indigo-400 transition-colors mb-8 font-semibold text-sm group">
            <svg className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-4xl">
            {postData.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-400 text-sm">
            {postData.category && (
              <span className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full font-medium text-xs">
                {postData.category}
              </span>
            )}
            <time dateTime={postData.date} className="font-medium">
              {new Date(postData.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span className="text-white font-semibold">Shaun, ReplyBase</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <article className="prose prose-invert prose-lg mx-auto prose-headings:text-white prose-headings:font-bold prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-indigo-500 prose-blockquote:bg-slate-800/30 prose-blockquote:py-1 prose-blockquote:rounded-r-lg">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

        <div className="max-w-prose mx-auto mt-20 pt-10 border-t border-slate-800">
           <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to stop missing enquiries?</h3>
              <p className="text-slate-400 mb-8">Start your free 14-day trial. No card required. Set up in minutes.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://app.replybase.co.uk/auth/claim?plan=launch&source=blog_cta" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-all">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-all">
                  Talk to a Specialist
                </Link>
              </div>
           </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
