"use client";

import Image from "next/image";
import Link from "next/link";

import TopBar from "../components/topbar";

import { ChatBubbleLeftRightIcon, MagnifyingGlassIcon, BookOpenIcon } from "@heroicons/react/16/solid";

export default function Home() {
    const btnstyl = "ml-3 mr-3 p-5 bg-gray-600 text-white drop-shadow-2xl rounded-full hover:bg-gray-800 transition duration-250 hover:scale-110";
    return (<>
        <TopBar />
        <div className="w-full h-full">
            <div className="h-32" />
            <div className="asdf grid mt-32 w-full place-items-center justify-center text-white">
                <img src="/squaretransparent.png" alt="Square Logo" width={250} height={250} className="animate-bounce w-40 lg:w-72" />
                <span className="text-xl lg:text-5xl drop-shadow-2xl">정사각형의 사이트에 오신 것을 환영합니다 :D</span>
                <div className="flex mt-6 text-xl lg:text-2xl">
                    <Link className={btnstyl} href="https://squarediscord.uzu.kr/"><ChatBubbleLeftRightIcon width={28} className="m-auto lg:inline lg:h-8" /> 얼불춤 모드 Discord</Link>
                    <Link className={btnstyl} href="https://wiki.square3ang.kr/"><BookOpenIcon width={28} className="m-auto lg:inline lg:h-8" /> 정사각위키</Link>
                    <Link className={btnstyl} href="https://ash.square3ang.kr/"><MagnifyingGlassIcon width={28} className="m-auto lg:inline lg:h-8" /> 얼불춤 SW 헬퍼</Link>
                </div>
                <div className="h-32" />
            </div>
            <div className="h-96" />
            <span className="text-transparent block">축하합니다! 당신은 이스터애그를 찾았습니다!</span>
            <span className="p-10 block w-full text-center text-gray-400">Copyright(C) 2024 square3ang All rights reserved</span>
        </div>
    </>);
}
