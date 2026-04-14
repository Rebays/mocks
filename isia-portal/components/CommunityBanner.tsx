import React from 'react';
import Image from 'next/image';

const CommunityBanner = () => {
  const members = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuClNTqc-IIVa6N-cl99PrgHsT7Q5cp7atco5u93MoYz_w6ogGRCsg79lqK9LfP_ombMv1CbVYdpavuBWuci5hNvLX4iH7RqBg1Sc2-MEbfMXlGlp8sO-xtpMY9Ie8OBG4JvNqBfn80wy6Aub6l8kMkVBUyuCkffg7r5QtQIh7_PxGRgAmjMyq2E0BE5K0DudC-MoT_s4KyFyZZLnkmXmh9bQcN9yrjhxM9ED08q6nU2XDbQB7kQh387-2tqEKAvHH0uhtdNPWL_YVZm",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZBJX38IXrlBZ79CRD8bFv3z3_cgqnA51Olq26nSNsS7SJ4NFiG2kdybcCaSXH1jFPOchaHKFs9qCWp1nFCCw86T0j1DegDYeFtgNuw59HHoOF4qHeXWJmGxLfklaKfSvibGTMoSYJX1xwgw8S6BCljaOYbtuuWZxNpAcODOOawXKQPuXJoSXU8s9B7T4PtPAS0VEmAPoxD_ZzM1INfJIf4p4l-elnKffpXXVAisDyIpF5xRSHHCPOKeVmxoBFL6sOnhtgndYlB3Kf",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAhu0GYrBWePNRJPVoJZz15XkBW0HE91HvibWAMdgnT-5gWkz0ENZEe55czaLa2VqNEFafQ6Ml5u_9wdzKmJvz0yvYti3vv9HqNS38idIMDA8Ful-Vj4cyNJOL6lxcIHMboYKtC15PMxVJOQUK2sbcm5CLbCIJbAZ4wJwqTwa_y7kP7i2G4MQ2-TiK_03-ZJUcl_VtRgJF-vo2OMJeBe22cNp4CJUpOTeE465tzyVrMyd8YZKXxNkZGecsY1aFy7FiTAJEQyxk-5oi_"
  ];

  return (
    <div className="bg-white rounded-xl border border-outline-variant p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
      <div className="max-w-2xl text-center md:text-left">
        <h3 className="text-2xl font-bold text-primary mb-2">Member Community Forum</h3>
        <p className="text-on-surface-variant leading-relaxed font-body">Connect with over 15,000 professional members. Discuss policy changes, share career advice, and stay ahead of industry trends.</p>
      </div>
      <div className="flex -space-x-3">
        {members.map((src, i) => (
          <Image
            key={i}
            alt={`Member ${i + 1}`}
            width={48}
            height={48}
            className="inline-block h-12 w-12 rounded-full ring-4 ring-white object-cover"
            src={src}
          />
        ))}
        <div className="flex items-center justify-center h-12 w-12 rounded-full ring-4 ring-white bg-surface-container text-on-surface-variant text-xs font-bold">
          +12k
        </div>
      </div>
      <button className="bg-outline-variant/20 text-primary px-6 py-3 rounded font-bold hover:bg-outline-variant/30 transition-colors whitespace-nowrap">
        Join Discussion
      </button>
    </div>
  );
};

export default CommunityBanner;
