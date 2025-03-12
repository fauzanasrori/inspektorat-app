import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function AccountToggle() {
  return (
    <div className="border-t mb-4 mt-2 pt-4 border-gray-300 sticky top-[calc(100vh_-_48px_-_16px)]">
      <button className="flex p-0.5 hover:bg-gray-200 rounded transition-colors relative gap-2 w-full items-center">
        <Image
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          width={32}
          height={32}
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />

        <div className="text-start">
          <span className="text-sm font-semibold block">Fauzan Asrori</span>
          <span className="text-xs block text-gray-500">
            fauzan@example.com
          </span>
        </div>

        <ChevronUp
          size={16}
          className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs"
        />
        <ChevronDown
          size={16}
          className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs"
        />
      </button>
    </div>
  );
}
