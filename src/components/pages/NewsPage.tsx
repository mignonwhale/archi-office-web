'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Eye } from 'lucide-react';
import Link from 'next/link';
import { newsData } from '@/lib/data';
import { formatViews } from '@/lib/utils';
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const categories = ["전체", "수상", "프로젝트", "강연", "공지"];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredNews = selectedCategory === "전체"
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl mb-4">뉴스 & 공지사항</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            STUDIO ARCH의 최신 프로젝트 소식, 수상 경력, 공지사항 등을
            한눈에 확인하실 수 있습니다.
          </p>
        </motion.div>

        {/* 카테고리 필터 */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* 뉴스 그리드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/news/${item.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{formatViews(item.views)}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {item.summary}
                    </p>
                    <div className="mt-4 text-xs text-muted-foreground">
                      작성자: {item.author}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 로딩 상태나 빈 결과 처리 */}
        {filteredNews.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground">
              해당 카테고리에 뉴스가 없습니다.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}