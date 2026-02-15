interface StatItemProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatItem = ({ number, label, icon }: StatItemProps) => (
  <div className="text-center group">
    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center text-white group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-[#B0B0B0] font-medium">{label}</div>
  </div>
);

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 px-2 md:px-6 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-center mb-4 text-[#F5F5F5] tracking-tight">
          Trusted by Organizations Worldwide
        </h2>
        <p className="text-center text-[#B0B0B0] mb-16 max-w-2xl mx-auto">
          Our track record speaks for itself
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem
            number="15+"
            label="Years Experience"
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatItem
            number="100+"
            label="Clients Served"
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <StatItem
            number="24/7"
            label="Support Available"
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          <StatItem
            number="100%"
            label="Client Satisfaction"
            icon={
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
