import AboutPage from "@/components/pages/AboutPage";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: '회사 소개 - STUDIO ARCH',
  description: '2016년 설립된 STUDIO ARCH는 혁신적인 설계와 지속가능한 건축을 추구하는 건축 전문 사무소입니다.',
};

export default function About() {
  return (
    <AboutPage />
  );
}