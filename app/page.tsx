"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const btnstyl = "ml-3 mr-3 text-2xl p-5 bg-gray-600 text-white drop-shadow-2xl rounded-full hover:bg-gray-800 transition duration-250 hover:scale-110";
  return (<div className="w-screen h-screen">
    <div className="p-6 w-full text-white text-2xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl rounded-b-3xl">
      <Image src="/squaretransparent.png" alt="Square Logo" width={48} height={48} className="inline" style={{ "transform": "translateY(-2px)" }} /> |
      정사각형의 사이트
    </div>
    <div className="mt-32 grid w-full place-items-center justify-center text-white text-5xl drop-shadow-2xl">
      <Image src="/squaretransparent.png" alt="Square Logo" width={250} height={250} className="animate-bounce" />
      정사각형의 사이트에 오신 것을 환영합니다 :D
      <div className="flex mt-6">
        <Link className={btnstyl} href="https://square.lrl.kr/">얼불춤 모드 Discord</Link>
        <Link className={btnstyl} href="https://wiki.square3ang.kro.kr/">정사각위키</Link>
      </div>
    </div>

  </div>);
}
