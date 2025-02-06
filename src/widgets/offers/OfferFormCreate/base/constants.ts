import * as yup from 'yup'

import { OfferPostBody } from '../../../../shared/types/api/offers.types.generated.ts'
import { createEnumObject } from '../../../../shared/types/utils/createEnumObject.ts'

// Constants for yup schema validaton
const OFFER_NAME_MAX_LENGTH = 1024
const OFFER_SHORT_NAME_MAX_LENGTH = 1024

// This object contains all fields from OfferPostBody type keys.
// This object created by createEnumObject
// After that action we can use OFFER_CREATE_FORM_FIELDS in all places where we need to use filed names
export const OFFER_CREATE_FORM_FIELDS = createEnumObject<keyof OfferPostBody>({
  advertiser_id: 'advertiser_id',
  name: 'name',
  short_name: 'short_name',
  model: 'model',
})

// Labels mapped to form fields
export const OFFER_CREATE_FORM_FIELDS_LABEL: Record<keyof typeof OFFER_CREATE_FORM_FIELDS, string> = {
  [OFFER_CREATE_FORM_FIELDS.advertiser_id]: 'Advertiser',
  [OFFER_CREATE_FORM_FIELDS.name]: 'Name',
  [OFFER_CREATE_FORM_FIELDS.short_name]: 'Short name',
  [OFFER_CREATE_FORM_FIELDS.model]: 'Model',
}

// Placeholders mapped to form fields
export const OFFER_CREATE_FORM_FIELDS_PLACEHOLDER: Record<keyof typeof OFFER_CREATE_FORM_FIELDS, string> = {
  [OFFER_CREATE_FORM_FIELDS.advertiser_id]: 'Select advertiser',
  [OFFER_CREATE_FORM_FIELDS.name]: 'Type name',
  [OFFER_CREATE_FORM_FIELDS.short_name]: 'Type short name',
  [OFFER_CREATE_FORM_FIELDS.model]: 'Select model',
}

// This is a yup schema. It describes validation options for each field in OfferPostBody
export const OFFER_CREATE_FORM_VALIDATION_SCHEMA: yup.ObjectSchema<OfferPostBody> = yup.object({
  [OFFER_CREATE_FORM_FIELDS.advertiser_id]: yup
    .number()
    .required()
    .nonNullable()
    .label(OFFER_CREATE_FORM_FIELDS_LABEL[OFFER_CREATE_FORM_FIELDS.advertiser_id]),
  [OFFER_CREATE_FORM_FIELDS.name]: yup
    .string()
    .required()
    .nonNullable()
    .max(OFFER_NAME_MAX_LENGTH)
    .label(OFFER_CREATE_FORM_FIELDS_LABEL[OFFER_CREATE_FORM_FIELDS.name]),
  [OFFER_CREATE_FORM_FIELDS.short_name]: yup
    .string()
    .required()
    .nonNullable()
    .max(OFFER_SHORT_NAME_MAX_LENGTH)
    .label(OFFER_CREATE_FORM_FIELDS_LABEL[OFFER_CREATE_FORM_FIELDS.short_name]),
  [OFFER_CREATE_FORM_FIELDS.model]: yup.string().required().nonNullable().label(OFFER_CREATE_FORM_FIELDS_LABEL[OFFER_CREATE_FORM_FIELDS.model]),
})
