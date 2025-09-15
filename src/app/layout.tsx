import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'STUDIO ARCH - 건축설계사무소',
  description: '혁신적인 설계와 지속가능한 건축을 추구하는 건축 전문 사무소입니다. 공간에 생명을 불어넣는 창의적인 건축으로 사람과 환경이 조화롭게 만나는 순간을 창조합니다.',
  keywords: '건축, 설계, 건축사무소, 주거건축, 상업건축, 리노베이션, 인테리어',
  authors: [{name: 'STUDIO ARCH'}],
  creator: 'STUDIO ARCH',
  publisher: 'STUDIO ARCH',
  openGraph: {
    title: 'STUDIO ARCH - 건축설계사무소',
    description: '혁신적인 설계와 지속가능한 건축을 추구하는 건축 전문 사무소',
    url: 'https://studioarch.co.kr',
    siteName: 'STUDIO ARCH',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STUDIO ARCH - 건축설계사무소',
    description: '혁신적인 설계와 지속가능한 건축을 추구하는 건축 전문 사무소',
    creator: '@studio_arch_official',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
    <body>
    <div className="min-h-screen">
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
    </body>
    </html>
  );
}
