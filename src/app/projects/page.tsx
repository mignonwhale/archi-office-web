import ProjectsPage from "@/components/pages/ProjectsPage";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: '프로젝트 - STUDIO ARCH',
  description: '다양한 분야에서 진행한 프로젝트들을 통해 우리의 설계 철학과 전문성을 확인하실 수 있습니다.',
};

export default function Projects() {
  return (
    <ProjectsPage/>
  );
}