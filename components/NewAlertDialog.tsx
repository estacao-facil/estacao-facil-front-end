import {
  AlertTriangle,
  AlignLeft,
  CalendarIcon,
  MapPin,
  TypeIcon,
} from "lucide-react"
import { useContext, useRef } from "react"

import { requiredErrorMessage } from "@/constants"
import { AlertsContext } from "@/contexts/AlertsContext"
import { apiFetch } from "@/services/apiJava"
import {
  AlertType,
  CreateAlertFormData,
  FormRootHandle,
  NewAlertDialogProps,
} from "@/types"

import Button from "./Button"
import { Field } from "./Field"
import { Form } from "./Form"

const NewAlertDialog = ({ closeFunction }: NewAlertDialogProps) => {
  const { stations, setAlerts } = useContext(AlertsContext)
  const createAlertFormRef = useRef<FormRootHandle<CreateAlertFormData>>(null)

  const createAlert = async (data: CreateAlertFormData) => {
    createAlertFormRef.current?.clearErrors("root")

    try {
      await apiFetch("/alerta", {
        method: "POST",
        body: JSON.stringify({
          titulo: data["title"],
          descricao: data["description"],
          dataInicio: data["startDate"],
          dataFim: data["endDate"],
          gravidade: data["severity"],
          idEstacao: data["stationId"],
        }),
      })

      const alertsData = await apiFetch("/alerta")

      const alertsHashMap = Object.fromEntries(
        alertsData.map((alert: AlertType) => [
          alert.id,
          {
            ...alert,
            estacao: stations[alert.idEstacao]?.nome ?? "Desconhecida",
          },
        ]),
      )

      setAlerts(alertsHashMap)
      closeFunction()
    } catch {
      createAlertFormRef.current?.setError("root", {
        message: "Ocorreu um erro desconhecido.\nTente novamente mais tarde",
      })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
      <div className="max-h-full w-full max-w-120 overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-center text-3xl font-bold">Novo Alerta</h2>
        <Form.Root
          onValidSubmit={createAlert}
          onInvalidSubmit={() => null}
          ref={createAlertFormRef}
          className="mt-4 flex w-full flex-col gap-6"
        >
          <Form.FeedbackMessage />
          <Field.Root fieldName="title">
            <Field.Label>Título</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={TypeIcon} />
              <Field.TextInput
                autoComplete="off"
                placeholder="Insira um título"
                validate={{ required: requiredErrorMessage }}
              />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <Field.Root fieldName="description">
            <Field.Label>Descrição</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={AlignLeft} />
              <Field.TextInput
                autoComplete="off"
                placeholder="Insira uma descrição"
                validate={{ required: requiredErrorMessage }}
              />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <Field.Root fieldName="startDate">
            <Field.Label>Data Início</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={CalendarIcon} />
              <Field.TextInput
                type="date"
                autoComplete="off"
                validate={{ required: requiredErrorMessage }}
              />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <Field.Root fieldName="endDate">
            <Field.Label>Data Término</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={CalendarIcon} />
              <Field.TextInput type="date" autoComplete="off" />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <Field.Root fieldName="severity">
            <Field.Label>Grau de Gravidade</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={AlertTriangle} />
              <Field.TextInput
                type="number"
                autoComplete="off"
                placeholder="Insira um grau de gravidade"
                validate={{
                  required: requiredErrorMessage,
                }}
              />
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <Field.Root fieldName="stationId">
            <Field.Label>Estação</Field.Label>
            <Field.TextInputWrapper>
              <Field.LabelIcon icon={MapPin} />
              <Field.SelectInput
                validate={{ required: "Selecione uma estação" }}
              >
                <option value="">Selecione...</option>
                {Object.values(stations).map((station) => (
                  <option key={station.id} value={station.id}>
                    {station.nome}
                  </option>
                ))}
              </Field.SelectInput>
            </Field.TextInputWrapper>
            <Field.FeedbackMessage />
          </Field.Root>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              onClick={closeFunction}
              className="bg-error-400 hover:bg-error-300"
            >
              Cancelar
            </Button>
            <Form.SubmitButton>Criar</Form.SubmitButton>
          </div>
        </Form.Root>
      </div>
    </div>
  )
}

export default NewAlertDialog
