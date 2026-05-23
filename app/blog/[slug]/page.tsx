import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import Link from "next/link";
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
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post not found: ${slug}`);
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
      }),
    };
  } catch (error) {
    console.error(`Error fetching post data for slug "${slug}":`, error);
    throw error;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: postData.title,
      description: postData.excerpt,
      alternates: {
        canonical: `/blog/${slug}`,
      },
      openGraph: {
        title: postData.title,
        description: postData.excerpt,
        url: `https://replybase.co.uk/blog/${slug}`,
        type: "article",
        publishedTime: postData.date,
      },
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let postData;
  let loadError = false;
  try {
    postData = await getPostData(slug);
  } catch (error) {
    console.error("Error loading post:", error);
    loadError = true;
  }

  if (loadError || !postData) {
    return (
      <div className="bg-background text-foreground antialiased selection:bg-indigo-500/20 font-inter">
        <LandingNavbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Post Not Found</h2>
            <p className="text-slate-400">
              The post you are looking for does not exist or could not be
              loaded.
            </p>
            <Link href="/blog" className="mt-8 inline-block text-indigo-400 font-semibold hover:text-indigo-300">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <LandingFooter />
      </div>
    );
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
            url: `https://replybase.co.uk/blog/${slug}`,
            publisher: {
              "@type": "Organization",
              name: "ReplyBase",
              logo: {
                "@type": "ImageObject",
                url: "https://replybase.co.uk/icon.png",
              },
            },
            author: {
              "@type": "Organization",
              name: "ReplyBase",
              url: "https://replybase.co.uk",
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
          <div className="mt-6 flex items-center gap-4 text-slate-400">
             <time dateTime={postData.date} className="font-medium">
              {new Date(postData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span className="text-indigo-400 font-semibold">ReplyBase Team</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <article className="prose prose-invert prose-lg mx-auto prose-headings:text-white prose-headings:font-bold prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-indigo-500 prose-blockquote:bg-slate-800/30 prose-blockquote:py-1 prose-blockquote:rounded-r-lg">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

        <div className="max-w-prose mx-auto mt-20 pt-10 border-t border-slate-800">
           <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to automate your support?</h3>
              <p className="text-slate-400 mb-8">Join the hundreds of UK founders scaling their businesses with ReplyBase.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://replybase.co.uk" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-all">
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
