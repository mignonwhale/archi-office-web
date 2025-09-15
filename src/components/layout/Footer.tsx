import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 브랜드 */}
          <div className="md:col-span-2">
            <h3 className="text-xl mb-4">STUDIO ARCH</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              공간에 생명을 불어넣는 건축소사무소입니다.
              혁신적인 설계와 정교한 디테일로 사람과 공간이
              조화롭게 만나는 순간을 창조합니다.
            </p>
          </div>

          {/* 퀵 링크 */}
          <div>
            <h4 className="mb-4">바로가기</h4>
            <ul className="flex flex-col space-y-2 text-primary-foreground/80">
              <Link href="/projects" className="hover:text-primary-foreground transition-colors">
                  프로젝트
              </Link>
              <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  회사소개
              </Link>
              <Link href="/news" className="hover:text-primary-foreground transition-colors">
                  뉴스
              </Link>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="mb-4">연락처</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>서울특별시 강남구 테헤란로 123</p>
              <p>+82 2-1234-5678</p>
              <p>info@studioarch.co.kr</p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 STUDIO ARCH. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}