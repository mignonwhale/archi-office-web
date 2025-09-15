import {
  Building,
  Users,
  Award,
  Calendar,
  Linkedin,
  LucideIcon,
} from 'lucide-react';
import {
  siInstagram,
  siYoutube,
  siFacebook
} from 'simple-icons';

// Lucide 아이콘 매핑 (서비스 아이콘)
const lucideIconMap: Record<string, LucideIcon> = {
  Building,
  Users,
  Award,
  Calendar
};

// Simple Icons 매핑 (소셜 아이콘)
const simpleIconMap: Record<string, any> = {
  Instagram: siInstagram,
  Youtube: siYoutube,
  Facebook: siFacebook
};

// Lucide 소셜 아이콘 매핑 (Simple Icons에 없는 것들)
const lucideSocialIconMap: Record<string, LucideIcon> = {
  Linkedin: Linkedin
};

// Lucide 아이콘 가져오기 함수 (서비스용)
export function getIcon(iconName: string): LucideIcon | null {
  return lucideIconMap[iconName] || null;
}

// 소셜 아이콘 가져오기 함수 (Simple Icons + Lucide Icons 혼합)
export function getSocialIcon(iconName: string) {
  // Simple Icons 우선 확인
  if (simpleIconMap[iconName]) {
    return { type: 'simple', data: simpleIconMap[iconName] };
  }

  // Lucide Icons 확인
  if (lucideSocialIconMap[iconName]) {
    return { type: 'lucide', data: lucideSocialIconMap[iconName] };
  }

  return null;
}

// 소셜 아이콘을 React 컴포넌트로 변환하는 헬퍼
export function createSocialIconComponent(iconInfo: any, className?: string) {
  if (!iconInfo) return null;

  if (iconInfo.type === 'simple') {
    // Simple Icons
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
      >
        <path d={iconInfo.data.path} />
      </svg>
    );
  } else if (iconInfo.type === 'lucide') {
    // Lucide Icons
    const LucideComponent = iconInfo.data;
    return <LucideComponent className={className} />;
  }

  return null;
}

// 아이콘 이름 배열 (validation용)
export const validIconNames = Object.keys(lucideIconMap);
export const validSocialIconNames = [...Object.keys(simpleIconMap), ...Object.keys(lucideSocialIconMap)];

// 기본 아이콘 (fallback)
export const DefaultIcon = Building;