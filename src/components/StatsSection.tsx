import { siteContent } from "../content/siteContent";

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
    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-body font-medium">{label}</div>
  </div>
);

const statIcons = [
  // Years in Cybersecurity — clock
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Repositories Analyzed — code/folder
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // MCP Servers Assessed — server
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>,
  // Vulnerabilities Discovered — bug/alert
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>,
];

const StatsSection = () => {
  const { title, subtitle, items } = siteContent.stats;

  return (
    <section className="py-12 md:py-16 px-2 md:px-6 bg-surface-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-center mb-4 text-heading tracking-tight">
          {title}
        </h2>
        <p className="text-center text-body mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, index) => (
            <StatItem
              key={index}
              number={item.number}
              label={item.label}
              icon={statIcons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
