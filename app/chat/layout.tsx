import Chat from "@/components/Chat"
import ChatProvider from "@/contexts/ChatContext"
import ChatHeader from "@/components/ChatHeader"
import DesktopChatMenu from "@/components/DesktopChatMenu"
import MobileChatMenu from "@/components/MobileChatMenu"

const Layout = () => {
  return (
    <ChatProvider>
      <main className="flex h-dvh w-full">
        <DesktopChatMenu />
        <div className="flex h-dvh w-full flex-col items-center">
          <ChatHeader />
          <MobileChatMenu />
          <Chat />
        </div>
      </main>
    </ChatProvider>
  )
}

export default Layout
