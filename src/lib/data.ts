import {InstagramPost, NewsItem, Project, Service, SocialLink, TeamMember, TimeLineItem} from '@/types';
import {Facebook, Instagram, Linkedin, Youtube} from 'lucide-react';

export const projects: Project[] = [
  {
    id: "1",
    title: "모던 레지던스",
    category: "주거",
    location: "서울시 강남구",
    year: 2024,
    client: "개인 주택",
    area: "240㎡",
    is_featured: true,
    created_at: "2024-09-15T00:00:00Z",
    updated_at: "2024-09-15T00:00:00Z",
    images: [
      {
        id: "1-1",
        project_id: "1",
        image_url: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc4NjYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt_text: "모던 레지던스 외관",
        sort_order: 1,
        created_at: "2024-09-15T00:00:00Z"
      },
      {
        id: "1-2",
        project_id: "1",
        image_url: "https://images.unsplash.com/photo-1572197491557-5b1a2c767c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNTc3OTIxOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt_text: "모던 레지던스 내부",
        sort_order: 2,
        created_at: "2024-09-15T00:00:00Z"
      }
    ],
    description: "자연과 조화를 이루는 현대적 주거공간",
    longDescription: "도심 속에서도 자연의 평온함을 느낄 수 있는 주거공간을 목표로 설계되었습니다. 대형 창호를 통해 외부 정원과 내부 공간이 시각적으로 연결되며, 자연 채광을 최대한 활용한 설계가 특징입니다.",
    features: ["친환경 자재 사용", "패시브 하우스 기준", "스마트 홈 시스템", "옥상 정원"]
  },
  {
    id: "2",
    title: "미니멀 오피스",
    category: "상업",
    location: "서울시 마포구",
    year: 2024,
    client: "IT 스타트업",
    area: "180㎡",
    is_featured: true,
    created_at: "2024-09-15T00:00:00Z",
    updated_at: "2024-09-15T00:00:00Z",
    images: [
      {
        id: "2-1",
        project_id: "2",
        image_url: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc5MjIyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt_text: "미니멀 오피스 워크스페이스",
        sort_order: 1,
        created_at: "2024-09-15T00:00:00Z"
      },
      {
        id: "2-2",
        project_id: "2",
        image_url: "https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzkyMTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt_text: "미니멀 오피스 팀 공간",
        sort_order: 2,
        created_at: "2024-09-15T00:00:00Z"
      }
    ],
    description: "창의성을 자극하는 미니멀한 업무 공간",
    longDescription: "젊은 IT 기업의 문화와 가치를 반영한 사무공간입니다. 개방적이면서도 집중할 수 있는 환경을 조성하여 직원들의 창의성과 협업을 촉진하는 것이 목표였습니다.",
    features: ["플렉시블 워크스테이션", "휴게 공간", "회의실 4개", "카페테리아"]
  },
  {
    id: "3",
    title: "어반 컴플렉스",
    category: "공공",
    location: "인천시 연수구",
    year: 2023,
    client: "부동산 개발업체",
    area: "1,200㎡",
    is_featured: false,
    created_at: "2024-09-15T00:00:00Z",
    updated_at: "2024-09-15T00:00:00Z",
    images: [
      {
        id: "3-1",
        project_id: "3",
        image_url: "https://images.unsplash.com/photo-1650332162976-f6686076948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1NzkyMTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt_text: "어반 컴플렉스 전체 전경",
        sort_order: 1,
        created_at: "2024-09-15T00:00:00Z"
      },
      {
        id: "3-2",
        project_id: "3",
        image_url: "https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc1Nzg1MTkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt_text: "어반 컴플렉스 외관 디테일",
        sort_order: 2,
        created_at: "2024-09-15T00:00:00Z"
      }
    ],
    description: "도시 환경에 최적화된 복합 건축물",
    longDescription: "주거, 상업, 업무가 융합된 복합 건축물로서 도시의 새로운 랜드마크 역할을 합니다. 지속가능한 건축 기법과 최신 기술을 적용하여 미래 지향적인 도시 생활을 제안합니다.",
    features: ["LEED 인증", "태양광 발전", "빗물 재활용", "지하철 연결"]
  },
  {
    id: "4",
    title: "상업 파사드 리뉴얼",
    category: "리노베이션",
    location: "대구시 중구",
    year: 2023,
    client: "상업 건물주",
    area: "800㎡",
    is_featured: false,
    created_at: "2024-09-15T00:00:00Z",
    updated_at: "2024-09-15T00:00:00Z",
    images: [
      {
        id: "4-1",
        project_id: "4",
        image_url: "https://images.unsplash.com/photo-1742156524915-f72d6332f38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYXJjaGl0ZWN0dXJlJTIwZmFjYWRlfGVufDF8fHx8MTc1NzkyMTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt_text: "상업 파사드 리뉴얼 완성",
        sort_order: 1,
        created_at: "2024-09-15T00:00:00Z"
      }
    ],
    description: "혁신적인 외관 디자인의 상업 건축",
    longDescription: "기존 상업 건물의 낡은 외관을 현대적이고 매력적인 파사드로 변화시킨 프로젝트입니다. 건물의 가치를 높이고 거리의 활력을 불어넣는 것이 주요 목표였습니다.",
    features: ["LED 조명 시스템", "친환경 단열재", "유지보수 최소화", "야간 경관 조명"]
  }
];

