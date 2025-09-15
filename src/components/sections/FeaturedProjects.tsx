'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/supabase'

type Project = Database['public']['Tables']['projects']['Row']

export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('is_featured', true)
          .limit(3)

        if (error) throw error
        setProjects(data || [])
      } catch (error) {
        console.error('Error fetching featured projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProjects()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            대표 프로젝트
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          대표 프로젝트
        </h2>
        
        {projects.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-lg mb-4">아직 등록된 프로젝트가 없습니다</p>
            <p className="text-sm">관리자 페이지에서 프로젝트를 추가해보세요</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => window.location.href = `/portfolio/${project.id}`}
              >
                <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  {/* 이미지는 나중에 project_images 테이블에서 가져올 예정 */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">이미지 준비중</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{project.category}</p>
                <p className="text-gray-500 text-sm">
                  {project.location} • {project.year}
                </p>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            전체 프로젝트 보기
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}