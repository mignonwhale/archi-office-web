'use client'

import {useState} from "react";
import {Badge} from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "모던 레지던스",
    category: "주거",
    location: "서울",
    year: "2024",
    image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc4NjYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "자연과 조화를 이루는 현대적 주거공간"
  },
  {
    id: 2,
    title: "미니멀 인테리어",
    category: "상업",
    location: "부산",
    year: "2024",
    image: "https://images.unsplash.com/photo-1572197491557-5b1a2c767c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU3OTIxOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "간결함 속에서 찾은 완벽한 균형"
  },
  {
    id: 3,
    title: "어반 컴플렉스",
    category: "복합",
    location: "인천",
    year: "2023",
    image: "https://images.unsplash.com/photo-1650332162976-f6686076948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1NzkyMTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "도시 환경에 최적화된 복합 건축물"
  },
  {
    id: 4,
    title: "상업 파사드",
    category: "상업",
    location: "대구",
    year: "2023",
    image: "https://images.unsplash.com/photo-1742156524915-f72d6332f38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYXJjaGl0ZWN0dXJlJTIwZmFjYWRlfGVufDF8fHx8MTc1NzkyMTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "혁신적인 외관 디자인의 상업 건축"
  }
];

const categories = ["전체", "주거", "상업", "복합"];

export default function ProjectGallery() {

  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "전체"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">프로젝트</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            각각의 프로젝트는 고유한 이야기를 담고 있으며,
            공간과 사용자의 완벽한 조화를 추구합니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 오버레이 */}
              <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{project.description}</p>
                  <div className="flex justify-between text-sm opacity-75">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}