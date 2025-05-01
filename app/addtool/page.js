"use client";
import React from "react";
import "../addtool/styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    num: "",
    name: "",
    size: "",
    spec: "",
    comp: "",
    min: "",
    max: "",
    location: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const changeimg = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    setFile(buffer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.num !== "" &&
      formData.name.length >= 3 &&
      formData.size !== "" &&
      formData.spec !== "" &&
      formData.comp !== "" &&
      formData.min !== "" &&
      formData.max !== "" &&
      formData.location.length >= 3
    ) {
      const response = await fetch("/api/tool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tool_no: parseInt(formData.num),
          name: formData.name,
          size: formData.size,
          specification: formData.spec,
          used_for_component: formData.spec,
          image: file,
          minimum: parseInt(formData.min),
          maximum: parseInt(formData.max),
          location: formData.location,
        }),
      });

      const data = await response.json();
      console.log(data);

    //   router.push("/tools");
    } else {
      alert("Please fill all the fields correctly");
    }
  };

  return (
    <div className="border border-gray-300 con">
      <h2 className="text-3xl head">Add Tool</h2>
      <hr />
      <div className="tool-common">
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="flex justify-around items-start ">
            <div>
              <div className="flex items-center mt-7">
                <label htmlFor="num" className="text-xl w-54">
                  Tool Number
                </label>
                <input
                  type="number"
                  name=""
                  id="num"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-7">
                <label htmlFor="name" className="text-xl w-54">
                  Name
                </label>
                <input
                  type="text"
                  name=""
                  id="name"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-7">
                <label htmlFor="size" className="text-xl w-54">
                  Size
                </label>
                <input
                  type="text"
                  name=""
                  id="size"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-7">
                <label htmlFor="spec" className="text-xl w-54">
                  Specification
                </label>
                <input
                  type="text"
                  name=""
                  id="spec"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-7">
                <label htmlFor="comp" className="text-xl w-54">
                  Used for Component
                </label>
                <input
                  type="text"
                  name=""
                  id="comp"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-7">
                <label htmlFor="img" className="text-xl w-54">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="img"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={changeimg}
                />
              </div>
            </div>
            <div className="flex justify-end items-start flex-col">
              <div className="flex items-center mt-7">
                <label htmlFor="num" className="text-xl w-54">
                  Minimum quantity
                </label>
                <input
                  type="number"
                  name=""
                  id="min"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-7">
                <label htmlFor="num" className="text-xl w-54">
                  Maximum quantity
                </label>
                <input
                  type="number"
                  name=""
                  id="max"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-7">
                <label htmlFor="num" className="text-xl w-54">
                  Location
                </label>
                <input
                  type="text"
                  name=""
                  id="location"
                  className="px-3 py-1 border border-gray-300 rounded w-75"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button className="submitbtn rounded self-center mt-7">Add</button>
        </form>
      </div>
    </div>
  );
};

export default page;
