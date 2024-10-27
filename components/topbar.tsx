import Image from "next/image";

export default function TopBar() {
    return (
        <div className="p-6 fixed left-0 right-0 w-full text-white text-2xl z-50 backdrop-blur-xl">
            <Image src="/squaretransparent.png" alt="Square Logo" width={48} height={48} className="inline" style={{ "transform": "translateY(-2px)" }} /> |
            정사각형의 사이트
        </div>
    )
}