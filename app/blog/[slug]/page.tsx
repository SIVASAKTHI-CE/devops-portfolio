import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/data/content";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-5 sm:px-8 py-16 sm:py-20 w-full">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-dim hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={13} /> back to notes
        </Link>
        <div className="font-mono text-[11px] text-ink-dim mb-3">
          {post.date} · {post.readMinutes} min read
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-8">
          {post.title}
        </h1>
        <div className="space-y-5 text-ink-dim leading-relaxed">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
