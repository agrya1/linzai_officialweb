import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function ProductSection() {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="products" className="py-20 md:py-24 relative overflow-hidden" ref={sectionRef}>
      {/* 背景装饰 */}
      <div className="absolute -right-40 top-40 w-96 h-96 rounded-full bg-success/20 blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-radial from-secondary to-dark opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 fade-in-up ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="section-title">产品矩阵</h2>
          <p className="section-subtitle">
            我们的产品线专注于意识回归、内在觉察、当下专注与深度链接，帮助你管理意识，提升维度，保持正念。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="临在愿景"
            description="将脑电波编译成命运代码。结合荣格原型理论的视觉化引擎，助力愿景可视化和心愿显化。"
            bgColor="bg-secondary/20"
            iconSrc="/images/consciousness-purification-icon.svg"
            imageSrc="/image/临在愿景.jpeg"
            buttonText="探索临在愿景"
            buttonColor="bg-secondary/30"
            buttonBorderColor="border-secondary/30"
            productUrl="https://vision.linzai.asia"
            index={0}
            isVisible={sectionVisible}
          />
          
          <ProductCard 
            title="临在清单"
            description="给时间涂上灵魂的颜色。利用色彩心理学原理，通过彩色垂直标签和极简操作进行任务管理。"
            bgColor="bg-primary/20"
            iconSrc="/images/energy-manifestation-icon.svg"
            imageSrc="/image/临在清单.jpeg"
            buttonText="探索临在清单"
            buttonColor="bg-primary/30"
            buttonBorderColor="border-primary/30"
            productUrl="https://list.linzai.asia"
            index={1}
            isVisible={sectionVisible}
          />
          
          <ProductCard 
            title="临在心语"
            description="捕捉情绪的海市蜃楼。帮助人们关注精神生活，记录管理情绪，链接内在声音的轻社交平台。"
            bgColor="bg-success/20"
            iconSrc="/images/presence-tradition-icon.svg"
            imageSrc="/image/临在心语.jpeg"
            buttonText="探索临在心语"
            buttonColor="bg-success/30"
            buttonBorderColor="border-success/30"
            productUrl="https://echo.linzai.asia"
            index={2}
            isVisible={sectionVisible}
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ title, description, bgColor, iconSrc, imageSrc, buttonText, buttonColor, buttonBorderColor, productUrl, index, isVisible }) {
  return (
    <div 
      className={`card h-full overflow-hidden flex flex-col fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className={`relative h-48 ${bgColor} overflow-hidden`}>
        {/* 产品图片 */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        <div className="absolute right-4 top-4 w-12 h-12 rounded-full bg-dark/80 backdrop-blur-sm flex items-center justify-center">
          <Image
            src={iconSrc}
            alt={title}
            width={24}
            height={24}
          />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold font-serif mb-4">{title}</h3>
        <p className="text-light-text text-sm mb-6">{description}</p>
        
        <div className="mt-auto">
          <a 
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 text-center rounded-lg ${buttonColor} border ${buttonBorderColor} hover:bg-opacity-50 transition-all duration-500 block`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
} 