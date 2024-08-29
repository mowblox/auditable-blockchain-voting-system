"use client";
import Link from "next/link";
import { useState } from "react";

export default function AddElection() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="w-full mb-28">
      <form>
        <div className="mb-10">
          <label
            className="block text-[16px] mb-4 text-white font-space-grotesk"
            htmlFor="title"
          >
            Election Title
          </label>
          <input
            className="w-full py-3 border-b border-gray-300 bg-[#070707] text-subtle-text placeholder:text-subtle-text placeholder:text-[12px] lg:placeholder:text-[16px] focus:border-gray-300 focus:outline-none"
            type="text"
            id="title"
            placeholder="Eg. 2024 SRC President - UG"
          />
        </div>

        <div className="mb-10">
          <label
            className="block text-[16px] mb-4 text-white font-space-grotesk"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full py-3 border-b border-gray-300 bg-[#070707] text-subtle-text placeholder:text-subtle-text placeholder:text-[12px] lg:placeholder:text-[16px] focus:border-gray-300 focus:outline-none"
            id="description"
            rows={1}
            placeholder="Write a brief summary about the purpose of the election"
          ></textarea>
        </div>

        <div className="mb-12">
          <label className="block text-[16px] mb-4 text-white font-space-grotesk">
            Election Period
          </label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Start Date Picker */}
            <input
              type="date"
              className="w-full sm:w-auto py-3 border border-gray-300 bg-[#070707] text-subtle-text rounded-lg px-4 focus:border-gray-300 focus:outline-none"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            {/* End Date Picker */}
            <input
              type="date"
              className="w-full sm:w-auto py-3 border border-gray-300 bg-[#070707] text-subtle-text rounded-lg px-4 focus:border-gray-300 focus:outline-none"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[16px] mb-2 text-white font-space-grotesk">
            Election Type
          </label>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <label className="flex items-center text-subtle-text">
              <input
                className="mr-2 appearance-none w-4 h-4 border border-gray-300 rounded-full bg-[#070707] checked:bg-secondary cursor-pointer"
                type="radio"
                name="election-type"
                value="public"
                style={{
                  accentColor: "#4C9FE4",
                }}
              />
              Public
            </label>
            <label className="flex items-center text-subtle-text">
              <input
                className="mr-2 appearance-none w-4 h-4 border border-gray-300 rounded-full bg-[#070707] checked:bg-secondary cursor-pointer"
                type="radio"
                name="election-type"
                value="private"
                style={{
                  accentColor: "#4C9FE4",
                }}
              />
              Private
            </label>
          </div>
        </div>

        <Link
          href={'/elections/1'}
          className="mt-6 bg-gradient-to-r from-primary to-[#4595DF] hover:from-[#4595DF] hover:to-primary cursor-pointer text-white px-14 py-3 rounded-3xl w-full sm:w-auto float-none sm:float-right"
          type="submit"
        >
          next
        </Link>
      </form>
    </div>
  );
}