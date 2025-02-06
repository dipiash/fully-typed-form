import type { FieldValues, UseControllerProps } from 'react-hook-form'

import type { SelectFormPropertiesInterface } from '../../types/components/Select.types.ts'

export type FormSelectPropertiesType<T extends FieldValues> = SelectFormPropertiesInterface & UseControllerProps<T>
