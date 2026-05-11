import { motion, HTMLMotionProps } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

export function Section({
  children,
  className = "",
  id,
  immediate = false,
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  immediate?: boolean;
  stagger?: boolean;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.15 } })}
      variants={stagger ? staggerContainer : fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function MotionDiv({ children, ...props }: HTMLMotionProps<"div">) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <motion.span 
      variants={fadeUp}
      className="inline-flex items-center rounded-full border border-foreground/15 bg-background/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80 backdrop-blur"
    >
      {children}
    </motion.span>
  );
}

export function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <motion.div 
      variants={fadeUp}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col items-start rounded-xl bg-card/80 px-4 py-3.5 shadow-[var(--shadow-card)] ring-1 ring-foreground/5 backdrop-blur"
    >
      <Icon className="h-4 w-4 text-foreground" />
      <div className="mt-1.5 text-base font-bold leading-none tracking-tight text-foreground">{value}</div>
      <div className="mt-1 text-[11px] text-muted-foreground">{label}</div>
    </motion.div>
  );
}
