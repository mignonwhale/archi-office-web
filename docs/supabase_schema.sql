-- STUDIO ARCH 포트폴리오 웹사이트 데이터베이스 스키마
-- 업데이트 날짜: 2024-09-16
-- 기반: data.ts와 types/index.ts 분석

-- 1. Projects 테이블 (포트폴리오 프로젝트)
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  long_description TEXT,
  location VARCHAR(100),
  year INTEGER,
  client VARCHAR(100),
  area VARCHAR(50),
  features TEXT[], -- 문자열 배열로 features 저장
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Project Images 테이블 (프로젝트 이미지)
CREATE TABLE project_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(200),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. News Items 테이블 (뉴스/소식)
CREATE TABLE news_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  title VARCHAR(200) NOT NULL,
  summary TEXT,
  content TEXT NOT NULL,
  date VARCHAR(20), -- "2024.12.15" 형식
  author VARCHAR(100) DEFAULT 'STUDIO ARCH',
  views INTEGER DEFAULT 0,
  image VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Team Members 테이블 (팀 구성원)
CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  position VARCHAR(100) NOT NULL,
  education VARCHAR(200),
  experience VARCHAR(50),
  specialty VARCHAR(200),
  image VARCHAR(500),
  status VARCHAR(20) DEFAULT '활성',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- contact_status ENUM 타입 정의 (테이블 생성 전에 먼저 정의)
CREATE TYPE contact_status AS ENUM ('new', 'in-progress', 'completed');

-- 5. Contact Inquiries 테이블 (문의사항)
CREATE TABLE contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  company VARCHAR(100),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  project_type VARCHAR(100),
  budget VARCHAR(100),
  timeline VARCHAR(100),
  message TEXT NOT NULL,
  status contact_status DEFAULT 'new',
  date VARCHAR(20), -- "2024.12.15" 형식
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Social Links 테이블 (소셜 미디어 링크)
CREATE TABLE social_links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  handle VARCHAR(100) NOT NULL,
  icon_name VARCHAR(50) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Instagram Posts 테이블 (인스타그램 포스트)
CREATE TABLE instagram_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image VARCHAR(500) NOT NULL,
  caption TEXT,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Timeline Items 테이블 (회사 연혁)
CREATE TABLE timeline_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year VARCHAR(4) NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Services 테이블 (제공 서비스)
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  icon_name VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  features TEXT[], -- 문자열 배열로 features 저장
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성 (성능 최적화)
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(is_featured);
CREATE INDEX idx_projects_year ON projects(year);
CREATE INDEX idx_project_images_project_id ON project_images(project_id);
CREATE INDEX idx_project_images_sort_order ON project_images(sort_order);
CREATE INDEX idx_news_items_category ON news_items(category);
CREATE INDEX idx_news_items_date ON news_items(date);
CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX idx_contact_inquiries_date ON contact_inquiries(date);
CREATE INDEX idx_timeline_items_year ON timeline_items(year);
CREATE INDEX idx_timeline_items_sort_order ON timeline_items(sort_order);

-- 업데이트 시간 자동 갱신을 위한 트리거 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 각 테이블에 업데이트 시간 자동 갱신 트리거 추가
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_items_updated_at BEFORE UPDATE ON news_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_inquiries_updated_at BEFORE UPDATE ON contact_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_social_links_updated_at BEFORE UPDATE ON social_links FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_instagram_posts_updated_at BEFORE UPDATE ON instagram_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_timeline_items_updated_at BEFORE UPDATE ON timeline_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) 설정
-- 테스트 단계에서는 RLS를 비활성화합니다.
-- 프로덕션 배포 시 아래 주석을 해제하여 RLS를 활성화하세요.

-- ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE news_items ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE instagram_posts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE timeline_items ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- 테스트용: 모든 RLS 비활성화
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
ALTER TABLE project_images DISABLE ROW LEVEL SECURITY;
ALTER TABLE news_items DISABLE ROW LEVEL SECURITY;
ALTER TABLE team_members DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries DISABLE ROW LEVEL SECURITY;
ALTER TABLE social_links DISABLE ROW LEVEL SECURITY;
ALTER TABLE instagram_posts DISABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_items DISABLE ROW LEVEL SECURITY;
ALTER TABLE services DISABLE ROW LEVEL SECURITY;

-- RLS 정책 설정 (테스트 단계에서는 주석 처리)
-- 프로덕션 배포 시 아래 정책들의 주석을 해제하고 RLS를 활성화하세요.


