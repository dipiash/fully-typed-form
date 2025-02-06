import { OfferPostBody } from '../types/api/offers.types.generated.ts'

export const apiOfferPost = async (values: OfferPostBody) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.info(values)
}
