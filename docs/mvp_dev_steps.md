# MVP 개발 단계별 가이드

## 개발 전략

### MVP 철학
- **80/20 원칙**: 20%의 핵심 기능으로 80%의 가치 제공
- **빠른 검증**: 2주 내 데모 가능한 수준
- **확장 가능**: 추후 기능 추가가 용이한 구조

## Phase 1: 프로젝트 기반 구축 (2-3일)

### 1.1 개발 환경 설정
```bash
# Next.js 프로젝트 생성
yarn create-next-app@latest architecture-portfolio --typescript --tailwind --eslint

# 필수 패키지 설치
yarn add @supabase/supabase-js
yarn add lucide-react
yarn add framer-motion
yarn add react-hook-form @hookform/resolvers/zod zod
yarn add @radix-ui/react-slot
```

### 1.2 폴더 구조 설계 (✅ 구현 완료)
```
src/
├── app/                    # Next.js App Router
│   ├── (admin)/           # 관리자 라우트 그룹
│   │   └── admin/         # 관리자 대시보드 (/admin)
│   ├── about/             # 회사 소개 페이지 (/about)
│   ├── contact/           # 문의하기 페이지 (/contact)
│   ├── news/              # 뉴스 페이지
│   │   ├── page.tsx       # 뉴스 목록 (/news)
│   │   └── [id]/          # 뉴스 상세 (/news/[id])
│   ├── projects/          # 프로젝트 페이지
│   │   ├── page.tsx       # 프로젝트 목록 (/projects)
│   │   └── [id]/          # 프로젝트 상세 (/projects/[id])
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx          # 홈페이지 (/)
│   └── globals.css       # Tailwind CSS import
├── components/            # 재사용 컴포넌트
│   ├── ui/               # Radix UI 기반 컴포넌트
│   │   ├── button.tsx    # 버튼 컴포넌트
│   │   ├── card.tsx      # 카드 컴포넌트
│   │   ├── input.tsx     # 입력 컴포넌트
│   │   ├── select.tsx    # 선택 컴포넌트
│   │   ├── tabs.tsx      # 탭 컴포넌트
│   │   ├── textarea.tsx  # 텍스트영역 컴포넌트
│   │   ├── label.tsx     # 라벨 컴포넌트
│   │   └── badge.tsx     # 배지 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   │   ├── Header.tsx    # 헤더 네비게이션
│   │   └── Footer.tsx    # 푸터
│   ├── sections/         # 페이지 섹션 컴포넌트
│   │   ├── HeroSection.tsx        # 메인 히어로
│   │   ├── FeaturedProjects.tsx   # 대표 프로젝트
│   │   ├── NewsSection.tsx        # 뉴스 섹션
│   │   ├── ProjectGallery.tsx     # 프로젝트 갤러리
│   │   ├── Expertise.tsx          # 전문 분야
│   │   ├── Philosophy.tsx         # 철학
│   │   └── SocialMedia.tsx        # 소셜 미디어
│   └── pages/            # 페이지별 컴포넌트
│       ├── AboutPage.tsx         # 회사 소개
│       ├── ContactPage.tsx       # 문의하기
│       ├── ProjectsPage.tsx      # 프로젝트 목록
│       ├── ProjectDetailPage.tsx # 프로젝트 상세
│       ├── NewsPage.tsx          # 뉴스 목록
│       ├── NewsDetailPage.tsx    # 뉴스 상세
│       └── AdminPage.tsx         # 관리자 대시보드
├── lib/                  # 유틸리티 함수 및 설정
│   ├── supabase.ts      # Supabase 클라이언트 설정
│   ├── utils.ts         # CSS 클래스 유틸리티
│   ├── data.ts          # 더미 데이터 (MVP용)
│   └── icons.tsx        # 아이콘 매핑 (Lucide + Simple Icons)
├── types/               # TypeScript 타입 정의
│   └── index.ts         # 모든 인터페이스 정의
└── hooks/               # 커스텀 훅 (향후 확장용)
```

### 1.3 Supabase 설정
- 프로젝트 생성
- 데이터베이스 테이블 생성
- Storage 버킷 설정
- 환경변수 설정

**우선순위**: ⭐⭐⭐ (필수)

---

## Phase 2: 데이터 구조 및 기본 컴포넌트 (2-3일)

### 2.1 데이터베이스 스키마 구현
```sql
-- 1. Projects 테이블 (포트폴리오)
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  location VARCHAR(100),
  year INTEGER,
  client VARCHAR(100),
  area VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_featured BOOLEAN DEFAULT false
);

-- 2. Project Images 테이블
CREATE TABLE project_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(200),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 3. 샘플 데이터 INSERT
INSERT INTO projects (title, category, description, location, year, client, is_featured) VALUES
('모던 주택', '주거', '심플하고 모던한 단독주택 프로젝트', '서울시 강남구', 2023, '개인', true),
('상업 복합시설', '상업', '다목적 상업 공간 설계', '서울시 마포구', 2023, 'ABC건설', true);
```

