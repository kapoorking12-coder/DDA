import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center">
        <Link href="/"><Image src="/images/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-10" /></Link>
      </div>
      <span className="text-xl font-semibold text-gray-800">Delhi Design Academy</span>
    </div>
  );
}