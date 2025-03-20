import Image from "next/image"

import LoginForm from "@/components/LoginForm"

const Login = () => {
  return (
    <main className="flex grow flex-col items-center gap-[52px] overflow-x-clip">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={175}
        height={114}
        className="mt-10"
        priority
      />

      <LoginForm />
    </main>
  )
}

export default Login
