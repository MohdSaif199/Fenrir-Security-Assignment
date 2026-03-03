export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full px-8 py-5 z-10">
      <div className="flex items-center gap-2">
        {/* Teal circle logo */}
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at 40% 35%, #3fffdf, #0BBFAC)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-white/80" />
        </span>
        <span className="text-white font-semibold text-base tracking-wide">
          aps
        </span>
      </div>
    </header>
  );
}
