"use client"
import { Calendar, ChevronRight, Clock, Facebook, Linkedin, List, Share2, Twitter, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   HERO SECTION (Server Component)
───────────────────────────────────────────── */
export function HeroSection({ post }: { post: any }) {
  return (
    <>
      <style>{`
        .blog-detail-hero {
          position: relative;
          overflow: hidden;
          min-height: 50vh;
          display: flex;
          align-items: flex-end;
          padding-top: 80px;
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section className="blog-detail-hero relative w-full">
        {/* Background */}
        <div className="absolute inset-0">
          {post.featuredImage ? (
            <Image 
              src={post.featuredImage} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0f2a6b] to-[#1a3fa0]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0f2a6b]/90 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-1 relative z-10 pb-6 w-full">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1.5 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                <Calendar size={14} /> {post.createdAt}
              </span>
              <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                <Clock size={14} /> {post.readTime} min read
              </span>
              <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                <User size={14} /> {post.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.3] mb-3">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8a020]/20 flex items-center justify-center text-lg font-bold text-[#e8a020]">
                {post.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-white font-semibold">{post.author}</div>
                <div className="text-gray-400 text-sm">Published on {post.createdAt}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN CONTENT (Server Component)
───────────────────────────────────────────── */
export function MainContent({
  post,
  headings,
}:any) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          {/* Left: Article Content */}
          <div className="lg:col-span-7">
            <div className="prose prose-lg prose-slate max-w-none">
              <div className="blog-content-wrapper">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <style jsx global>{`
                  /* ─── Blog Content Styles ──────────────────────────────────────────── */
                  
                  .blog-content-wrapper {
                    max-width: 100%;
                    overflow: hidden;
                  }

                  .blog-content {
                    color: #1a202c;
                    line-height: 1.5;
                    font-size: 1.1rem;
                  }

                  /* ─── Headings ────────────────────────────────────────────────────── */
                  
                  .blog-content h1 {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #0f2a6b;
                    margin-top: 2.5rem;
                    margin-bottom: 1.25rem;
                    line-height: 1.2;
                    letter-spacing: -0.02em;
                    position: relative;
                    padding-bottom: 0.75rem;
                  }

                  .blog-content h1::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 4rem;
                    height: 0.25rem;
                    background: linear-gradient(to right, #1a3fa0, #e8a020);
                    border-radius: 0.125rem;
                  }

                  .blog-content h2 {
                    font-size: 1.7rem;
                    font-weight: 600;
                    color: #0f2a6b;
                    margin-top: 0.3rem;
                    margin-bottom: 1rem;
                    line-height: 1;
                    letter-spacing: -0.01em;
                    position: relative;
                    padding-left: 0.7rem;
                    border-left: 3px solid #e8a020;
                  }

                  .blog-content h2 .hash-link {
                    color: #1a3fa0;
                    opacity: 0.4;
                    transition: opacity 0.2s;
                    margin-right: 0.5rem;
                    text-decoration: none;
                    font-size: 0.8em;
                  }

                  .blog-content h2:hover .hash-link {
                    opacity: 1;
                  }

                  .blog-content h3 {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #1a3fa0;
                    margin-top: 1rem;
                    margin-bottom: 0.5rem;
                    line-height: 1.1;
                  }

                  .blog-content h3 .hash-link {
                    color: #1a3fa0;
                    opacity: 0.3;
                    transition: opacity 0.2s;
                    margin-right: 0.5rem;
                    text-decoration: none;
                    font-size: 0.8em;
                  }

                  .blog-content h3:hover .hash-link {
                    opacity: 1;
                  }

                  .blog-content h4 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #2d3748;
                    margin-top: 1rem;
                    margin-bottom: 0.5rem;
                    line-height: 1.1;
                  }

                  /* ─── Paragraphs ──────────────────────────────────────────────────── */

                  .blog-content p {
                    color: #394058;
                    margin-bottom: 1.25rem;
                    line-height: 1.7;
                  }

                  .blog-content p strong {
                    color: #0f2a6b;
                    font-weight: 600;
                  }

                  .blog-content p em {
                    color: #1a3fa0;
                    font-style: italic;
                  }

                  .blog-content p code {
                    background: #f0f4f8;
                    padding: 0.125rem 0.375rem;
                    border-radius: 0.25rem;
                    font-size: 0.875em;
                    color: #e83e8c;
                  }

                  /* ─── Lists ──────────────────────────────────────────────────────── */

                  .blog-content ul {
                    margin: 1rem 0 1.5rem 0;
                    padding-left: 1.5rem;
                    list-style-type: none;
                  }

                  .blog-content ul li {
                    position: relative;
                    padding-left: 1.75rem;
                    margin-bottom: 0.625rem;
                    color: #4a5578;
                    line-height: 1.7;
                  }

                  .blog-content ul li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.6rem;
                    width: 0.5rem;
                    height: 0.5rem;
                    background: #e8a020;
                    border-radius: 50%;
                    flex-shrink: 0;
                  }

                  .blog-content ul li strong {
                    color: #0f2a6b;
                  }

                  .blog-content ol {
                    margin: 1rem 0 1.5rem 0;
                    padding-left: 1.75rem;
                    list-style-type: none;
                    counter-reset: item;
                  }

                  .blog-content ol li {
                    position: relative;
                    padding-left: 2.5rem;
                    margin-bottom: 0.625rem;
                    color: #4a5578;
                    line-height: 1.7;
                    counter-increment: item;
                  }

                  .blog-content ol li::before {
                    content: counter(item);
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 1.75rem;
                    height: 1.75rem;
                    background: linear-gradient(135deg, #1a3fa0, #2952cc);
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 700;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }

                  .blog-content ol li strong {
                    color: #0f2a6b;
                  }

                  /* ─── Blockquotes ────────────────────────────────────────────────── */

                  .blog-content blockquote {
                    margin: 1.5rem 0;
                    padding: 1.25rem 1.5rem;
                    background: #f8f9fc;
                    border-left: 4px solid #e8a020;
                    border-radius: 0 0.5rem 0.5rem 0;
                    color: #2d3748;
                    font-style: italic;
                    position: relative;
                  }

                  .blog-content blockquote::before {
                    content: '"';
                    position: absolute;
                    top: -0.25rem;
                    left: 0.75rem;
                    font-size: 3rem;
                    color: #e8a020;
                    opacity: 0.3;
                    font-family: Georgia, serif;
                  }

                  .blog-content blockquote p {
                    margin-bottom: 0;
                    color: #2d3748;
                  }

                  .blog-content blockquote cite {
                    display: block;
                    margin-top: 0.5rem;
                    font-size: 0.875rem;
                    color: #4a5578;
                    font-style: normal;
                    font-weight: 500;
                  }

                  /* ─── Code Blocks ────────────────────────────────────────────────── */

                  .blog-content pre {
                    margin: 1.5rem 0;
                    padding: 1.25rem;
                    background: #070c1a;
                    border-radius: 0.75rem;
                    overflow-x: auto;
                    position: relative;
                    border: 1px solid rgba(26, 63, 160, 0.2);
                  }

                  .blog-content pre::before {
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 0.25rem 0.75rem;
                    background: rgba(232, 160, 32, 0.15);
                    color: #e8a020;
                    font-size: 0.625rem;
                    font-weight: 600;
                    border-radius: 0 0.75rem 0 0.5rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                  }

                  .blog-content pre code {
                    font-family: monospace;
                    font-size: 1rem;
                    line-height: 1.4;
                    color: #e2e8f0;
                    padding: 0;
                  }

                  .blog-content pre code .comment {
                    color: #a0aec0;
                    font-style: italic;
                  }

                  .blog-content pre code .keyword {
                    color: #f687b3;
                  }

                  .blog-content pre code .string {
                    color: #68d391;
                  }

                  .blog-content pre code .function {
                    color: #63b3ed;
                  }

                  .blog-content pre code .number {
                    color: #f6ad55;
                  }

                  .blog-content pre code .tag {
                    color: #fc8181;
                  }

                  .blog-content pre code .attr {
                    color: #f6ad55;
                  }

                  /* ─── Inline Code ────────────────────────────────────────────────── */

                  .blog-content code:not(pre code) {
                    background: #f0f4f8;
                    padding: 0.125rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.875em;
                    color: #e83e8c;
                    font-family: 'Courier New', monospace;
                    border: 1px solid rgba(26, 63, 160, 0.08);
                  }

                  /* ─── Links ──────────────────────────────────────────────────────── */

                  .blog-content a {
                    color: #1a3fa0;
                    text-decoration: none;
                    font-weight: 500;
                    border-bottom: 2px solid rgba(232, 160, 32, 0.3);
                    transition: all 0.2s;
                  }

                  .blog-content a:hover {
                    color: #e8a020;
                    border-bottom-color: #e8a020;
                  }

                  /* ─── Images ─────────────────────────────────────────────────────── */

                  .blog-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.75rem;
                    margin: 1.5rem 0;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                  }

                  /* ─── Tables ─────────────────────────────────────────────────────── */

                  .blog-content table {
                    width: 100%;
                    margin: 1.5rem 0;
                    border-collapse: collapse;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                  }

                  .blog-content table thead {
                    background: linear-gradient(135deg, #0f2a6b, #1a3fa0);
                  }

                  .blog-content table th {
                    padding: 0.75rem 1rem;
                    text-align: left;
                    color: white;
                    font-weight: 600;
                    font-size: 0.875rem;
                    letter-spacing: 0.02em;
                  }

                  .blog-content table td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid #edf2f7;
                    color: #4a5578;
                  }

                  .blog-content table tbody tr:hover {
                    background: #f8f9fc;
                  }

                  .blog-content table tbody tr:last-child td {
                    border-bottom: none;
                  }

                  /* ─── Horizontal Rule ───────────────────────────────────────────── */

                  .blog-content hr {
                    margin: 2.5rem 0;
                    border: none;
                    height: 2px;
                    background: linear-gradient(to right, transparent, #e8a020, transparent);
                  }

                  /* ─── Responsive Adjustments ────────────────────────────────────── */

                  @media (max-width: 768px) {
                    .blog-content {
                      font-size: 1rem;
                    }

                    .blog-content h1 {
                      font-size: 2rem;
                    }

                    .blog-content h2 {
                      font-size: 1.625rem;
                    }

                    .blog-content h3 {
                      font-size: 1.25rem;
                    }

                    .blog-content pre {
                      padding: 1rem;
                      font-size: 0.8rem;
                      margin: 1rem -1rem;
                      border-radius: 0;
                    }

                    .blog-content pre::before {
                      font-size: 0.5rem;
                    }

                    .blog-content blockquote {
                      padding: 1rem;
                      margin: 1rem -1rem;
                    }

                    .blog-content table {
                      font-size: 0.875rem;
                      display: block;
                      overflow-x: auto;
                      white-space: nowrap;
                    }

                    .blog-content ul,
                    .blog-content ol {
                      padding-left: 1rem;
                    }

                    .blog-content ul li {
                      padding-left: 1.5rem;
                    }

                    .blog-content ol li {
                      padding-left: 2rem;
                    }
                  }

                  @media (min-width: 769px) and (max-width: 1024px) {
                    .blog-content {
                      font-size: 1.0625rem;
                    }
                  }

                  /* ─── Print Styles ──────────────────────────────────────────────── */

                  @media print {
                    .blog-content {
                      font-size: 0.875rem;
                      color: #000;
                    }

                    .blog-content h1,
                    .blog-content h2,
                    .blog-content h3,
                    .blog-content h4 {
                      color: #000;
                    }

                    .blog-content pre {
                      background: #f5f5f5;
                      border: 1px solid #ddd;
                    }

                    .blog-content pre code {
                      color: #000;
                    }

                    .blog-content blockquote {
                      background: #f9f9f9;
                    }

                    .blog-content a {
                      color: #000;
                      border-bottom-color: #000;
                    }
                  }
                `}</style>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#1a3fa0]/10">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#f8f9fc] text-[#1a3fa0] text-sm font-medium rounded-lg border border-[#1a3fa0]/10 hover:bg-[#e8a020] hover:text-[#0f2a6b] transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-[#f8f9fc] rounded-2xl border border-[#1a3fa0]/08 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center text-white font-semibold text-2xl shadow-lg shrink-0">
                {post.author.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0f2a6b] mb-1">Written by {post.author}</h3>
                <p className="text-[#4a5578] text-sm mb-3">
                  Specializing in {post.category}, our experts bring years of industry experience to help you navigate
                  complex digital challenges.
                </p>
                <Link
                  href={`/blog?author=${post.author}`}
                  className="inline-flex items-center gap-2 text-[#e8a020] font-semibold text-sm hover:gap-3 transition-all"
                >
                  View all posts <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08">
                <h4 className="text-sm font-bold text-[#0f2a6b] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <List size={16} className="text-[#e8a020]" /> On This Page
                </h4>
                <nav className="space-y-2.5">
                  {headings.length > 0 ? (
                    headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors hover:text-[#e8a020] ${
                          heading.level === 3
                            ? "ml-4 text-[#4a5578] text-xs"
                            : "font-medium text-[#0f2a6b]"
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))
                  ) : (
                    <p className="text-sm text-[#4a5578] italic">No sections available</p>
                  )}
                </nav>
              </div>

              {/* Share */}
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08">
                <h4 className="text-sm font-bold text-[#0f2a6b] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Share2 size={16} className="text-[#e8a020]" /> Share This Article
                </h4>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `https://yourdomain.com/blog/${post.slug}`
                    )}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 bg-white rounded-lg border border-[#1a3fa0]/10 hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0] transition-all group"
                  >
                    <Twitter size={18} className="mx-auto text-[#4a5578] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `https://yourdomain.com/blog/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 bg-white rounded-lg border border-[#1a3fa0]/10 hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0] transition-all group"
                  >
                    <Linkedin size={18} className="mx-auto text-[#4a5578] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://yourdomain.com/blog/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 bg-white rounded-lg border border-[#1a3fa0]/10 hover:bg-[#1a3fa0] hover:text-white hover:border-[#1a3fa0] transition-all group"
                  >
                    <Facebook size={18} className="mx-auto text-[#4a5578] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Mini CTA */}
              <div className="bg-gradient-to-br from-[#0f2a6b] to-[#1a3fa0] rounded-2xl p-6 text-white shadow-xl">
                <h4 className="font-bold text-lg mb-2">Need Expert Help?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Implementing these strategies? Let our team assist you.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 bg-[#e8a020] hover:bg-[#f0b832] text-[#0f2a6b] font-bold text-center rounded-lg transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RELATED ARTICLES (Server Component)
───────────────────────────────────────────── */
export async function RelatedArticles({ post }:any) {
  try {
    const relatedPosts = []

    if (relatedPosts.length === 0) return null;

    return (
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-[#f8f9fc] border-t border-[#1a3fa0]/08">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
              Continue <span className="text-[#e8a020]">Reading</span>
            </h2>
            <p className="text-[#4a5578]">More insights from our experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost: any, index: number) => (
              <div key={relPost._id} className="group">
                <Link href={`/blog/${relPost.slug}`} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-[#1a3fa0]/08 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      {relPost.featuredImage ? (
                        <Image
                          src={relPost.featuredImage}
                          alt={relPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#0f2a6b] to-[#1a3fa0]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-[#e8a020] text-[#0f2a6b] text-xs font-bold rounded-full uppercase tracking-wider">
                        {relPost.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#0f2a6b] mb-2 line-clamp-2 group-hover:text-[#e8a020] transition-colors">
                        {relPost.title}
                      </h3>
                      <p className="text-sm text-[#4a5578] line-clamp-2 mb-3">{relPost.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-[#4a5578]">
                        <span>{new Date(relPost.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {relPost.readTime} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return null;
  }
}