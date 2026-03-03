import { useState } from "react";
import { FaApple, FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import FormInput from "./FormInput";
import SocialLoginButton from "./SocialLoginButton";

export default function SignupForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const handle = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-1">
        Sign up
      </h2>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-500 mb-6">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium hover:underline"
          style={{ color: "var(--color-teal-btn)" }}
        >
          Log in
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Row */}
        <FormInput
          placeholder="First name*"
          value={form.firstName}
          onChange={handle("firstName")}
        />
        <FormInput
          placeholder="Last name*"
          value={form.lastName}
          onChange={handle("lastName")}
        />
        <FormInput
          type="email"
          placeholder="Email address*"
          value={form.email}
          onChange={handle("email")}
        />
        <FormInput
          type="password"
          placeholder="Password (8+ characters)*"
          value={form.password}
          onChange={handle("password")}
        />

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="terms"
            checked={form.agreed}
            onChange={(e) =>
              setForm((f) => ({ ...f, agreed: e.target.checked }))
            }
            className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-teal-500 cursor-pointer shrink-0"
          />
          <label
            htmlFor="terms"
            className="text-xs text-gray-500 leading-snug cursor-pointer"
          >
            I agree to Aps&apos;s{" "}
            <a
              href="#"
              className="underline"
              style={{ color: "var(--color-link)" }}
            >
              Terms &amp; Conditions
            </a>{" "}
            and acknowledge the{" "}
            <a
              href="#"
              className="underline"
              style={{ color: "var(--color-link)" }}
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full text-white font-semibold text-sm mt-2 transition-opacity hover:opacity-90"
          style={{ background: "var(--color-teal-btn)" }}
        >
          Create account
        </button>

        <div className="flex gap-3 mt-2">
          <SocialLoginButton
            label="Sign up with Apple"
            className="bg-black"
            icon={<FaApple size={20} color="#ffffff" />}
          />
          <SocialLoginButton
            label="Sign up with Google"
            className="bg-gray-100 border border-gray-200"
            icon={<FcGoogle size={22} />}
          />
          <SocialLoginButton
            label="Sign up with Meta"
            className="bg-blue-600"
            icon={<FaMeta size={20} color="#ffffff" />}
          />
        </div>
      </form>
    </div>
  );
}
