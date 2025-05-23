import { Pencil, Trash } from "lucide-react"
import { useState } from "react"

import { AlertType } from "@/types"

import Button from "./Button"
import EditAlertDialog from "./EditAlertDialog"
import RemoveAlertDialog from "./RemoveAlertDialog"

const AlertItem = (alert: AlertType) => {
  const [dialog, setDialog] = useState<string>("")

  return (
    <>
      <li className="border-border-500 relative flex w-full flex-col justify-between gap-4 rounded-lg border p-4 shadow-sm">
        <span className="text-text/40 absolute top-2 left-2 text-xs font-bold">
          #{alert.id}
        </span>
        <div className="flex flex-col gap-1 pt-4">
          <h3 className="text-lg font-semibold">{alert.titulo}</h3>
          <p className="text-text text-sm">Início: {alert.dataInicio}</p>
          <p className="text-text text-sm">
            Status: {alert.dataFim ? "Finalizado" : "Em Aberto"}
          </p>
          <p className="text-text text-sm">Gravidade: {alert.gravidade}</p>
          <p className="text-text text-sm">Estação: {alert.estacao}</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={() => setDialog("edit")}>
            <Pencil />
          </Button>
          <Button
            onClick={() => setDialog("remove")}
            className="bg-error-400 hover:bg-error-300"
          >
            <Trash />
          </Button>
        </div>
      </li>

      {dialog === "edit" && (
        <EditAlertDialog closeFunction={() => setDialog("")} alert={alert} />
      )}

      {dialog === "remove" && (
        <RemoveAlertDialog closeFunction={() => setDialog("")} id={alert.id} />
      )}
    </>
  )
}

export default AlertItem
