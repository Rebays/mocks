import { MENU_DATA } from "@/constants/menuData";

export default function MegaMenu({ activeCategory }: { activeCategory: string | null }) {
  if (!activeCategory || !MENU_DATA[activeCategory]) return null;

  const category = MENU_DATA[activeCategory];

  return (
    <div className="absolute top-full left-0 w-full bg-white border-b border-outline-variant shadow-lg z-40 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main List */}
          <div className="md:col-span-2">
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-6 border-b border-surface-container-highest pb-2">
              {category.label}
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {category.items.map((item) => (
                <li key={item.title}>
                  <a
                    className={`flex items-center gap-2 hover:text-primary hover:underline underline-offset-4 transition-all font-body-md text-body-md ${
                      item.isPrimary ? "font-bold text-primary" : "text-on-surface"
                    }`}
                    href={item.href}
                  >
                    {item.title}
                    {item.isNew && (
                      <span className="bg-secondary/10 text-secondary font-label-sm text-[10px] px-2 py-0.5 rounded-full border border-secondary/20 whitespace-nowrap">
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spotlight Section */}
          {category.spotlight && (
            <div className="flex flex-col h-full">
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col h-full justify-between hover:border-primary/30 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-secondary">
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Spotlight
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">
                    {category.spotlight.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm mb-4">
                    {category.spotlight.description}
                  </p>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm mt-4">
                    <span className="material-symbols-outlined text-[18px]">
                      picture_as_pdf
                    </span>
                    <span>{category.spotlight.fileInfo}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-secondary text-white font-label-sm text-label-sm py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-on-secondary-fixed-variant transition-colors">
                  <span className="material-symbols-outlined">download</span>
                  Download Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
