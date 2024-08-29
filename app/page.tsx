"use client";

import { useRouter } from "next/navigation";

import { Button } from "./components/button/button";

export default function Home() {
  const router = useRouter();

  return (
    <main className="max-w-[1240px] mx-auto flex flex-col items-center gap-5 ">
      <h1 className=" text-[40px] font-light text-center">
        {" "}
        <span className=" font-semibold">Vrit</span>Tech NextJs Assignment
      </h1>
      <p className=" text-center text-[16px]">
        <span className=" font-semibold">Objective:</span> Set up authentication
        in a Next.js 14 application and protect certain routes, demonstrating an
        understanding of both client-side and server-side rendering.
      </p>
      <h3 className=" text-[25px] font-light mt-10">
        Here <span className="font-semibold">Dashboard Page</span> is protected
      </h3>
      <div>
        <Button
          title="Login"
          handleClick={() => {
            router.push("/login");
          }}
        />
      </div>
    </main>
  );
}
