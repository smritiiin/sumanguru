"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "../../../data/blogPosts";

export default function SingleBlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-serif text-slate-800 mb-2">Article Not Found</h1>
        <Link href="/blog" className="text-xs text-amber-700 font-semibold underline">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50/30 to-orange-50/20 text-slate-900 pt-28 pb-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-300/15 via-orange-200/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d9770610_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 hover:text-amber-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </motion.div>

        {/* Header Content */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3 text-amber-600" />
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-slate-900 font-light leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-200/70 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 font-medium text-slate-800">
                <User className="w-3.5 h-3.5 text-amber-600" /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> {post.readTime}
              </span>
            </div>

            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 hover:text-amber-800 bg-white/80 border border-amber-200/80 px-3 py-1 rounded-lg cursor-pointer transition-colors shadow-2xs"
            >
              <Share2 className="w-3 h-3" /> Copy Link
            </button>
          </div>
        </motion.header>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/80 backdrop-blur-md border border-amber-200/70 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6"
        >
          <p className="text-base sm:text-lg text-slate-700 font-serif leading-relaxed italic border-l-2 border-amber-500 pl-4 py-1">
            "{post.excerpt}"
          </p>

          {post.content.map((paragraph, index) => (
            <p key={index} className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans font-normal">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-amber-200/60 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Read More Insights
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl shadow-2xs transition-all"
          >
            Book a Personal Consultation
          </Link>
        </div>

      </div>
    </article>
  );
}