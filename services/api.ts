import { parseCookies } from "nookies"

export const BASE_URL = "http://localhost:8000"

export const apiFetch = async (path: string, options: RequestInit = {}) => {
  const { "estacao-facil.token": token } = parseCookies()

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail)
  }

  if (
    response.status !== 204 &&
    response.headers.get("content-type")?.includes("application/json")
  ) {
    return response.json()
  }

  return null
}
