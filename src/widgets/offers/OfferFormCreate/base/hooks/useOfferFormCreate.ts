import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { apiOfferPost } from '../../../../../shared/api/offers.api.ts'
import { OFFER_CREATE_FORM_FIELDS, OFFER_CREATE_FORM_VALIDATION_SCHEMA } from '../constants.ts'

// yup.InferType is a utility from the Yup library used to extract a TypeScript type from a validation schema.
// It allows you to automatically generate data types based on a Yup schema, helping to avoid code duplication and mismatches between types.
type OfferFormCreateSchemaType = yup.InferType<typeof OFFER_CREATE_FORM_VALIDATION_SCHEMA>

// This hook is used to create a form for creating a new offer
export const useOfferFormCreate = () => {
  // It's a mutation hook from the @tanstack/react-query library. It's handle API request to create new offer
  const { isPending, mutate } = useMutation({
    mutationFn: apiOfferPost,
  })

  // This hook is used to create a form for creating a new offer and handle fields
  // This hook is typed with OfferFormCreateSchemaType.
  // This hook used a validation schema to validate fields (resolver).
  const form = useForm<OfferFormCreateSchemaType>({
    resolver: yupResolver(OFFER_CREATE_FORM_VALIDATION_SCHEMA),
  })

  // This function is used to handle form submit
  const handleSubmit = (values: OfferFormCreateSchemaType) => {
    mutate(values)
  }

  // This function is used to get error message for each field
  const getFieldErrorMessage = (fieldName: keyof typeof OFFER_CREATE_FORM_FIELDS) => form.formState.errors[fieldName]?.message?.toString()

  return {
    form,
    getFieldErrorMessage,
    handleSubmit,
    isPending, // This property is used to check if the API request is pending
  }
}
