import type { UseFormReturn } from 'react-hook-form'

import type { SelectFormWrapperPropertiesInterface } from '../../shared/types/components/Select.types.ts'
import type { TAnyType } from '../../shared/types/shared.types.ts'

export interface AdvertiserSelectPropertiesInterface extends SelectFormWrapperPropertiesInterface {
  form: UseFormReturn<TAnyType>
  name: string
}
