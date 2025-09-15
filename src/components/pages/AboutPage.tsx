'use client'
import {motion} from 'motion/react';
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {teamMembers, timeline, services} from "@/lib/data";
import {getIcon} from "@/lib/icons";


export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* 회사 소개 헤더 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">회사 소개</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              2016년 설립된 STUDIO ARCH는 혁신적인 설계와 지속가능한 건축을 추구하는
              건축 전문 사무소입니다. 공간에 생명을 불어넣는 창의적인 건축으로
              사람과 환경이 조화롭게 만나는 순간을 창조합니다.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="text-4xl mb-2 text-primary">50+</div>
              <div className="text-muted-foreground">완료 프로젝트</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-primary">8</div>
              <div className="text-muted-foreground">운영 연수</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-primary">15</div>
              <div className="text-muted-foreground">수상 경력</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 비전 및 미션 */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8">비전 & 미션</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl mb-3 text-primary">VISION</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    지속가능하고 혁신적인 건축을 통해 더 나은 미래 환경을 조성하며,
                    사람 중심의 공간 디자인으로 삶의 질을 향상시키는 글로벌 건축 전문 기업이 되겠습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-3 text-primary">MISSION</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    창의적인 디자인과 첨단 기술을 융합하여 고객의 요구를 초월하는 건축 솔루션을 제공하고,
                    환경 친화적이며 사회적 가치를 실현하는 지속가능한 건축문화를 선도합니다.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzkyMTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office Vision"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">연혁</h2>
            <p className="text-muted-foreground">
              STUDIO ARCH의 성장 과정과 주요 이정표들을 소개합니다.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-8 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <span>{item.year}</span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-12 bg-border mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 서비스 */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">주요 서비스</h2>
            <p className="text-muted-foreground">
              다양한 건축 분야에서 전문적이고 차별화된 서비스를 제공합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = getIcon(service.iconName)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-6 h-6 text-primary"/>}
                        </div>
                        <h3 className="text-xl">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* 팀 소개 */}
      <motion.section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">팀 소개</h2>
          <p className="text-muted-foreground">
            다양한 전문성을 갖춘 건축 전문가들이 함께합니다.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="aspect-square w-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">{member.position}</Badge>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>학력:</strong> {member.education}</p>
                    <p><strong>경력:</strong> {member.experience}</p>
                    <p><strong>전문분야:</strong> {member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}