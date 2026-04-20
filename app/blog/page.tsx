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
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
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
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <Link href={`/blog/${id}`} key={id} className="block">
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
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
                    <p className="text-slate-400">{excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
