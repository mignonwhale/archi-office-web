'use client';

import { motion } from 'motion/react';
import { Calendar, Eye, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { NewsItem } from '@/types';
import { formatViews } from '@/lib/utils';
import {Badge} from "@/components/ui/badge";

interface NewsDetailPageProps {
  news: NewsItem;
}

export function NewsDetailPage({ news }: NewsDetailPageProps) {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 mb-8 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          뉴스 목록으로 돌아가기
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 헤더 */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">{news.category}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">{news.title}</h1>

            {/* 메타 정보 */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>조회수 {formatViews(news.views)}</span>
              </div>
            </div>

            {/* 요약 */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              {news.summary}
            </p>
          </header>

          {/* 메인 이미지 */}
          <motion.div
            className="aspect-[16/9] overflow-hidden rounded-lg mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 본문 */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {news.content}
            </div>
          </motion.div>

          {/* 하단 네비게이션 */}
          <motion.div
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex justify-between items-center">
              <Link
                href="/news"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                목록으로 돌아가기
              </Link>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>공유하기:</span>
                <button className="hover:text-primary transition-colors">
                  Facebook
                </button>
                <button className="hover:text-primary transition-colors">
                  Twitter
                </button>
                <button className="hover:text-primary transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}