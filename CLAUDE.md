# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 리포지토리에서 작업할 때 필요한 가이드라인을 제공합니다.

## 프로젝트 개요

"archi-office-web"은 건축사사무소 포트폴리오를 위한 웹 애플리케이션입니다. Next.js 15.5.3, React 19, TypeScript, Tailwind CSS v4로 구축되었으며, App Router 아키텍처를 사용하는 최신 Next.js 애플리케이션입니다.

## 개발 명령어

```bash
yarn dev            # 개발 서버 시작 (http://localhost:3000)
yarn build          # 프로덕션 빌드 생성
yarn start          # 프로덕션 서버 시작
yarn lint           # ESLint 검사
```

## 기술 스택

### Core Framework
- **Framework**: Next.js 15.5.3 (App Router)
- **React**: 19.1.0
- **언어**: TypeScript 5
- **패키지 매니저**: Yarn 4.9.2
- **프로젝트 버전**: 0.1.0

### 스타일링
- **CSS Framework**: Tailwind CSS v4
- **PostCSS**: @tailwindcss/postcss 플러그인 사용
- **스타일 파일**: `src/app/globals.css` (Tailwind CSS import)

### 개발 도구
- **Linting**: ESLint 9 + Next.js config
- **Type Checking**: TypeScript strict mode
- **Build Tool**: Next.js built-in bundler

### 계획된 추가 기술 스택 (MVP)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage
- **UI Components**: Radix UI + Lucide React
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod

## 프로젝트 구조

### 현재 구조
```
archi-office-web/
├── src/
│   └── app/                    # Next.js App Router
│       ├── layout.tsx         # 루트 레이아웃
│       ├── page.tsx          # 홈페이지 ("건축사사무소")
│       └── globals.css       # Tailwind CSS import
├── docs/                      # 개발 문서
│   └── mvp_dev_steps.md      # MVP 개발 단계별 가이드
├── public/                    # 정적 파일 (현재 비어있음)
├── .next/                     # Next.js 빌드 출력
├── node_modules/             # 의존성
├── package.json              # 프로젝트 설정
├── tsconfig.json            # TypeScript 설정
├── eslint.config.mjs        # ESLint 설정 (Flat Config)
├── postcss.config.mjs       # PostCSS 설정
├── next.config.ts           # Next.js 설정
└── CLAUDE.md               # 이 파일
```

### 계획된 구조 (MVP)
```
src/
├── app/                 # App Router
│   ├── (admin)/        # 관리자 라우트 그룹
│   │   └── admin/      # 관리자 대시보드
│   ├── about/          # 회사 소개 페이지
│   ├── contact/        # 문의하기 페이지
│   ├── portfolio/      # 포트폴리오 페이지
│   │   └── [id]/       # 개별 프로젝트 상세
│   ├── api/            # API 라우트
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/         # 재사용 컴포넌트
│   ├── ui/            # 기본 UI 컴포넌트
│   ├── admin/         # 관리자 전용 컴포넌트
│   └── layout/        # 레이아웃 컴포넌트
├── lib/               # 유틸리티 함수
│   └── supabase.ts    # Supabase 클라이언트
├── types/             # TypeScript 타입 정의
└── hooks/             # 커스텀 훅
```

## TypeScript 설정

### 컴파일러 옵션
- **Target**: ES2017
- **Module**: ESNext (bundler resolution)
- **Strict Mode**: 활성화
- **JSX**: preserve (Next.js가 처리)
- **Path Mapping**: `@/*` → `./src/*`



## 코딩 컨벤션

### ESLint 설정
- **Config Type**: Flat Config (eslint.config.mjs)
- **Extends**: 
  - `next/core-web-vitals`
  - `next/typescript`
- **Ignore Patterns**: node_modules, .next, out, build, next-env.d.ts

### 파일 구조 컨벤션
- **컴포넌트**: TSX 확장자 사용, 파일명은 PascalCase (예: `HeroSection.tsx`, `FeaturedProjects.tsx`)
- **스타일**: Tailwind CSS 클래스 기반
- **타입 정의**: TypeScript 내장 타입 + Next.js 타입
- **Import 경로**: `@/*` 별칭 사용 권장

### React 컴포넌트 패턴
```typescript
// 함수형 컴포넌트 + 타입 정의
export default function ComponentName() {
  return (
    // JSX
  );
}

// 레이아웃 컴포넌트 (children props)
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // JSX with children
  );
}
```

## 주요 특징

### Next.js App Router
- 파일 기반 라우팅 (`src/app/` 디렉토리)
- 서버 컴포넌트 기본 사용
- `layout.tsx`를 통한 공통 레이아웃 관리
- Metadata API 활용

### Tailwind CSS v4
- PostCSS 플러그인 방식 사용
- 최소한의 설정으로 빠른 스타일링
- `@import "tailwindcss"` 방식으로 CSS 로드