### 2.2 기본 UI 컴포넌트
- Header/Navigation
- Footer
- Card 컴포넌트
- Button 컴포넌트
- Loading Spinner

### 2.3 Supabase 클라이언트 설정
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

**우선순위**: ⭐⭐⭐ (필수)

---

## Phase 3: 메인 페이지 구현 (2일)

### 3.1 메인 페이지 구성요소
```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />          // 1순위 구현
      <FeaturedProjects />     // 2순위 구현  
      <AboutPreview />         // 3순위 구현
      <ContactSection />       // 4순위 구현
    </>
  )
}
```

### 3.2 핵심 섹션별 우선순위

**1순위: Hero Section** ⭐⭐⭐
- 회사명/로고
- 대표 이미지 1장
- 간단한 소개 문구
- CTA 버튼

**2순위: Featured Projects** ⭐⭐⭐
- 대표 프로젝트 3개
- 카드 형태로 표시
- 이미지 + 제목 + 간단 설명

**3순위: About Preview** ⭐⭐
- 회사 소개 1-2문장
- "더보기" 링크

**4순위: Contact Section** ⭐
- 연락처 정보
- 위치 정보

**우선순위**: ⭐⭐⭐ (데모용 필수)

---

## Phase 4: 포트폴리오 페이지 (3일)

### 4.1 포트폴리오 목록 페이지
```typescript
// app/portfolio/page.tsx
function PortfolioPage() {
  return (
    <>
      <CategoryFilter />      // 간단한 탭 형태
      <ProjectGrid />         // 그리드 레이아웃
      <Pagination />          // 나중에 구현
    </>
  )
}
```

### 4.2 포트폴리오 상세 페이지
```typescript
// app/portfolio/[id]/page.tsx
function ProjectDetail() {
  return (
    <>
      <ImageGallery />        // 1순위: 기본 슬라이더
      <ProjectInfo />         // 2순위: 프로젝트 정보
      <RelatedProjects />     // 3순위: 관련 프로젝트
    </>
  )
}
```

### 4.3 우선순위별 구현

**1순위: 기본 그리드 + 상세보기** ⭐⭐⭐
- 프로젝트 목록 그리드
- 상세 페이지 라우팅
- 기본 이미지 갤러리

**2순위: 카테고리 필터** ⭐⭐
- 전체/주거/상업/공공 탭
- 클릭시 필터링

**3순위: 고급 기능** ⭐
- 무한스크롤
- 이미지 확대보기
- 공유 기능

**우선순위**: ⭐⭐⭐ (포트폴리오의 핵심)

---

## Phase 5: 관리자 시스템 기본 (3일)

### 5.1 인증 시스템
```typescript
// 간단한 하드코딩 인증 (MVP용)
const ADMIN_CREDENTIALS = {
  email: 'admin@company.com',
  password: 'admin123!'
}
```

### 5.2 관리자 대시보드
```typescript
// app/(admin)/admin/page.tsx
function AdminDashboard() {
  return (
    <>
      <StatsCards />          // 프로젝트 수, 문의 수
      <QuickActions />        // 새 프로젝트 등록 버튼
      <RecentActivity />      // 최근 활동 목록
    </>
  )
}
```

### 5.3 프로젝트 관리
- 프로젝트 목록 (CRUD)
- 새 프로젝트 등록 폼
- 이미지 업로드 (1장만 우선)

### 5.4 우선순위

**1순위: 기본 로그인 + 프로젝트 등록** ⭐⭐⭐
- 하드코딩 인증
- 프로젝트 생성/수정/삭제
- 이미지 1장 업로드

**2순위: 대시보드** ⭐⭐
- 통계 정보
- 최근 등록 프로젝트

**3순위: 고급 관리 기능** ⭐
- 사용자 관리
- 권한 시스템
- 로그 관리

**우선순위**: ⭐⭐⭐ (데모 시 필수)

---

## Phase 6: 나머지 페이지 (2일)

### 6.1 회사 소개 페이지
```typescript
// app/about/page.tsx - 정적 페이지로 우선 구현
function AboutPage() {
  return (
    <>
      <CompanyOverview />     // 회사 소개
      <History />            // 연혁 (간단히)
      <Team />              // 팀 소개 (나중에)
    </>
  )
}
```

### 6.2 문의하기 페이지
```typescript
// app/contact/page.tsx
function ContactPage() {
  return (
    <>
      <ContactForm />        // 1순위: 기본 폼
      <ContactInfo />        // 2순위: 연락처 정보
      <Map />               // 3순위: 지도 (나중에)
    </>
  )
}
```

**우선순위**: ⭐⭐ (나중에 구현해도 됨)

---

## Phase 7: 마무리 및 배포 (2일)

### 7.1 성능 최적화
- 이미지 최적화 (Next.js Image)
- 기본 SEO 메타태그
- Lighthouse 점수 확인

### 7.2 배포 준비
- Vercel 배포
- Supabase 프로덕션 설정
- 도메인 연결 준비

**우선순위**: ⭐⭐ (데모 완성도)

