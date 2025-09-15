import AdminPage from "@/components/pages/AdminPage";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: '관리자 - STUDIO ARCH',
  description: '웹사이트 콘텐츠 관리 시스템',
};

export default function Admin() {
  return <AdminPage />;
}