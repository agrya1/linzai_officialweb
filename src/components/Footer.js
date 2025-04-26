import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="text-primary text-2xl font-sans">临在 ∞</div>
            <p className="text-light-text-muted text-sm">
              在数字时代重建神圣的内在秩序，连接你的本源意识。
            </p>
            <div className="flex space-x-4">
              <SocialIcon src="/images/social-icon1.svg" alt="社交媒体" />
              <SocialIcon src="/images/social-icon2.svg" alt="社交媒体" />
              <SocialIcon src="/images/social-icon3.svg" alt="社交媒体" />
              <SocialIcon src="/images/social-icon4.svg" alt="社交媒体" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-base">产品</h4>
            <FooterLinks 
              links={[
                { name: '临在愿景', href: '#' },
                { name: '临在清单', href: '#' },
                { name: '临在心语', href: '#' },
                { name: '产品路线图', href: '#' },
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-base">资源</h4>
            <FooterLinks 
              links={[
                { name: '灵性指南', href: '#' },
                { name: '冥想音频', href: '#' },
                { name: '意识课程', href: '#' },
                { name: '社区活动', href: '#' },
              ]}
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-base">公司</h4>
            <FooterLinks 
              links={[
                { name: '关于我们', href: '#' },
                { name: '加入我们', href: '#' },
                { name: '隐私政策', href: '#' },
                { name: '用户协议', href: '#' },
              ]}
            />
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-light-text-muted text-sm">
          <div>© 2025 临在科技有限公司. 保留所有权利.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">隐私政策</Link>
            <Link href="#" className="hover:text-white transition-colors">用户协议</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie 设置</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ links }) {
  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link 
            href={link.href}
            className="text-light-text-muted text-sm hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({ src, alt }) {
  return (
    <Link href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
      <Image 
        src={src} 
        alt={alt} 
        width={16} 
        height={16} 
      />
    </Link>
  );
} 