import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
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
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      contentHtml,
      ...(matterResult.data as { title: string; date: string }),
    };
  } catch (error) {
    console.error(`Error fetching post data for slug "${slug}":`, error);
    throw error;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const postData = await getPostData(params.slug);

    return (
      <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
        <LandingNavbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <article className="prose prose-invert prose-lg mx-auto">
            <h1>{postData.title}</h1>
            <p className="text-slate-400">
              <time dateTime={postData.date}>
                {new Date(postData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </main>
        <LandingFooter />
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);

    return (
      <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
        <LandingNavbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Post Not Found</h1>
            <p className="text-slate-400">
              The post you are looking for does not exist or could not be
              loaded.
            </p>
          </div>
        </main>
        <LandingFooter />
      </div>
    );
  }
}