export const newsData: NewsItem[] = [
  {
    id: "1",
    category: "수상",
    title: "2024 한국건축문화대상 우수상 수상",
    summary: "혁신적인 친환경 주거 프로젝트로 한국건축문화대상에서 우수상을 수상했습니다.",
    content: `STUDIO ARCH가 설계한 '모던 레지던스' 프로젝트가 2024 한국건축문화대상에서 우수상을 수상하는 영예를 안았습니다.

이번 수상작은 도심 속에서도 자연과 조화를 이루는 주거공간을 구현한 것이 특징입니다. 패시브 하우스 기준을 만족하는 친환경 설계와 더불어, 스마트 홈 시스템을 통합하여 미래 지향적인 주거 환경을 제시했습니다.

심사위원들은 "전통적인 한국 건축의 공간감을 현대적으로 재해석하면서도, 지속가능성을 고려한 혁신적인 접근이 돋보인다"며 "거주자의 라이프스타일을 깊이 고려한 세심한 설계가 인상적"이라고 평가했습니다.

김건축 대표는 "이번 수상은 우리 사무소가 추구해온 '사람 중심의 지속가능한 건축' 철학이 인정받은 것"이라며 "앞으로도 더욱 혁신적이고 의미 있는 건축 작품을 선보이겠다"고 소감을 밝혔습니다.`,
    date: "2024.12.15",
    author: "STUDIO ARCH",
    views: 1250,
    image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc4NjYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "2",
    category: "프로젝트",
    title: "신규 복합 건축 프로젝트 착공",
    summary: "인천 연수구에 위치한 대규모 복합 건축 프로젝트가 공식적으로 착공되었습니다.",
    content: `인천 연수구 송도국제업무단지 내에 위치한 대규모 복합 건축 프로젝트가 지난 28일 착공식을 갖고 본격적인 공사에 돌입했습니다.

총 연면적 1,200㎡ 규모의 이번 프로젝트는 주거, 상업, 업무 기능이 융합된 복합 건축물로서, 지속가능한 도시 개발의 새로운 모델을 제시할 예정입니다.

건물은 지하 2층, 지상 15층 규모로 건설되며, 1-3층은 상업시설, 4-5층은 업무시설, 6층 이상은 주거시설로 구성됩니다. 특히 LEED 인증을 목표로 하는 친환경 설계가 적용되어, 태양광 발전 시스템과 빗물 재활용 시설 등이 도입됩니다.

프로젝트는 2026년 상반기 완공을 목표로 하고 있으며, 완공 후에는 송도지역의 새로운 랜드마크 역할을 할 것으로 기대됩니다.`,
    date: "2024.11.28",
    author: "STUDIO ARCH",
    views: 890,
    image: "https://images.unsplash.com/photo-1650332162976-f6686076948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1NzkyMTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "3",
    category: "강연",
    title: "TEDx Seoul 2024 연사 참여",
    summary: "'지속가능한 미래 건축'을 주제로 TEDx Seoul 2024에서 강연을 진행했습니다.",
    content: `김건축 대표가 지난 20일 서울 코엑스에서 열린 TEDx Seoul 2024에서 '지속가능한 미래 건축: 공간이 만드는 변화'를 주제로 강연을 진행했습니다.

이번 강연에서는 기후변화 시대에 건축이 어떤 역할을 할 수 있는지, 그리고 STUDIO ARCH가 추진해온 지속가능한 건축 프로젝트들의 실제 사례를 통해 미래 건축의 방향을 제시했습니다.

특히 '건축은 단순히 공간을 만드는 것이 아니라, 사람들의 삶의 방식을 바꾸고 환경에 긍정적인 영향을 미칠 수 있는 강력한 도구'라는 메시지를 강조했습니다.

강연 후 진행된 Q&A 세션에서는 젊은 건축가들과 건축 관련 학과 학생들로부터 많은 질문이 쏟아져 높은 관심을 보였습니다.

강연 영상은 TEDx Seoul 공식 유튜브 채널을 통해 공개될 예정입니다.`,
    date: "2024.10.20",
    author: "STUDIO ARCH",
    views: 2150,
    image: "https://images.unsplash.com/photo-1748346674126-8c0df10f2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGFyY2hpdGVjdHVyZSUyMG9mZmljZXxlbnwxfHx8fDE3NTc5MjIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "4",
    category: "공지",
    title: "2025년 신입 직원 채용 공고",
    summary: "STUDIO ARCH에서 창의적이고 열정적인 건축 전문가를 모집합니다.",
    content: `STUDIO ARCH에서 2025년도 신입 직원을 모집합니다.

【모집 부문】
- 건축 설계: 2명
- 인테리어 디자인: 1명
- BIM 전문가: 1명

【지원 자격】
- 건축학과 또는 관련 학과 졸업(예정)자
- 해당 분야 경력 1년 이상 (신입 가능)
- AutoCAD, Rhino, Revit 등 설계 프로그램 활용 가능자
- 창의적 사고와 협업 능력을 갖춘 자

【우대 사항】
- 건축사 자격증 소지자
- 해외 프로젝트 경험자
- 지속가능 건축 관련 지식 보유자

【전형 절차】
서류전형 → 포트폴리오 심사 → 면접 → 최종 합격

【지원 방법】
이메일 접수: recruit@studioarch.co.kr
지원 마감: 2025년 1월 31일(금)

자세한 내용은 회사 홈페이지 또는 전화 문의 바랍니다.`,
    date: "2024.12.01",
    author: "STUDIO ARCH",
    views: 3420,
    image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc5MjIyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];


export const timeline: TimeLineItem[] = [
  {
    year: "2016",
    title: "스튜디오 설립",
    description: "젊은 건축가들이 모여 STUDIO ARCH를 설립하며 새로운 건축 철학을 제시하기 시작"
  },
  {
    year: "2018",
    title: "첫 번째 수상",
    description: "젊은건축가상 수상으로 업계의 주목을 받기 시작"
  },
  {
    year: "2020",
    title: "사업 확장",
    description: "상업건축 분야로 사업 영역을 확장하며 다양한 프로젝트 수행"
  },
  {
    year: "2022",
    title: "지속가능건축 전문화",
    description: "친환경 건축과 지속가능성에 특화된 설계 방향으로 전환"
  },
  {
    year: "2024",
    title: "한국건축문화대상 수상",
    description: "혁신적인 주거 프로젝트로 한국건축문화대상 우수상 수상"
  }
];

export const services: Service[] = [
  {
    iconName: "Building",
    title: "건축 설계",
    description: "주거, 상업, 복합건축 등 다양한 유형의 건축물 설계",
    features: ["기본설계", "실시설계", "인허가 업무", "감리 서비스"]
  },
  {
    iconName: "Users",
    title: "인테리어 디자인",
    description: "공간의 특성을 살린 창의적이고 기능적인 인테리어 설계",
    features: ["공간 계획", "가구 디자인", "조명 계획", "색채 계획"]
  },
  {
    iconName: "Award",
    title: "리노베이션",
    description: "기존 건물의 가치를 극대화하는 혁신적인 리모델링",
    features: ["구조 분석", "공간 재구성", "성능 개선", "법규 검토"]
  },
  {
    iconName: "Calendar",
    title: "컨설팅",
    description: "프로젝트 초기 단계부터 완공까지 전문적인 건축 컨설팅",
    features: ["사업성 검토", "디자인 컨설팅", "시공 관리", "사후 관리"]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "김건축",
    position: "대표 건축사",
    education: "서울대학교 건축학과",
    experience: "15년",
    specialty: "주거건축, 지속가능건축",
    image: "https://images.unsplash.com/photo-1748346674126-8c0df10f2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGFyY2hpdGVjdHVyZSUyMG9mZmljZXxlbnwxfHx8fDE3NTc5MjIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "활성"
  },
  {
    id: "2",
    name: "박설계",
    position: "수석 건축사",
    education: "연세대학교 건축학과",
    experience: "12년",
    specialty: "상업건축, BIM 설계",
    image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc5MjIyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "활성"
  },
  {
    id: "3",
    name: "이디자인",
    position: "선임 건축사",
    education: "고려대학교 건축학과",
    experience: "8년",
    specialty: "인테리어, 리노베이션",
    image: "https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZ3MlMjBibHVlcHJpbnRzfGVufDF8fHx8MTc1Nzg0NjIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    status: "활성"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    handle: "@studio_arch_official",
    iconName: "Instagram",
    url: "https://instagram.com/studio_arch_official",
    description: "일상 속 건축과 디자인 영감"
  },
  {
    name: "YouTube",
    handle: "STUDIO ARCH",
    iconName: "Youtube",
    url: "https://youtube.com/@studioarch",
    description: "프로젝트 비하인드 스토리"
  },
  {
    name: "LinkedIn",
    handle: "STUDIO ARCH",
    iconName: "Linkedin",
    url: "https://linkedin.com/company/studio-arch",
    description: "전문적인 건축 네트워킹"
  },
  {
    name: "Facebook",
    handle: "스튜디오 아치",
    iconName: "Facebook",
    url: "https://facebook.com/studioarch",
    description: "커뮤니티와 소통"
  }
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc4NjYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "자연광이 만드는 아름다운 공간 #건축 #자연광",
    likes: 245
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1572197491557-5b1a2c767c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNTc3OTIxOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "미니멀한 아름다움 #미니멀디자인 #인테리어",
    likes: 189
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc5MjIyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "창의성을 자극하는 업무 환경 #오피스디자인",
    likes: 156
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1742156524915-f72d6332f38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYXJjaGl0ZWN0dXJlJTIwZmFjYWRlfGVufDF8fHx8MTc1NzkyMTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "도시의 새로운 랜드마크 #상업건축 #파사드",
    likes: 203
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZ3MlMjBibHVlcHJpbnRzfGVufDF8fHx8MTc1Nzg0NjIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "아이디어에서 현실로 #설계과정 #건축도면",
    likes: 178
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzkyMTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "팀워크로 완성하는 건축 #팀워크 #건축가",
    likes: 134
  }
];