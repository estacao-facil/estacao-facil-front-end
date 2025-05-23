import {
  FieldErrors,
  FieldValues,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormProps,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
  UseFormReset,
} from "react-hook-form"

export interface FormContextProps<TFormData extends FieldValues> {
  register: UseFormRegister<TFormData>
  errors: FieldErrors<TFormData>
}

export type FormRootHandle<TFormData extends FieldValues> = {
  watch: UseFormWatch<TFormData>
  getValues: UseFormGetValues<TFormData>
  setValue: UseFormSetValue<TFormData>
  setError: UseFormSetError<TFormData>
  clearErrors: UseFormClearErrors<TFormData>
  reset: UseFormReset<TFormData>
}

export interface FormRootProps<TFormData extends FieldValues>
  extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  onValidSubmit: (data: TFormData) => void
  onInvalidSubmit: (errors: FieldErrors<TFormData>) => void
  formOptions?: UseFormProps<TFormData>
}
