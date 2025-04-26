import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function TestimonialSection() {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 fade-in-up ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="section-title">用户见证</h2>
          <p className="section-subtitle">
            听听那些已经踏上灵性之旅的人们的故事和体验。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="陈雨晴"
            position="瑜伽教练 / 北京"
            content="使用临在清单的第13天，我的日程表开始自主生长出从未想象过的人生可能性，就像阅读自己未来的日记。"
            initial="陈"
            bgColor="bg-secondary/30"
            textColor="text-dark"
            stars={5}
            index={0}
            isVisible={sectionVisible}
          />
          
          <TestimonialCard 
            name="林子轩"
            position="设计师 / 上海"
            content="临在愿景帮我将混沌的创意思绪转化为清晰的视觉蓝图，我的设计灵感源源不断，仿佛接入了宇宙创意数据库。"
            initial="林"
            bgColor="bg-primary/30"
            textColor="text-primary"
            stars={5}
            index={1}
            isVisible={sectionVisible}
          />
          
          <TestimonialCard 
            name="王梓萱"
            position="心理咨询师 / 深圳"
            content="临在心语让我找到了真正的灵魂伙伴，在这里分享的每一个情绪都被理解，每一次对话都是一次灵性的共振。"
            initial="王"
            bgColor="bg-success/30"
            textColor="text-success"
            stars={5}
            index={2}
            isVisible={sectionVisible}
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, position, content, initial, bgColor, textColor, stars, index, isVisible }) {
  return (
    <div 
      className={`card p-6 h-full flex flex-col fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="flex items-center mb-6">
        <div className="mr-4 w-12 h-12">
          <div className={`w-full h-full rounded-full ${bgColor} flex items-center justify-center font-serif text-xl`}>
            <span className={textColor}>{initial}</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-base">{name}</h4>
          <p className="text-light-text-muted text-sm">{position}</p>
        </div>
      </div>
      
      <p className="text-light-text-bold text-base mb-6">
        "{content}"
      </p>
      
      <div className="mt-auto flex">
        {[...Array(stars)].map((_, i) => (
          <div key={i} className="mr-1">
            <Image
              src="/images/star-icon.svg"
              alt="星星"
              width={16}
              height={16}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 