---

## 개발 우선순위 매트릭스

### 🔥 1주차 필수 (데모 가능 수준)
1. 프로젝트 설정 + DB 스키마
2. 메인 페이지 (Hero + Featured Projects)
3. 포트폴리오 목록 페이지
4. 기본 관리자 로그인

### 🚀 2주차 완성 (제안서 제출 수준)
5. 포트폴리오 상세 페이지
6. 관리자 프로젝트 관리
7. 회사 소개 페이지
8. 반응형 디자인

### ✨ 3주차 완결 (실제 런칭 수준)
9. 문의 기능
10. 성능 최적화
11. 배포 및 도메인 연결
12. 문서화

## 🎯 현재 개발 진행 상황 (2024-09-15 기준)

### ✅ 완료된 항목

#### Phase 1: 프로젝트 기반 구축 (완료)
- ✅ Next.js 15.5.3 + TypeScript + Tailwind CSS v4 설정
- ✅ 폴더 구조 구축 (src/app, src/components, src/lib, src/types)
- ✅ Supabase 클라이언트 설정 (src/lib/supabase.ts)
- ✅ 기본 UI 컴포넌트 (button, card, input, select, tabs, textarea, label, badge)

#### Phase 2: 데이터 구조 및 기본 컴포넌트 (완료)
- ✅ TypeScript 타입 정의 (src/types/index.ts)
- ✅ 기본 레이아웃 컴포넌트 (Header, Footer)
- ✅ Supabase 데이터 유틸리티 (src/lib/data.ts)
- ✅ CSS 유틸리티 함수 (src/lib/utils.ts)

#### Phase 3: 메인 페이지 구현 (완료)
- ✅ 메인 페이지 (src/app/page.tsx)
- ✅ Hero Section 컴포넌트
- ✅ Featured Projects 섹션
- ✅ News Section 컴포넌트
- ✅ Project Gallery 컴포넌트
- ✅ Expertise 섹션
- ✅ Philosophy 섹션
- ✅ Social Media 섹션

#### Phase 4: 포트폴리오 페이지 (완료)
- ✅ 프로젝트 목록 페이지 (src/app/projects/page.tsx)
- ✅ 프로젝트 상세 페이지 (src/app/projects/[id]/page.tsx)
- ✅ ProjectsPage 컴포넌트
- ✅ ProjectDetailPage 컴포넌트

#### Phase 5: 관리자 시스템 기본 (완료)
- ✅ 관리자 라우트 그룹 (src/app/(admin)/)
- ✅ 관리자 대시보드 (src/app/(admin)/admin/page.tsx)
- ✅ AdminPage 컴포넌트

#### Phase 6: 나머지 페이지 (완료)
- ✅ 회사 소개 페이지 (src/app/about/page.tsx, AboutPage 컴포넌트)
- ✅ 문의하기 페이지 (src/app/contact/page.tsx, ContactPage 컴포넌트)
- ✅ 뉴스 페이지 (src/app/news/page.tsx, NewsPage 컴포넌트)
- ✅ 뉴스 상세 페이지 (src/app/news/[id]/page.tsx, NewsDetailPage 컴포넌트)

### 🚧 진행 중인 이슈

#### 의존성 해결
- ✅ **토스트 알림 기능**: react-hot-toast 구현 완료
  - ContactPage에서 폼 제출 시 로딩/성공/에러 토스트 표시
  - 테마에 맞는 스타일링 적용

#### 미완성 기능
- 🔄 **Supabase 데이터베이스 스키마**: 실제 테이블 생성 미완료
- 🔄 **이미지 업로드 기능**: Storage 설정 미완료
- 🔄 **실제 데이터 연동**: 현재 더미 데이터 사용 중

### 📋 다음 우선순위 작업

#### 즉시 해결 필요 (P0)
1. **Supabase 데이터베이스 설정** - 실제 테이블 생성
2. **환경변수 설정** - Supabase 연결 정보

#### 단기 작업 (P1)
4. **샘플 데이터 삽입** - 실제 프로젝트 데이터로 교체
5. **이미지 업로드 기능** - Supabase Storage 연동
6. **관리자 인증 시스템** - 실제 로그인 기능 구현

#### 중기 작업 (P2)
7. **성능 최적화** - 이미지 최적화, SEO 메타태그
8. **반응형 디자인 점검** - 모바일 최적화 확인
9. **에러 처리** - 사용자 경험 개선

### 💡 현재 상태 요약

**전체 진행도**: 약 75% 완료 ✨

- **Frontend 구조**: 95% 완료 (모든 페이지, 컴포넌트 구현됨)
- **Backend 연동**: 25% 완료 (설정은 되었으나 실제 DB 미연결)
- **관리자 시스템**: 60% 완료 (UI는 완성, 실제 기능 미구현)
- **배포 준비도**: 40% 완료 (코드는 준비, 환경설정 필요)

**다음 단계**: Supabase 데이터베이스 설정 및 실제 데이터 연동이 가장 우선순위입니다.