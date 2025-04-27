import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function GuideSection() {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="guide" className="py-20 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 fade-in-up ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="section-title">灵性指南</h2>
          <p className="text-light-text">
            探索我们的灵性知识库，获取实用的冥想技巧、能量练习和意识提升方法。
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className={`w-full md:w-5/12 relative fade-in-up ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div 
              className="w-full h-96 rounded-xl overflow-hidden relative bg-gradient-radial from-secondary/30 to-dark"
            ></div>
            
            <div className="absolute right-4 -bottom-6 w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center shadow-lg">
              <Image
                src="/images/energy-icon.svg"
                alt="能量"
                width={32}
                height={32}
              />
            </div>
          </div>
          
          <div className="w-full md:w-7/12">
            <div className={`mb-8 fade-in-up ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6">动态曼陀罗导航</h3>
              <p className="text-light-text">
                我们的灵性指南采用独特的动态曼陀罗导航系统，根据你的意识状态和能量频率，为你提供最适合当下的灵性练习和知识。
              </p>
            </div>
            
            <div className="space-y-8">
              <FeatureItem 
                title="冥想技巧"
                description="从初级呼吸觉察到高级松果体激活冥想，全方位提升你的冥想体验。"
                iconSrc="/images/meditation-icon.svg"
                iconBgColor="bg-secondary/20"
                index={0}
                isVisible={sectionVisible}
              />
              
              <FeatureItem 
                title="能量练习"
                description="通过脉轮平衡、气功和能量场扩展练习，提升你的生命能量。"
                iconSrc="/images/energy-icon.svg"
                iconBgColor="bg-primary/20"
                index={1}
                isVisible={sectionVisible}
              />
              
              <FeatureItem 
                title="意识提升"
                description="结合古老智慧与现代脑科学，帮助你拓展意识边界，探索更高维度的存在。"
                iconSrc="/images/consciousness-icon.svg"
                iconBgColor="bg-success/20"
                index={2}
                isVisible={sectionVisible}
              />
            </div>
            
            <div className={`mt-10 fade-in-up ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
              <button className="btn btn-outline">
                探索灵性指南
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, description, iconSrc, iconBgColor, index, isVisible }) {
  return (
    <div 
      className={`flex items-start space-x-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
    >
      <div className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center flex-shrink-0`}>
        <Image
          src={iconSrc}
          alt={title}
          width={20}
          height={20}
        />
      </div>
      
      <div>
        <h4 className="text-lg font-medium mb-2">{title}</h4>
        <p className="text-light-text text-sm">{description}</p>
      </div>
    </div>
  );
} 