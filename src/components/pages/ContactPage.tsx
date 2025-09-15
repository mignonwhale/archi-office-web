'use client'
import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "주소",
      content: "서울특별시 강남구 테헤란로 123\n건축타워 15층"
    },
    {
      icon: Phone,
      title: "전화",
      content: "+82 2-1234-5678"
    },
    {
      icon: Mail,
      title: "이메일",
      content: "info@studioarch.co.kr"
    },
    {
      icon: Clock,
      title: "운영시간",
      content: "월-금 09:00-18:00\n토요일 예약 상담"
    }
  ];

  const projectTypes = [
    { value: 'residential', label: '주거건축' },
    { value: 'commercial', label: '상업건축' },
    { value: 'mixed', label: '복합건축' },
    { value: 'renovation', label: '리노베이션' },
    { value: 'interior', label: '인테리어' },
    { value: 'consultation', label: '컨설팅' },
    { value: 'other', label: '기타' }
  ];

  const budgetRanges = [
    { value: 'under-100m', label: '1억원 미만' },
    { value: '100m-300m', label: '1억원 - 3억원' },
    { value: '300m-500m', label: '3억원 - 5억원' },
    { value: '500m-1b', label: '5억원 - 10억원' },
    { value: 'over-1b', label: '10억원 이상' },
    { value: 'consultation', label: '상담 후 결정' }
  ];

  const timelines = [
    { value: 'urgent', label: '긴급 (1개월 이내)' },
    { value: 'short', label: '단기 (3개월 이내)' },
    { value: 'medium', label: '중기 (6개월 이내)' },
    { value: 'long', label: '장기 (1년 이내)' },
    { value: 'flexible', label: '유연하게 조정 가능' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 로딩 토스트 표시
    const loadingToast = toast.loading('문의를 전송하고 있습니다...');

    try {
      // 실제 구현에서는 여기서 API 호출
      console.log('Form submitted:', formData);

      // 시뮬레이션을 위한 지연
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 성공 토스트
      toast.success('문의가 성공적으로 전송되었습니다! 24시간 이내에 연락드리겠습니다.', {
        id: loadingToast,
        duration: 5000,
      });

      // 폼 리셋
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

    } catch (error) {
      // 에러 토스트
      toast.error('문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.', {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
      {/* 헤더 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">연락처</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              새로운 프로젝트에 대한 상담이나 협업 제안을 환영합니다.
              전문적이고 창의적인 건축 솔루션을 제공해드리겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-2">{info.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line text-sm">
                    {info.content}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 문의 양식 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 폼 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    프로젝트 문의
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 기본 정보 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block mb-2">
                          성함 *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="성함을 입력해주세요"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block mb-2">
                          회사/기관
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="회사명을 입력해주세요"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block mb-2">
                          이메일 *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2">
                          연락처
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="010-0000-0000"
                        />
                      </div>
                    </div>

                    {/* 프로젝트 정보 */}
                    <div>
                      <label htmlFor="projectType" className="block mb-2">
                        프로젝트 유형 *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">프로젝트 유형을 선택해주세요</option>
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block mb-2">
                          예산 범위
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-input rounded-md bg-background"
                        >
                          <option value="">예산 범위를 선택해주세요</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block mb-2">
                          희망 일정
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-input rounded-md bg-background"
                        >
                          <option value="">희망 일정을 선택해주세요</option>
                          {timelines.map((timeline) => (
                            <option key={timeline.value} value={timeline.value}>
                              {timeline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2">
                        프로젝트 상세 내용 *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="프로젝트에 대한 상세한 내용을 입력해주세요. 부지 정보, 요구사항, 특별한 조건 등을 포함해주시면 더 정확한 상담이 가능합니다."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      문의하기
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* 추가 정보 */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* 상담 프로세스 */}
              <Card>
                <CardHeader>
                  <CardTitle>상담 프로세스</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "문의 접수", desc: "온라인 문의 양식 작성" },
                      { step: 2, title: "초기 상담", desc: "전화/화상 미팅을 통한 기본 상담" },
                      { step: 3, title: "현장 답사", desc: "프로젝트 부지 현장 방문 및 조사" },
                      { step: 4, title: "제안서 작성", desc: "맞춤형 건축 솔루션 제안서 제공" },
                      { step: 5, title: "계약 체결", desc: "프로젝트 계약 및 설계 착수" }
                    ].map((process, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {process.step}
                        </div>
                        <div>
                          <h4 className="mb-1">{process.title}</h4>
                          <p className="text-sm text-muted-foreground">{process.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 서비스 특징 */}
              <Card>
                <CardHeader>
                  <CardTitle>서비스 특징</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "무료 초기 상담 및 현장 답사",
                      "3D 모델링 및 VR 시뮬레이션 제공",
                      "친환경 & 에너지 효율 설계",
                      "인허가 업무 전담 처리",
                      "시공 단계 품질 관리 서비스",
                      "준공 후 A/S 및 유지보수 상담"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 전문 분야 */}
              <Card>
                <CardHeader>
                  <CardTitle>전문 분야</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "주거건축", "상업건축", "복합건축", "리노베이션",
                      "인테리어 디자인", "지속가능 건축", "BIM 설계", "도시계획"
                    ].map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 지도 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-4">오시는 길</h2>
            <p className="text-muted-foreground">
              지하철 2호선 강남역 6번 출구에서 도보 5분 거리에 위치해 있습니다.
            </p>
          </motion.div>

          <motion.div
            className="aspect-video bg-muted rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg mb-2">지도가 여기에 표시됩니다</h3>
              <p className="text-sm">
                서울특별시 강남구 테헤란로 123 건축타워 15층
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}