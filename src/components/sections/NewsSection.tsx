'use client'

import {motion} from 'motion/react';
import {ArrowRight, Calendar} from 'lucide-react';
import {useRouter} from "next/navigation";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const news = [
  {
    id: 1,
    category: "수상",
    title: "2024 한국건축문화대상 우수상 수상",
    summary: "혁신적인 친환경 주거 프로젝트로 한국건축문화대상에서 우수상을 수상했습니다.",
    date: "2024.12.15",
    image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc4NjYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    category: "프로젝트",
    title: "신규 복합 건축 프로젝트 착공",
    summary: "인천 연수구에 위치한 대규모 복합 건축 프로젝트가 공식적으로 착공되었습니다.",
    date: "2024.11.28",
    image: "https://images.unsplash.com/photo-1650332162976-f6686076948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1NzkyMTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    category: "강연",
    title: "TEDx Seoul 2024 연사 참여",
    summary: "'지속가능한 미래 건축'을 주제로 TEDx Seoul 2024에서 강연을 진행했습니다.",
    date: "2024.10.20",
    image: "https://images.unsplash.com/photo-1748346674126-8c0df10f2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGFyY2hpdGVjdHVyZSUyMG9mZmljZXxlbnwxfHx8fDE3NTc5MjIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export default function NewsSection() {
  const router = useRouter()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 헤더 */}
        <motion.div
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">최신 소식</h2>
            <p className="text-muted-foreground">
              STUDIO ARCH의 최신 프로젝트와 활동 소식을 확인하세요.
            </p>
          </div>
          <button
            onClick={() => router.push('/news')}
            className="hidden md:flex items-center gap-2 text-primary hover:underline"
          >
            더 보기 <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* 뉴스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.summary}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 모바일 더보기 버튼 */}
        <motion.div
          className="text-center md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => router.push('/news')}
            className="flex items-center gap-2 text-primary hover:underline mx-auto"
          >
            더 보기 <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}