export default function WhistleblowerBanner() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-stack-lg">
      <div className="bg-surface-container border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 rounded-xl">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-primary-container flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-secondary text-4xl fill-1">
              shield_person
            </span>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md text-primary">
              Help us protect public funds.
            </h3>
            <p className="text-slate-600">
              Report misuse of government resources anonymously and securely.
            </p>
          </div>
        </div>
        <button className="bg-primary-container text-white px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-secondary transition-all rounded-xl whitespace-nowrap">
          Submit a Tip
        </button>
      </div>
    </section>
  );
}
