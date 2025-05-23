import { forwardRef, useImperativeHandle } from "react"
import { FieldValues, useForm } from "react-hook-form"

import { FormContextProps, FormRootHandle, FormRootProps } from "@/types"

import { FormContext } from "@/contexts/FormContext"

const RootBase = forwardRef(
  <TFormData extends FieldValues>(
    {
      children,
      onValidSubmit,
      onInvalidSubmit,
      formOptions = {},
      ...rest
    }: FormRootProps<TFormData>,
    ref: React.Ref<FormRootHandle<TFormData>>,
  ) => {
    const {
      register,
      handleSubmit,
      watch,
      getValues,
      setValue,
      setError,
      clearErrors,
      reset,
      formState: { errors },
    } = useForm<TFormData>(formOptions)

    useImperativeHandle(ref, () => ({
      watch,
      getValues,
      setValue,
      setError,
      clearErrors,
      reset,
    }))

    return (
      <FormContext.Provider
        value={{ register, errors } as FormContextProps<FieldValues>}
      >
        <form
          {...rest}
          noValidate
          onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
          className={rest.className ?? ""}
        >
          {children}
        </form>
      </FormContext.Provider>
    )
  },
)

RootBase.displayName = "Form.Root"

const Root = RootBase as <TFormData extends FieldValues>(
  props: FormRootProps<TFormData> & {
    ref?: React.Ref<FormRootHandle<TFormData>>
  },
) => React.ReactElement

export default Root
