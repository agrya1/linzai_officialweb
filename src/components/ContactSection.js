import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden" ref={sectionRef}>
      {/* 背景装饰 */}
      <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="card bg-dark-lighter backdrop-blur-xl border border-white/10 p-10 md:p-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold">与我们连接</h2>
                <p className="text-light-text">
                  无论你是刚开始灵性探索，还是已经在修行路上多年，我们都欢迎你加入临在社区，一起探索意识的无限可能。
                </p>
              </div>
              
              <div className="space-y-6">
                <ContactItem
                  icon="/images/email-icon.svg"
                  text="contact@linzai.com"
                  isVisible={sectionVisible}
                  index={0}
                />
                
                <ContactItem
                  icon="/images/wechat-icon.svg"
                  text="临在官方微信：linzai_official"
                  isVisible={sectionVisible}
                  index={1}
                />
                
                <ContactItem
                  icon="/images/location-icon.svg"
                  text="北京市朝阳区东三环中路39号建外SOHO A座"
                  isVisible={sectionVisible}
                  index={2}
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4">订阅灵性通讯</h3>
                <p className="text-light-text text-sm mb-6">
                  定期获取最新的灵性指南、冥想技巧和产品更新。
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">姓名</label>
                  <input
                    type="text"
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-3 bg-white/5 border border-transparent rounded-lg focus:border-primary focus:outline-none text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">邮箱</label>
                  <input
                    type="email"
                    placeholder="请输入您的邮箱"
                    className="w-full px-4 py-3 bg-white/5 border border-transparent rounded-lg focus:border-primary focus:outline-none text-white"
                  />
                </div>
                
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 border border-white/30 rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-light-text">
                    我同意接收临在的最新资讯和更新
                  </label>
                </div>
                
                <button className="w-full py-3 bg-primary text-dark font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text, isVisible, index }) {
  return (
    <div 
      className={`flex items-center space-x-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
        <Image
          src={icon}
          alt="联系方式"
          width={20}
          height={20}
        />
      </div>
      <span className="text-light-text-bold">{text}</span>
    </div>
  );
} 