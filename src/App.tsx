import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createTheme, MantineProvider } from '@mantine/core'

import { OfferFormCreate } from './widgets/offers/OfferFormCreate'

const theme = createTheme({})

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      <OfferFormCreate />
    </MantineProvider>
  </QueryClientProvider>
)

export default App
