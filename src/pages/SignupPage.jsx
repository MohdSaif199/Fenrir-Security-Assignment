import Header from "../components/layout/Header";
import HeroContent from "../components/sections/HeroContent";
import SignupForm from "../components/auth/SignupForm";

export default function SignupPage() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 55% at 5% 10%, rgba(10, 120, 100, 0.45) 0%, transparent 65%),
          radial-gradient(ellipse 55% 50% at 95% 90%, rgba(180, 70, 20, 0.55) 0%, transparent 60%),
          #0a0c0b
        `,
      }}
    >
      <Header />

      {/* Main layout */}
      <main className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-12 flex flex-col lg:flex-row items-center gap-12 py-10">
          {/* Left: Hero */}
          <div className="flex-1 w-full">
            <HeroContent />
          </div>

          {/* Right: Signup Card */}
          <div className="flex-1 w-full flex items-center justify-center lg:justify-end">
            <SignupForm />
          </div>
        </div>
      </main>
    </div>
  );
}
