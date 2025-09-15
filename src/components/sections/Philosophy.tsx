
export default function Philosophy() {
  const principles = [
    {
      title: "공간의 본질",
      description: "공간은 단순한 물리적 경계가 아닌, 사람들의 경험과 감정이 교차하는 삶의 무대입니다."
    },
    {
      title: "지속가능성",
      description: "환경과 조화를 이루는 건축을 통해 미래 세대를 위한 지속가능한 공간을 만들어갑니다."
    },
    {
      title: "혁신과 전통",
      description: "현대적 기술과 전통적 가치의 균형을 통해 시대를 초월하는 건축을 추구합니다."
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 텍스트 콘텐츠 */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-8">설계 철학</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              우리는 건축이 단순한 구조물이 아닌, 인간의 삶과 감정을 담는 그릇이라고 믿습니다.
              각 프로젝트마다 고유한 맥락과 사용자의 요구를 깊이 이해하여,
              기능과 미학이 완벽하게 조화를 이루는 공간을 창조합니다.
            </p>

            <div className="space-y-8">
              {principles.map((principle, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 이미지 */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzkyMTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architectural Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 장식적 요소 */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}