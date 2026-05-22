import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI, Chatbots & Customer Engagement Insights",
  description:
    "Expert articles on AI chatbots, lead capture automation, and customer engagement strategies from the ReplyBase team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "ReplyBase Blog — AI, Chatbots & Customer Engagement",
    description:
      "Expert articles on AI chatbots, lead capture, and customer engagement from the ReplyBase team.",
    url: "https://replybase.co.uk/blog",
    type: "website",
  },
};

const postsDirectory = path.join(process.cwd(), "_posts");

function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
      }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="bg-background text-foreground antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Our Blog
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-400">
              Insights, tutorials, and updates from the ReplyBase team.
            </p>
          </header>

          <div className="space-y-8">
            {allPostsData.length > 0 ? (
              allPostsData.map(({ id, date, title, excerpt }) => (
                <Link href={`/blog/${id}`} key={id} className="block group">
                  <Card className="bg-slate-800/50 border-slate-700/50 group-hover:border-indigo-500/50 transition-all duration-300 group-hover:bg-slate-800/80">
                    <CardHeader>
                      <CardTitle as="h2" className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {title}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 leading-relaxed">{excerpt}</p>
                      <div className="mt-4 flex items-center text-indigo-400 font-semibold text-sm">
                        Read More
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
                <p className="text-slate-400">No blog posts found. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
