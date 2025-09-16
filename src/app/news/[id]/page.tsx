import {newsData} from '@/lib/data';
import {notFound} from 'next/navigation';
import {NewsDetailPage} from "@/components/pages/NewsDetailPage";

interface NewsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }));
}

export async function generateMetadata({params}: NewsPageProps) {
  const { id } = await params;
  const news = newsData.find(n => n.id === id);

  if (!news) {
    return {
      title: '뉴스를 찾을 수 없습니다 - STUDIO ARCH',
    };
  }

  return {
    title: `${news.title} - STUDIO ARCH`,
    description: news.summary,
  };
}

export default async function NewsDetail({params}: NewsPageProps) {
  const { id } = await params;
  const news = newsData.find(n => n.id === id);

  if (!news) {
    notFound();
  }

  return (
    <NewsDetailPage news={news}/>
  );
}