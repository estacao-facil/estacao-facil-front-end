import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

import { ChatListItemProps } from "@/types"

const ChatListItem = ({ url, title }: ChatListItemProps) => {
  const pathname = usePathname()

  return (
    <li
      className={twMerge(
        "hover:bg-primary-300 flex w-full items-center rounded p-2 hover:text-white",
        pathname === url && "bg-primary-400 text-white",
      )}
    >
      <Link href={url} className="grow truncate">
        {title}
      </Link>
    </li>
  )
}

export default ChatListItem
