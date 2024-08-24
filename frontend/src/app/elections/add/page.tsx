"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AddElection() {
  const [activeTab, setActiveTab] = useState("Elections");

  const renderContent = () => {
    switch (activeTab) {
      case "Elections":
        return <Elections />;
      case "Candidates":
        return <Candidates />;
      case "Voters":
        return <Voters />;
      case "Summary":
        return <Summary />;
      case "Links":
        return <Links />;
      default:
        return <Elections />;
    }
  };

  return (
    <div className="h-full">
      <div className="ml-[2%] flex mt-14 gap-14">
        <div className="w-[25%]">
          <h2 className="gradient-text font-bold text-[45px] font-space-grotesk leading-tight">
            Let’s create an election
          </h2>
          <p className="text-subtle-text text-[16px] w-[80%]">
            Launch your election and watch the results unfold.
          </p>
        </div>

        <div className="block ml-10">
          <div className="tabs mb-8">
            <button
              className={`${
                activeTab === "Elections"
                  ? "border-b-2 border-[#4C9FE4] text-[#4C9FE4]"
                  : "text-subtle-text]"
              }  pb-2 mr-14 text-[18px]  font-space-grotesk cursor-pointer`}
              onClick={() => setActiveTab("Elections")}
            >
              Election
            </button>
            <button
              className={`${
                activeTab === "Candidates"
                  ? "border-b-2 border-[#4C9FE4] text-[#4C9FE4]"
                  : "text-subtle-text"
              } pb-2 mr-14 text-[18px] font-space-grotesk cursor-pointer`}
              onClick={() => setActiveTab("Candidates")}
            >
              Candidates
            </button>
            <button
              className={`${
                activeTab === "Voters"
                  ? "border-b-2 border-[#4C9FE4] text-[#4C9FE4]"
                  : "text-subtle-text"
              } pb-2 mr-14 text-[18px] font-space-grotesk cursor-pointer`}
              onClick={() => setActiveTab("Voters")}
            >
              Voters
            </button>
            <button
              className={`${
                activeTab === "Summary"
                  ? "border-b-2 border-[#4C9FE4] text-[#4C9FE4]"
                  : "text-subtle-text"
              } pb-2 mr-14 text-[18px] font-space-grotesk cursor-pointer`}
              onClick={() => setActiveTab("Summary")}
            >
              Summary
            </button>
            <button
              className={`${
                activeTab === "Links"
                  ? "border-b-2 border-[#4C9FE4] text-[#4C9FE4]"
                  : "text-subtle-text"
              } pb-2 text-[18px] font-space-grotesk cursor-pointer`}
              onClick={() => setActiveTab("Links")}
            >
              Link
            </button>
          </div>

          {/* Displaying Tab content */}
          <div className="tab-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

function Elections() {
  useEffect(() => {
    const setCustomPlaceholder = (input, placeholder) => {
      input.onfocus = function () {
        this.type = "date";
        this.placeholder = "";
      };
      input.onblur = function () {
        if (!this.value) {
          this.type = "text";
          this.placeholder = placeholder;
        }
      };
    };

    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");

    setCustomPlaceholder(startDateInput, "Start Date");
    setCustomPlaceholder(endDateInput, "End Date");
  }, []);

  return (
    <div className="w-full ">
      <form>
        <div className="mb-10">
          <label
            className="block text-[16px] mb-4 text-white font-space-grotesk"
            htmlFor="title"
          >
            Election Title
          </label>
          <input
            className="w-full py-3 border-b border-gray-300 bg-[#070707] text-subtle-text placeholder:text-subtle-text focus:border-gray-300 focus:outline-none"
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
            className="w-full py-3 border-b border-gray-300 bg-[#070707] text-subtle-text placeholder:text-subtle-text focus:border-gray-300 focus:outline-none"
            id="description"
            rows={1}
            placeholder="Write a brief summary about the purpose of the election"
          ></textarea>
        </div>

        <div className="mb-12">
          <label className="block text-[16px]  mb-4 text-white font-space-grotesk">
            Election Period
          </label>
          <div className="flex items-center gap-6">
            {/* Start Date Picker */}
            <div className="flex justify-between gap-4 border rounded-md pl-4 border-gray-300">
              <Image
                src="/images/calendar.svg"
                width={20}
                height={20}
                alt="Calendar Icon"
                className="mr-2 text-subtle-text"
              />
              <input
                className="w-1/2 p-3 border-none focus:outline-none bg-[#070707] text-subtle-text"
                type="text"
                id="start-date"
                placeholder="Start Date"
              />
            </div>

            {/* End Date Picker */}
            <div className="flex justify-between gap-4 border rounded-md pl-4 border-gray-300">
              <Image
                src="/images/calendar.svg"
                width={20}
                height={20}
                alt="Calendar Icon"
                className="mr-2 text-subtle-text"
              />
              <input
                className="w-1/2 p-3 border-none focus:outline-none bg-[#070707] text-subtle-text"
                type="text"
                id="end-date"
                placeholder="End Date"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[16px] mb-2 text-white font-space-grotesk">
            Election Type
          </label>
          <div className="flex gap-8">
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

        <button
          className="mt-6 bg-gradient-to-r from-primary to-[#4595DF] hover:from-[#4595DF] hover:to-primary cursor-pointer text-white px-14 py-3 rounded-3xl float-right"
          type="submit"
        >
          next
        </button>
      </form>
    </div>
  );
}

function Candidates() {
  return (
    <div>
      <h2 className="text-[24px] font-bold">Candidates</h2>
      <p>This is the Candidates tab content.</p>
    </div>
  );
}

function Voters() {
  return (
    <div>
      <h2 className="text-[24px] font-bold">Voters</h2>
      <p>This is the Voters tab content.</p>
    </div>
  );
}

function Summary() {
  return (
    <div>
      <h2 className="text-[24px] font-bold">Summary</h2>
      <p>This is the Summary tab content.</p>
    </div>
  );
}

function Links() {
  return (
    <div>
      <h2 className="text-[24px] font-bold">Links</h2>
      <p>This is the Links tab content.</p>
    </div>
  );
}
