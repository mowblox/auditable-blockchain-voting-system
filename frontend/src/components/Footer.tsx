import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-[80%] m-auto lg:mt-20">
      <div className="w-[80%] lg:w-[30%] mb-10 flex flex-col text-center m-auto md:m-0 md:text-start md:mb-10">
        <Image src="/images/logo.png" alt="Logo" width={100} height={36} className="self-center md:self-start" />
        <p className="text-subtle-text mt-6">
          Secure, Transparent, and Fair Voting for Everyone
        </p>
      </div>

      <div className="flex gap-8 justify-between md:justify-end py-4 border-t-subtle-text border-t-2">
        <p className="text-subtle-text text-[12px]">© 2024 ABVS. All Rights Reserved.</p>
        <p className="text-subtle-text text-[12px]">Privacy Policy</p>
      </div>
    </div>
  );
}
