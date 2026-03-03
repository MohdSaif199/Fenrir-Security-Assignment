export default function SocialLoginButton({ icon, label, className = "" }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`flex items-center justify-center rounded-full w-full h-12 transition-opacity hover:opacity-90 ${className}`}
    >
      {icon}
    </button>
  );
}
