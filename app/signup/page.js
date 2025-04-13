"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  
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
        callbackUrl: "/"
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
        <div className="text-center">
          <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
            Create your account
          </p>
          <p className="mt-2 text-sm leading-4 text-slate-600">
            Join us to get started.
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
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            onChange={handleChange}
            value={form.password}
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Password"
          />

          <label htmlFor="confirmpassword" className="sr-only">
            Confirm Password
          </label>
          <input
            name="confirmpassword"
            type="password"
            onChange={handleChange}
            value={form.confirmpassword}
            autoComplete="new-password"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-[#4285f4]">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;