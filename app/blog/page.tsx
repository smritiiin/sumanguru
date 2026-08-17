"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "../../data/blogPosts";

const categories = ["All", "Vedic Wisdom", "Palmistry", "Numerology", "Consultations"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50/40 to-orange-50/20 text-slate-900 pt-28 pb-20 relative overflow-hidden">
      {/* Radiant Background Sunlight Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-300/20 to-orange-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d9770610_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-3 block">
            Cosmic Insights & Teachings
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-serif tracking-tight text-slate-900 mb-4">
            The Astrological Journal
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Explorations into Vedic astrology, palmistry structural analysis, and practical spiritual guidance for daily modern life.
          </p>
        </motion.div>

        {/* Featured Post Card */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 bg-white/80 backdrop-blur-md border border-amber-200/80 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Featured Insight
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-slate-900 mb-4 hover:text-amber-700 transition-colors">
              <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              {featuredPost.excerpt}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-amber-100">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-800 group"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-white shadow-xs"
                    : "bg-white/70 hover:bg-white text-slate-700 border border-amber-200/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white/80 border border-amber-200/80 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/70 backdrop-blur-md border border-amber-200/70 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-slate-900 mb-2 leading-snug hover:text-amber-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 group"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white/40 rounded-2xl border border-amber-200/60">
            <Tag className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700">No articles matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}