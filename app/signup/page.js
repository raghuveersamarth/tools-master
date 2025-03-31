"use client";
import { React, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const SignUpPage = () => {
  const { data: session } = useSession();
  const [form, setform] = useState({
    Username: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    // const response = await fetch("/api/sign",{
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // });

    // fetch("http://localhost:3000/api/sign", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));

    // Automatically log in after signing up
    const loginResponse = await signIn("credentials", {
      redirect: false,
      Username: form.Username,
      password: form.password,
    });

    if (loginResponse?.error) {
      throw new Error(loginResponse.error);
    }
  };
const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }
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

        <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600"></div>

        <form className="w-full" action={handlesubmit}>
          <label htmlFor="name" className="sr-only">
            Username
          </label>
          <input
            name="name"
            type="text"
            autoComplete="name"
            onChange={handleChange}
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
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Password"
          />

          <label htmlFor="confirm-password" className="sr-only">
            Confirm Password
          </label>
          <input
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Confirm Password"
          />
          {session ? <p>logged in at {session.user.name}</p> : ""}
          <button
            type="submit"
            className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?
          <a href="/login" className="font-medium text-[#4285f4]">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