-- 1. Projects 테이블 정책
CREATE POLICY "Enable read access for all users" ON projects
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON projects
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON projects
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON projects
    FOR DELETE TO authenticated USING (true);

-- 2. Project Images 테이블 정책
CREATE POLICY "Enable read access for all users" ON project_images
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON project_images
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON project_images
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON project_images
    FOR DELETE TO authenticated USING (true);

-- 3. News Items 테이블 정책
CREATE POLICY "Enable read access for all users" ON news_items
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON news_items
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON news_items
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON news_items
    FOR DELETE TO authenticated USING (true);

-- 4. Team Members 테이블 정책
CREATE POLICY "Enable read access for all users" ON team_members
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON team_members
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON team_members
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON team_members
    FOR DELETE TO authenticated USING (true);

-- 5. Contact Inquiries 테이블 정책 (관리자만 접근)
CREATE POLICY "Enable read for authenticated users" ON contact_inquiries
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable insert for all users" ON contact_inquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON contact_inquiries
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON contact_inquiries
    FOR DELETE TO authenticated USING (true);

-- 6. Social Links 테이블 정책
CREATE POLICY "Enable read access for all users" ON social_links
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON social_links
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON social_links
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON social_links
    FOR DELETE TO authenticated USING (true);

-- 7. Instagram Posts 테이블 정책
CREATE POLICY "Enable read access for all users" ON instagram_posts
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON instagram_posts
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON instagram_posts
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON instagram_posts
    FOR DELETE TO authenticated USING (true);

-- 8. Timeline Items 테이블 정책
CREATE POLICY "Enable read access for all users" ON timeline_items
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON timeline_items
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON timeline_items
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON timeline_items
    FOR DELETE TO authenticated USING (true);

-- 9. Services 테이블 정책
CREATE POLICY "Enable read access for all users" ON services
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON services
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users" ON services
    FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON services
    FOR DELETE TO authenticated USING (true);

-- Storage 정책 설정 (project-images 버킷용)
-- 주의: 이 정책들은 Supabase Dashboard > Storage > Policies에서 설정하거나
-- 아래 SQL을 별도로 실행해야 합니다.

-- Storage 버킷 생성 (Dashboard에서 수동 생성 권장)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('project-images', 'project-images', true);

-- Storage 정책 (별도 실행 필요)
-- CREATE POLICY "Allow authenticated uploads" ON storage.objects
--     FOR INSERT TO authenticated WITH CHECK (bucket_id = 'project-images');

-- CREATE POLICY "Allow public reads" ON storage.objects
--     FOR SELECT TO public USING (bucket_id = 'project-images');

-- CREATE POLICY "Allow authenticated updates" ON storage.objects
--     FOR UPDATE TO authenticated USING (bucket_id = 'project-images');

-- CREATE POLICY "Allow authenticated deletes" ON storage.objects
--     FOR DELETE TO authenticated USING (bucket_id = 'project-images');

-- 샘플 데이터 삽입은 별도의 파일에서 수행
-- INSERT INTO 문들은 insert_sample_data.sql 파일 참조



  -- 방법 1: Storage RLS 완전 비활성화 (권장)

  -- Supabase Dashboard > SQL Editor에서 실행
  ALTER TABLE storage.objects DISABLE ROW LEVEL SECURITY;

  -- 방법 2: 임시 Storage 정책 생성

  -- 모든 사용자에게 업로드 허용 (테스트용)
  CREATE POLICY "Allow all uploads for testing" ON storage.objects
      FOR INSERT WITH CHECK (bucket_id = 'project-images');

  -- 모든 사용자에게 읽기 허용
  CREATE POLICY "Allow all reads for testing" ON storage.objects
      FOR SELECT USING (bucket_id = 'project-images');

  -- 방법 3: 버킷을 Public으로 설정

  -- 버킷을 완전히 공개로 설정
  UPDATE storage.buckets
  SET public = true
  WHERE id = 'project-images';


  -- Storage RLS 상태 확인
  SELECT schemaname, tablename, rowsecurity
  FROM pg_tables
  WHERE tablename = 'objects' AND schemaname = 'storage';

  -- 버킷 상태 확인
  SELECT id, name, public
  FROM storage.buckets
  WHERE id = 'project-images';
