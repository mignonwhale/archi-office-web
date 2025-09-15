import { Award, BookOpen, Users, Calendar } from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export default function Expertise() {
  const achievements = [
    {
      icon: Award,
      title: "수상 경력",
      items: [
        "2024 한국건축문화대상 우수상",
        "2023 서울시 건축상 본상",
        "2022 그린빌딩 디자인 어워드",
        "2021 젊은건축가상"
      ]
    },
    {
      icon: BookOpen,
      title: "논문 & 출간",
      items: [
        "「현대 건축에서의 지속가능성」 (2024)",
        "「도시 주거의 새로운 패러다임」 (2023)",
        "「공간과 경험의 건축학」 (2022)",
        "월간 건축문화 연재 (2021-현재)"
      ]
    },
    {
      icon: Users,
      title: "강연 & 교육",
      items: [
        "서울대학교 건축학과 객원교수",
        "TEDx Seoul 2024 연사",
        "건축사협회 정기 세미나",
        "젊은건축가 멘토링 프로그램"
      ]
    }
  ];

  const stats = [
    { number: "50+", label: "완료 프로젝트" },
    { number: "15", label: "수상 경력" },
    { number: "10", label: "협력 파트너" },
    { number: "8", label: "운영 연수" }
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">전문성</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            지속적인 연구와 실무 경험을 바탕으로 건축 분야에서
            인정받는 전문성과 리더십을 구축해왔습니다.
          </p>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl mb-2 text-primary">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 성취 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 전문 분야 */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl mb-8">전문 분야</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "주거건축", "상업건축", "복합건축", "리노베이션",
              "인테리어 디자인", "지속가능 건축", "BIM 설계", "도시계획"
            ].map((specialty, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}