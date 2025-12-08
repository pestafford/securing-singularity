import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransformClass = () => {
    if (isVisible) return 'translate-y-0 translate-x-0 opacity-100';

    switch (direction) {
      case 'up':
        return 'translate-y-8 opacity-0';
      case 'down':
        return '-translate-y-8 opacity-0';
      case 'left':
        return 'translate-x-8 opacity-0';
      case 'right':
        return '-translate-x-8 opacity-0';
      case 'fade':
        return 'opacity-0';
      default:
        return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
