"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // If user is logged in, redirect to home page
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if passwords match
    if (form.password !== form.confirmpassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      // Automatically log in after signing up
      const loginResponse = await signIn("credentials", {
        redirect: false,
        username: form.username,
        password: form.password,
        callbackUrl: "/",
      });

      if (loginResponse?.error) {
        throw new Error(loginResponse.error);
      }

      // If successful, the useEffect will handle the redirect
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed: " + error.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <div className="text-center p-3">
          <p className="mb-3 text-[20px] font-semibold leading-5 text-slate-900">
            Create your account or Log into exsisting account
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="name" className="sr-only">
            Username
          </label>
          <input
            name="username"
            type="text"
            autoComplete="name"
            onChange={handleChange}
            value={form.username}
            required
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Username"
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative mt-2">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              onChange={handleChange}
              value={form.password}
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Password"
            />
            <img
              src={showPassword ? "eyenot.svg" : "eye.svg"}
              alt="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(e) => e.preventDefault()}
              className="absolute right-3 top-1/2 w-5 h-5 transform -translate-y-1/2 cursor-pointer"
            />
          </div>

          <label htmlFor="confirmpassword" className="sr-only">
            Confirm Password
          </label>
          <div className="relative mt-2">
            <input
              name="confirmpassword"
              type={showConfirmPassword ? "text" : "password"}
              onChange={handleChange}
              value={form.confirmpassword}
              autoComplete="new-password"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Confirm Password"
            />
            <img
              src={showConfirmPassword ? "eyenot.svg" : "eye.svg"}
              alt="Toggle password visibility"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              onMouseDown={(e) => e.preventDefault()}
              className="absolute right-3 top-1/2 w-5 h-5 transform -translate-y-1/2 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
          >
            Sign Up/Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
