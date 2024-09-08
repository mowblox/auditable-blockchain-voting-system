"use client";
import { useState } from "react";

export default function VerifyVoter() {
  const [link, setlink] = useState<string>("");
  interface ResponseData {
    status: boolean;
    message: string;
    data: any;
  }
  interface VerifyLink {
    verifyLink: string;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setlink(value);
    console.log({ value });
  }

  async function submitLink():Promise<ResponseData | null> {
    const url = "";
    const submitLink: VerifyLink = { verifyLink: link };
    // console.log(submitLink);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitLink),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData: ResponseData = await response.json();
      // console.log(responseData);
      return responseData
    } catch (error) {
      console.error("Error", error);
      return null;
    }
  }

  return (
    <section className="flex flex-col gap-10 w-full md:max-w-[639px]">
      <div className="flex flex-col">
        <span className="text-base md:text-xl">
          Paste election url link here to have access to vote
        </span>
        <span className="text-subtle-text text-xs md:text-base">
          Turpis non molestie amet tortor. Diam amet volutpat
        </span>
      </div>
      <input
        type="text"
        placeholder="https://abvs.com/elections/legonsrc/team1"
        className=" w-full bg-gray p-5 focus:outline-none rounded-md"
        value={link}
        name="link"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={submitLink}
        className="w-full bg-secondary text-dark p-5 rounded-md"
      >
        submit
      </button>
    </section>
  );
}
