import '@/styles/globals.css'
import withApollo from '@/lib/apollo'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withApollo(App);