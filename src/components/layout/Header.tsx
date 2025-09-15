'use client'
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {path: "/", label: '홈', page: 'home'},
    {path: "/projects", label: '프로젝트', page: 'projects'},
    {path: "/about", label: '회사소개', page: 'about'},
    {path: "/news", label: '뉴스', page: 'news'},
    {path: "/contact", label: '연락처', page: 'contact'},
    {path: "/admin", label: '관리자', page: 'admin'}
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-primary">
              STUDIO ARCH
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                className={`text-foreground hover:text-primary transition-colors duration-200 ${
                  pathname === "/" ? 'text-primary' : ''
                }`}
                href={item.path}>{item.label}</Link>
              // <button
              //   key={item.label}
              //   onClick={() => navigate(item.page)}
              //   className={`text-foreground hover:text-primary transition-colors duration-200 ${
              //     currentPage === item.page ? 'text-primary' : ''
              //   }`}
              // >
              // {item.label}
              // </button>
            ))}
          </nav>

          {/*  /!* 모바일 메뉴 버튼 *!/*/}
          {/*  <Button*/}
          {/*    variant="ghost"*/}
          {/*    size="icon"*/}
          {/*    className="md:hidden"*/}
          {/*    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}*/}
          {/*  >*/}
          {/*    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}*/}
          {/*  </Button>*/}
        </div>

        {/*/!* 모바일 네비게이션 *!/*/}
        {/*{isMobileMenuOpen && (*/}
        {/*  <nav className="md:hidden py-4 border-t border-border">*/}
        {/*    <div className="flex flex-col space-y-4">*/}
        {/*      {navItems.map((item) => (*/}
        {/*        <button*/}
        {/*          key={item.label}*/}
        {/*          onClick={() => {*/}
        {/*            navigate(item.page);*/}
        {/*            setIsMobileMenuOpen(false);*/}
        {/*          }}*/}
        {/*          className={`text-left text-foreground hover:text-primary transition-colors duration-200 py-2 ${*/}
        {/*            currentPage === item.page ? 'text-primary' : ''*/}
        {/*          }`}*/}
        {/*        >*/}
        {/*          {item.label}*/}
        {/*        </button>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </nav>*/}
        {/*)}*/}
      </div>
    </header>
  )
}