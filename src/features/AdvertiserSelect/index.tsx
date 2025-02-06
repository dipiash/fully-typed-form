import type { AdvertiserSelectPropertiesInterface } from './AdvertiserSelect.types.ts'

import { FormSelect } from '../../shared/components/FormSelect/FormSelect.tsx'
import { ADVERTISERS_LIST } from './base/constant.ts'

export const AdvertiserSelect = ({ name, form, ...rest }: AdvertiserSelectPropertiesInterface) => (
  <FormSelect name={name} control={form.control} data={ADVERTISERS_LIST} required searchable {...rest} />
)
