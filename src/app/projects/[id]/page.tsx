import {projects} from '@/lib/data';
import {notFound} from 'next/navigation';
import ProjectDetailPage from "@/components/pages/ProjectDetailPage";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다 - STUDIO ARCH',
    };
  }

  return {
    title: `${project.title} - STUDIO ARCH`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailPage project={project} />
  );
}