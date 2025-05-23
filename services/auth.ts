import { SignInRequestData, SignInResponseData } from "@/types"

import { BASE_URL } from "./api"

export const signInRequest = async ({
  email,
  password,
}: SignInRequestData): Promise<SignInResponseData> => {
  const authPayload = new URLSearchParams()
  authPayload.append("username", email)
  authPayload.append("password", password)

  const response = await fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: authPayload.toString(),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail)
  }

  return response.json()
}
