import { type FieldValues, useController } from 'react-hook-form'

import { Select as MantineSelect } from '@mantine/core'

import { FormSelectPropertiesType } from './FormSelect.types.ts'

export const FormSelect = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  onChange,
  rules,
  shouldUnregister,
  ...properties
}: FormSelectPropertiesType<T>) => {
  const {
    field: { onChange: fieldOnChange, value, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <MantineSelect
      onChange={(value, option) => {
        fieldOnChange(value)
        onChange?.(value, option)
      }}
      error={fieldState.error?.message}
      value={value}
      {...field}
      {...properties}
    />
  )
}
