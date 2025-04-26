import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <Image
          src="/image/Image.png"
          alt="背景图片"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-70"
          priority
        />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-6xl font-bold font-serif text-[#C6A776] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            觉醒你的内在宇宙
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-normal font-serif text-[rgba(245,245,247,0.9)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            在数字时代重建神圣的内在秩序
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-[rgba(245,245,247,0.7)] mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            在算法统治的时代，我们建造回归本源的数字圣殿，用像素重构灵力回路，让每次点击都成为意识升维的仪式。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#products" className="bg-[#2A2356] text-[#F5F5F7] px-8 py-3 rounded-lg font-medium">
              开启灵性之旅
            </a>
            <a href="#values" className="border border-[rgba(245,245,247,0.3)] text-[#F5F5F7] px-8 py-3 rounded-lg font-medium">
              了解更多
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <Image
            src="/images/scroll-icon.svg"
            alt="向下滚动"
            width={24}
            height={24}
            className="animate-bounce"
          />
        </div>
      </motion.div>
    </section>
  );
} 