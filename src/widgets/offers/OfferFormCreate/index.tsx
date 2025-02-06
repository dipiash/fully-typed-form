import { Button, Stack, TextInput } from '@mantine/core'

import { AdvertiserSelect } from '../../../features/AdvertiserSelect'
import { ModelSelect } from '../../../features/ModelSelect'
import { OFFER_CREATE_FORM_FIELDS, OFFER_CREATE_FORM_FIELDS_LABEL, OFFER_CREATE_FORM_FIELDS_PLACEHOLDER } from './base/constants.ts'
import { useOfferFormCreate } from './base/hooks/useOfferFormCreate.ts'

// This component is used to create a form for creating a new offer
export const OfferFormCreate = () => {
  // This hook is used to get form instance and other helpers
  const { form, getFieldErrorMessage, handleSubmit, isPending } = useOfferFormCreate()

  return (
    <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack>
        {/* Offer name */}
        <TextInput
          label={OFFER_CREATE_FORM_FIELDS_LABEL.name}
          error={getFieldErrorMessage(OFFER_CREATE_FORM_FIELDS.name)}
          placeholder={OFFER_CREATE_FORM_FIELDS_PLACEHOLDER.name}
          required
          {...form.register(OFFER_CREATE_FORM_FIELDS.name)}
        />

        {/* Offer short name */}
        <TextInput
          label={OFFER_CREATE_FORM_FIELDS_LABEL.short_name}
          error={getFieldErrorMessage(OFFER_CREATE_FORM_FIELDS.short_name)}
          placeholder={OFFER_CREATE_FORM_FIELDS_PLACEHOLDER.short_name}
          required
          {...form.register(OFFER_CREATE_FORM_FIELDS.short_name)}
        />

        {/* Offer advertiser */}
        <AdvertiserSelect
          label={OFFER_CREATE_FORM_FIELDS_LABEL.advertiser_id}
          name={OFFER_CREATE_FORM_FIELDS.advertiser_id}
          error={getFieldErrorMessage(OFFER_CREATE_FORM_FIELDS.advertiser_id)}
          form={form}
          placeholder={OFFER_CREATE_FORM_FIELDS_PLACEHOLDER.advertiser_id}
        />

        {/* Offer model */}
        <ModelSelect
          label={OFFER_CREATE_FORM_FIELDS_LABEL.model}
          name={OFFER_CREATE_FORM_FIELDS.model}
          error={getFieldErrorMessage(OFFER_CREATE_FORM_FIELDS.model)}
          form={form}
          placeholder={OFFER_CREATE_FORM_FIELDS_PLACEHOLDER.model}
        />

        {/* Submit button with loading state */}
        <Button loading={isPending} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
