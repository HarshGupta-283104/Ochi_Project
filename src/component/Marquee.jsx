import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.05' className="w-full py-10 h-[62vh] text-black bg-[#004d43] rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
      <div className="border-t-2 border-b-2 mt-20 border-zinc-300 overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
          style={{ width: '200%' }}
        >
          <div className="flex items-center whitespace-nowrap gap-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <h1 key={i} className="text-[15vw] font-bold tracking-tighter leading-none font['Founder_Grotesk_X-Cond_SmBd'] uppercase mb-8 pr-20">
                We are ochi
              </h1>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
