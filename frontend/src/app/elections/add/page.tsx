"use client";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

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
    <div className="h-full px-4 lg:px-0">
      <div className="md:w-[80%] m-auto flex flex-col lg:flex-row mt-14 gap-14">
        <div className="lg:w-[25%]">
          <h2 className="gradient-text font-bold text-[32px] lg:text-[45px] font-space-grotesk leading-tight">
            Let’s create an election
          </h2>
          <p className="text-subtle-text text-[16px] lg:w-[80%]">
            Launch your election and watch the results unfold.
          </p>
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-10 w-full lg:w-auto">
          <div className="tabs mb-8">
            {["Elections", "Candidates", "Voters", "Summary", "Links"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`${
                    activeTab === tab
                      ? "border-b-2 border-[#4C9FE4] text-[#4C9FE4]"
                      : "text-subtle-text"
                  } pb-2 mr-6 lg:mr-14 text-[12px] md:text-[16px] lg:text-[18px] font-space-grotesk cursor-pointer`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Displaying Tab content */}
          <div className="tab-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

function Elections() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue ?? null)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Start Date"
                  />
                )}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#939393",
                    border: "1px solid #939393",
                    borderRadius: "8px",
                    padding: "8px 12px",
                  },
                  "& .MuiInputBase-root::placeholder": {
                    color: "red !important",
                  },
                  "& .MuiInputBase-root:focus-within": {
                    border: "none"
                  },
                  "& .MuiInputLabel-root": {
                    color: "#939393 !important",
                  },
                  "& .MuiInputBase-input": {
                    color: "#939393 !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#939393",
                  },
                }}
              />
            </LocalizationProvider>

            {/* End Date Picker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue ?? null)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="End Date"
                  />
                )}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#939393",
                    border: "1px solid #939393",
                    borderRadius: "8px",
                    padding: "8px 12px",
                  },
                  "& .MuiInputBase-root:focus-within": {
                    border: "none"
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#939393",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#939393 !important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#939393",
                  },
                }}
              />
            </LocalizationProvider>
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

        <button
          className="mt-6 bg-gradient-to-r from-primary to-[#4595DF] hover:from-[#4595DF] hover:to-primary cursor-pointer text-white px-14 py-3 rounded-3xl w-full sm:w-auto float-none sm:float-right"
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