### 개발 환경
- Hot Reload 지원 (yarn dev)
- TypeScript strict mode로 타입 안전성 보장
- ESLint로 코드 품질 관리

## 권장 사항

1. **컴포넌트 작성 시**:
   - TypeScript 타입 정의 필수
   - 함수형 컴포넌트 사용
   - Tailwind CSS 클래스로 스타일링

2. **파일 구조**:
   - `src/app/` 아래에 페이지 구성
   - 공통 컴포넌트는 `src/components/` 권장
   - 유틸리티는 `src/utils/` 권장

3. **Import 사용**:
   - 절대 경로 `@/*` 사용
   - Next.js 내장 컴포넌트 적극 활용
   - 타입 import는 `import type` 구문 사용


## 개발 규칙

### 보안 및 정보 관리
- **API Key/Token 보안**: 모든 API KEY, TOKEN 등 중요 정보는 외부 노출 금지
- **Git 커밋 제한**: 민감한 정보 커밋 시도 시 반드시 알림
- **문서 최신화**: 계획서, 설계서, 체크리스트 등 최신 상태 유지 및 Git 반영

### 오류 처리 프로세스
- **단계별 접근**: 원인파악 → 해결방안 → 개발자 확인 → 테스트 → 소스수정
- **순차적 처리**: 한 번에 모든 오류를 다루지 않고 하나씩 단계별 진행
- **확산 적용**: 소스 수정 후 유사 코드 확인 및 개발자 승인 하에 일괄 적용

### 코드 품질 기준
- **실제 구현**: 모킹 금지, 실제 동작하는 코드만 작성
- **타입 안전성**: TypeScript strict mode 준수
- **테스트 커버리지**: 90% 이상 유지
- **명명 규칙**: 
  - 컴포넌트: PascalCase, 기능 명확 표현
  - React import: `import {type ReactNode, type FC} from 'react'`

### 의존성 관리
- **React 버전**: 19.1.0 고정 (package.json resolutions 설정)
- **패키지 추가**: 기존 의존성과의 충돌 여부 사전 확인 필수 

## MVP 개발 로드맵

### 개발 철학
- **80/20 원칙**: 20%의 핵심 기능으로 80%의 가치 제공
- **빠른 검증**: 2주 내 데모 가능한 수준 구축
- **확장 가능**: 추후 기능 추가가 용이한 구조 설계

### 개발 단계별 우선순위

#### 🔥 1주차 필수 (데모 가능 수준)
1. **프로젝트 설정** + DB 스키마
   - Supabase 설정 및 테이블 생성
   - 기본 폴더 구조 구축
2. **메인 페이지** (Hero + Featured Projects)
   - 회사 소개 Hero 섹션
   - 대표 프로젝트 3개 표시
3. **포트폴리오 목록 페이지**
   - 프로젝트 그리드 뷰
   - 기본 카테고리 필터
4. **기본 관리자 로그인**
   - 하드코딩 인증 시스템

#### 🚀 2주차 완성 (제안서 제출 수준)
5. **포트폴리오 상세 페이지**
   - 이미지 갤러리
   - 프로젝트 상세 정보
6. **관리자 프로젝트 관리**
   - CRUD 기능
   - 이미지 업로드
7. **회사 소개 페이지**
   - 정적 컨텐츠
8. **반응형 디자인**
   - 모바일 최적화

#### ✨ 3주차 완결 (실제 런칭 수준)
9. **문의 기능**
   - 연락처 폼
   - 이메일 알림
10. **성능 최적화**
    - 이미지 최적화
    - SEO 메타태그
11. **배포 및 도메인 연결**
    - Vercel 배포
    - 도메인 설정
12. **문서화**
    - README 작성
    - 사용자 가이드

### 데이터베이스 스키마 (Supabase)

#### Projects 테이블
```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  location VARCHAR(100),
  year INTEGER,
  client VARCHAR(100),
  area VARCHAR(50),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Project Images 테이블
```sql
CREATE TABLE project_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(200),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 페이지 구성 우선순위

#### 메인 페이지 컴포넌트
1. **Hero Section** ⭐⭐⭐ (최우선)
   - 회사명/로고
   - 대표 이미지
   - 소개 문구
2. **Featured Projects** ⭐⭐⭐ (최우선)
   - 대표 프로젝트 3개 카드
3. **About Preview** ⭐⭐ (2순위)
   - 간단한 회사 소개
4. **Contact Section** ⭐ (3순위)
   - 기본 연락처 정보

#### 필수 패키지 설치 목록
```bash
# Database & Auth
npm install @supabase/supabase-js

# UI Components
npm install lucide-react
npm install @radix-ui/react-slot

# Animation
npm install framer-motion

# Forms
npm install react-hook-form @hookform/resolvers/zod zod
```

