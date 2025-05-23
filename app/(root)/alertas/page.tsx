"use client"

import { LoaderCircle, Plus } from "lucide-react"
import { useContext, useEffect, useState } from "react"

import { AlertsContext } from "@/contexts/AlertsContext"
import { apiFetch } from "@/services/apiJava"
import { AlertType, StationType } from "@/types"

import AlertItem from "@/components/AlertItem"
import Button from "@/components/Button"
import NewAlertDialog from "@/components/NewAlertDialog"

const Alerts = () => {
  const { setStations, alerts, setAlerts } = useContext(AlertsContext)
  const [dialog, setDialog] = useState<string>("")
  const [loadingAlerts, setLoadingAlerts] = useState<boolean>(false)

  useEffect(() => {
    const getAlertsAndStations = async () => {
      const stationsData = await apiFetch("/estacao")

      const stationsHashMap = Object.fromEntries(
        stationsData.map((station: StationType) => [station.id, station]),
      )

      const alertsData = await apiFetch("/alerta")

      const alertsHashMap = Object.fromEntries(
        alertsData.map((alert: AlertType) => [
          alert.id,
          {
            ...alert,
            estacao: stationsHashMap[alert.idEstacao]?.nome,
          },
        ]),
      )

      setStations(stationsHashMap)
      setAlerts(alertsHashMap)
    }

    setLoadingAlerts(true)

    getAlertsAndStations()

    setLoadingAlerts(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <main className="mt-10 flex w-full max-w-7xl grow flex-col items-center justify-center px-4 md:mt-26 md:mb-20 md:px-8">
        <h1 className="text-center text-3xl font-bold md:text-5xl">Alertas</h1>
        {loadingAlerts ? (
          <div className="flex flex-1 items-center justify-center">
            <LoaderCircle className="text-primary-500 animate-spin" />
          </div>
        ) : Object.values(alerts).length ? (
          <>
            <Button
              className="bg-success-400 hover:bg-success-300 mt-6 ml-auto"
              onClick={() => setDialog("new")}
            >
              <Plus />
            </Button>
            <ul className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Object.values(alerts).map((alert, i) => (
                <AlertItem key={i} {...alert} />
              ))}
            </ul>
          </>
        ) : (
          <p className="flex grow flex-col items-center justify-center text-center">
            Não foi possível encontrar nenhum alerta
            <Button
              className="bg-success-400 hover:bg-success-300 mt-6"
              onClick={() => setDialog("new")}
            >
              Inserir Alerta
            </Button>
          </p>
        )}
      </main>

      {dialog === "new" && (
        <NewAlertDialog closeFunction={() => setDialog("")} />
      )}
    </>
  )
}

export default Alerts
