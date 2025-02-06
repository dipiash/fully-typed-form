import type { ModelSelectPropertiesInterface } from './ModelSelect.types.ts'

import { FormSelect } from '../../shared/components/FormSelect/FormSelect.tsx'
import { MODELS_LIST } from './base/constant.ts'

export const ModelSelect = ({ name, form, ...rest }: ModelSelectPropertiesInterface) => (
  <FormSelect name={name} control={form.control} data={MODELS_LIST} required searchable {...rest} />
)
