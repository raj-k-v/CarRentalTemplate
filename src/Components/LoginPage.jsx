import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // basic validation used .trim to remove space 
    if (!email.trim() || !password) {
      setError("Please enter both email and password.");
      
    }
    alert(`Logged in as ${email}`);
  };

  return (
    <div id = "login"className="min-h-screen flex items-center justify-center bg-[url('/patterns/dots.svg')] bg-cover">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-md p-8 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        <div className="text-center mb-6">
          <p className="text-[#f5b754] tracking-[0.35em] text-sm mb-2">WELCOME BACK</p>
          <h2 className="text-2xl font-extrabold text-white">Sign in to your account</h2>
          <p className="text-gray-400 text-sm mt-2">Enter your details to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full bg-transparent border border-[#222] rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent border border-[#222] rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#f5b754] px-2 py-1 rounded"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="accent-[#f5b754]" />
              Remember me
            </label>
            <a href="#" className="text-[#f5b754] hover:underline">Forgot?</a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#f5b754] text-black font-medium px-4 py-3 rounded-lg shadow hover:scale-[1.01] transition-transform"
            >
              Sign in
            </button>
          </div>

          {error && <div className="text-red-400 text-center">{error}</div>}
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account? <a href="#" className="text-[#f5b754] hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
