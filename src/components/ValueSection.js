import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function ValueSection() {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="values" className="py-20 md:py-24 relative overflow-hidden" ref={sectionRef}>
      {/* 背景装饰 */}
      <div className="absolute -left-40 top-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 fade-in-up ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="section-title">三维价值体系</h2>
          <p className="section-subtitle">
            我们的产品基于三大核心价值支柱，旨在帮助你重新连接内在智慧，提升意识维度，实现真正的临在。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            title="意识净化"
            description="松果体觉醒 - 清理思维迷雾。通过专注练习和意识工具，帮助你摆脱思维的束缚，回归纯粹的觉知状态。"
            iconSrc="/images/consciousness-purification-icon.svg"
            iconBgColor="bg-secondary/20"
            actionText="探索净化之路"
            index={0}
            isVisible={sectionVisible}
          />
          
          <ValueCard 
            title="能量显化"
            description="心轮共振 - 物质与精神的量子桥梁。将你的意图与宇宙能量场对齐，创造性地将愿望转化为现实。"
            iconSrc="/images/energy-manifestation-icon.svg"
            iconBgColor="bg-primary/20"
            actionText="体验能量显化"
            index={1}
            isVisible={sectionVisible}
          />
          
          <ValueCard 
            title="临在传承"
            description="跨时空智慧 - 整合13月亮历法与现代脑科学。连接古老智慧与现代科技，创造全新的意识体验。"
            iconSrc="/images/presence-tradition-icon.svg"
            iconBgColor="bg-success/20"
            actionText="了解智慧传承"
            index={2}
            isVisible={sectionVisible}
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, description, iconSrc, iconBgColor, actionText, index, isVisible }) {
  return (
    <div 
      className={`card p-6 h-full flex flex-col fade-in-up ${isVisible ? 'visible' : ''}`} 
      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="mb-6">
        <div className={`w-16 h-16 rounded-full ${iconBgColor} flex items-center justify-center`}>
          <Image
            src={iconSrc}
            alt={title}
            width={32}
            height={32}
          />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold font-serif mb-4">{title}</h3>
      
      <p className="text-light-text text-base mb-6">{description}</p>
      
      <div className="mt-auto flex items-center text-primary cursor-pointer group">
        <span className="mr-2">{actionText}</span>
        <div className="icon-rotate">
          <Image
            src="/images/arrow-icon.svg"
            alt="箭头"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
} 