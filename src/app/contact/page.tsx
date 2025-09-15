import ContactPage from "@/components/pages/ContactPage";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: '연락처 - STUDIO ARCH',
  description: '새로운 프로젝트에 대한 상담이나 협업 제안을 환영합니다. 전문적이고 창의적인 건축 솔루션을 제공해드리겠습니다.',
};

export default function Contact() {
  return (
    <ContactPage/>
  );
}