import { cn } from "@/lib/utils";
import { 
  Terminal,
  MousePointer2,
  DollarSign,
  Cloud,
  Network,
  HeadphonesIcon,
  RefreshCw,
  Heart 
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      title: "Ease of use",
      description:
        "Our intuitive platform makes learning accessible to everyone.",
      icon: <MousePointer2 className="w-6 h-6" />,
    },
    {
      title: "Affordable pricing",
      description:
        "High-quality education at competitive prices, with flexible payment options.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Always available",
      description: "Access your courses anytime, anywhere, with 99.9% uptime.",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: "Community learning",
      description: "Learn together with a global community of students.",
      icon: <Network className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our dedicated support team.",
      icon: <HeadphonesIcon className="w-6 h-6" />,
    },
    {
      title: "Regular updates",
      description:
        "Course content is regularly updated to stay current with industry trends.",
      icon: <RefreshCw className="w-6 h-6" />,
    },
    {
      title: "Learn with passion",
      description: "Engage with content that inspires and motivates you.",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative group/feature",
        "py-10 px-6",
        "transition-all duration-200",
        "hover:bg-gradient-to-t hover:from-neutral-100 hover:to-transparent",
        "dark:hover:from-neutral-800/90 dark:hover:to-transparent",
        "border-r border-b border-neutral-200 dark:border-neutral-800",
        // Add left border for first column
        index % 4 === 0 && "border-l"
      )}
    >
      <div className="mb-4 relative z-10 px-4 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-4">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4">
        {description}
      </p>
    </div>
  );
};