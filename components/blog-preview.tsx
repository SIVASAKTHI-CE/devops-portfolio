import Link from "next/link";
import { SectionLabel } from "./section-label";
import { blogPosts } from "@/data/content";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  return (
    <section id="blog" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <SectionLabel command="tail -n 2 ./blog/posts.log" title="Notes" />
      <div className="space-y-4">
        {blogPosts.slice(0, 2).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-lg border border-line bg-bg-raised p-5 hover:border-accent/40 transition-colors group"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] text-ink-dim mb-2">
                  {post.date} · {post.readMinutes} min read
                </div>
                <h3 className="font-medium text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink-dim text-sm mt-2 leading-relaxed">{post.excerpt}</p>
              </div>
              <ArrowRight
                size={18}
                className="shrink-0 text-ink-dim group-hover:text-accent group-hover:translate-x-0.5 transition-all"
              />
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 mt-6 font-mono text-xs text-accent hover:underline"
      >
        view all posts <ArrowRight size={13} />
      </Link>
    </section>
  );
}
