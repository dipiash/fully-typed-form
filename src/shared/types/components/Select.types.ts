import type { SelectProps as MantineSelectProperties } from '@mantine/core'

export interface SelectFormPropertiesInterface extends Omit<MantineSelectProperties, 'defaultValue' | 'form' | 'value'> {}
export interface SelectFormWrapperPropertiesInterface extends Omit<SelectFormPropertiesInterface, 'data'> {}
