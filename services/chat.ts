import { LoggedInMessageResponse, LoggedOutMessageResponse } from "@/types"
import { apiFetch } from "./api"

export const createNewChat = async (message: string) => {
  return await apiFetch(`/chats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: message, force_title: true }),
  })
}

export const sendLoggedInMessage = async (
  message: string,
  chatCode: string,
): Promise<LoggedInMessageResponse> => {
  return apiFetch(`/messages/${chatCode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: message }),
  })
}

export const sendLoggedOutMessage = async (
  message: string,
  context: Record<string, unknown>,
): Promise<LoggedOutMessageResponse> => {
  return apiFetch(`/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
      context: context,
    }),
  })
}
