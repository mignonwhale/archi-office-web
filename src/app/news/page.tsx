import {NewsPage} from "@/components/pages/NewsPage";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: '뉴스 & 공지사항 - STUDIO ARCH',
  description: 'STUDIO ARCH의 최신 프로젝트 소식, 수상 경력, 공지사항 등을 한눈에 확인하실 수 있습니다.',
};

export default function News() {
  return (
    <NewsPage/>
  );
}