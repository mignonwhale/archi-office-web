'use client';

import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Calendar, MapPin, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 mb-8 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          프로젝트 목록으로 돌아가기
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 헤더 */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">{project.category}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>

            {/* 프로젝트 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm">{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm">{project.client}</span>
              </div>
              <div>
                <span className="text-sm">면적: {project.area}</span>
              </div>
            </div>
          </div>

          {/* 이미지 갤러리 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {project.images?.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={image.image_url}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* 상세 설명 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl mb-4">프로젝트 개요</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-4">주요 특징</h3>
              <ul className="space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}