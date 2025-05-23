import { LucideIcon } from "lucide-react"
import { FieldError, FieldValues, Path, RegisterOptions } from "react-hook-form"

export interface FieldContextProps<TFormData extends FieldValues> {
  fieldName: keyof TFormData
  fieldErrors: FieldError | undefined
}

export interface FieldRootProps<TFormData extends FieldValues>
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fieldName: Extract<keyof TFormData, string>
}

export interface FieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string
}

export interface FieldTextInputWrapperProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export interface FieldLabelIconProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  icon: LucideIcon
}

export interface FieldTextInputProps<
  TFormData extends FieldValues = FieldValues,
> extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute
  validate?: RegisterOptions<TFormData, Path<TFormData>>
  placeholder?: string
}

export interface FieldPasswordInputProps extends FieldTextInputProps {
  eyeToggle?: boolean
}

export interface CheckboxWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
