import { useContext } from "react"

import { apiFetch } from "@/services/apiJava"
import { AlertsContext } from "@/contexts/AlertsContext"

import Button from "./Button"

export interface RemoveAlertDialogProps {
  closeFunction: () => void
  id: number
}

const RemoveAlertDialog = ({ closeFunction, id }: RemoveAlertDialogProps) => {
  const { setAlerts } = useContext(AlertsContext)

  const deleteAlert = async (id: number) => {
    await apiFetch(`/alerta/${id}`, { method: "DELETE" })

    setAlerts((prev) =>
      Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(prev).filter(([key, alert]) => alert.id !== id),
      ),
    )

    closeFunction()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
      <div className="flex w-full max-w-120 flex-col gap-4 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-center text-lg font-bold">
          Você realmente deseja excluir o alerta #{id}?
        </h2>
        <div className="flex justify-center gap-4">
          <Button onClick={() => closeFunction()}>Cancelar</Button>
          <Button
            onClick={() => deleteAlert(id)}
            className="bg-error-400 hover:bg-error-300"
          >
            Excluir
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RemoveAlertDialog
