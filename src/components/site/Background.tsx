export function GlowOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 animate-float-orb"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 animate-float-orb"
        style={{ background: "radial-gradient(circle, #EC4899 0%, transparent 60%)", animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 animate-float-orb"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 60%)", animationDelay: "6s" }}
      />
    </div>
  );
}

export function Particles({ count = 24 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 53) % 100;
        const size = 2 + ((i * 7) % 4);
        const delay = (i % 10) * 1.4;
        const duration = 14 + ((i * 3) % 12);
        const colors = ["#8B5CF6", "#EC4899", "#3B82F6"];
        const color = colors[i % 3];
        return (
          <span
            key={i}
            className="absolute bottom-[-10px] rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              animation: `drift ${duration}s linear ${delay}s infinite`,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}
