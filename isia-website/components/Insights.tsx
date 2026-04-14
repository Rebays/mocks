import React from 'react';
import Image from 'next/image';

const insights = [
  {
    date: "May 15, 2024",
    title: "The Impact of Digital Transformation on SI Audit Practices",
    description: "Exploring how emerging technologies are reshaping the local auditing landscape and the necessary skills for modern accountants.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbPJtYdM0rCrfV7SVY30M0WIm71ksg7WmcO08Z0lXjVWyewi628m46RMZvi4dVI5AiVKxkx2QQpSmKwVd6jzpdbI5F1tyFxZx2MFjSxxb3pKAV483ye_RNqMJLsYKy48A45zBt24z4SWO1hmy0N5vZNVlM8kOLzt6-d9QeoN2pF7tnzpjdeTd3K_RCZaSsmrTOITJEr94md1o5q0UXCCjofgMesLmNtAn0DTuLkNxK5v1OEKDyyMoBYYVcIj2_n_LbWlJKv-QTP3NT"
  },
  {
    date: "May 02, 2024",
    title: "New Tax Compliance Guidelines for Small-to-Medium Enterprises",
    description: "A comprehensive breakdown of the updated regulatory framework and its implications for the local business ecosystem.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZJv7pXKhsOHzfc0-v8OQJM49thBRNzxyd9EUjQYgePNj7WQPdiIrh4-nMfzGIt1HU_2K7U-gYiEcQLN2tVijw2QXG21A5OxK8VJyI94h5NNDWBaRHGCgSqzwJXu1rJx7v8i_yZbGcqOeZDx_S6caaiN_r5IEoW2YTuTq2ei6Jfao-EVXDseZefrAi0ZnB3xjyYpQSMRSbvVRYmwhpuUGsWj5RLiFLR8ubpXE41J1LtMmhz_ywgUCVjOcw7l7eDwr1K4mBWTOtfvSE"
  },
  {
    date: "April 24, 2024",
    title: "Fostering Ethical Leadership in Honiara's Corporate Sector",
    description: "Highlights from the recent ISIA ethics symposium focusing on integrity-driven governance in the Solomon Islands.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Az13SB5ppxhRgME7uLF4IBVSMXk-B-axXV4qzptxnlcq9I2BlYQXQuDx5U59iJDJFs5i6iyhkfdNUNggjnSIfPazFG0GTF72vEQnL_arsSwOn0y4UM1VslwpgslnjpZzceVZA2dfeafGij56DHtOSzJJt5qETmGrZN7F3QXlV_YN5llta7EjzwuzVbvnWYsV-lgakfE5L18cYze2Q5kyEA2qq9rItPsQBOv7EQbLQyixSpifeqcMXUto5cOiwFs325eNpN8TtWff"
  }
];

const Insights = () => {
  return (
    <section className="bg-surface-container-low py-24 px-8 lg:px-12 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 uppercase tracking-tight">Latest Insights</h2>
          <div className="h-1.5 w-24 bg-secondary-container mb-6"></div>
          <p className="text-on-surface-variant text-lg font-body max-w-2xl leading-relaxed">
            Stay informed with the latest industry news, regulatory updates, and expert perspectives from the Solomon Islands accounting community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  src={insight.image}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-on-surface-variant/60 font-label text-xs font-semibold uppercase tracking-wider mb-4">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  {insight.date}
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 leading-snug">{insight.title}</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-8 flex-grow">
                  {insight.description}
                </p>
                <a className="inline-flex items-center text-primary font-label font-bold group/link" href="#">
                  <span className="border-b-2 border-secondary-container/30 group-hover/link:border-secondary-container pb-0.5 transition-all">Read Full Article</span>
                  <span className="material-symbols-outlined text-sm ml-2 transition-transform group-hover/link:translate-x-1">chevron_right</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
