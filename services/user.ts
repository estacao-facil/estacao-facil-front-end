import { User } from "@/types"

import { BASE_URL } from "./api"

export const recoveryUserRequest = async (token: string): Promise<User> => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail)
  }

  return response.json()
}
