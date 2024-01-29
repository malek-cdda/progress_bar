"use client";
import ProgressBar from "@/components/progress/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <main className=" ">
      <ProgressBar />
    </main>
  );
}
