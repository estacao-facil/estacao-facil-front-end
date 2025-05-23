"use client"

import { createContext, useState } from "react"

import { AlertsContextType, AlertType, StationType } from "@/types"

export const AlertsContext = createContext({} as AlertsContextType)

const AlertsProvider = ({ children }: { children: React.ReactNode }) => {
  const [stations, setStations] = useState<Record<number, StationType>>({})
  const [alerts, setAlerts] = useState<Record<number, AlertType>>({})

  return (
    <AlertsContext.Provider
      value={{ stations, setStations, alerts, setAlerts }}
    >
      {children}
    </AlertsContext.Provider>
  )
}

export default AlertsProvider
