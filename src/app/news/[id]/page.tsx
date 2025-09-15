import {newsData} from '@/lib/data';
import {notFound} from 'next/navigation';
import {NewsDetailPage} from "@/components/pages/NewsDetailPage";

interface NewsPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }));
}

export async function generateMetadata({params}: NewsPageProps) {
  const news = newsData.find(n => n.id === params.id);

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

export default function NewsDetail({params}: NewsPageProps) {
  const news = newsData.find(n => n.id === params.id);

  if (!news) {
    notFound();
  }

  return (
    <NewsDetailPage news={news}/>
  );
}