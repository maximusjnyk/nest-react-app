import '../app/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from "../app/providers/AuthProvider";
import '../app/assets/styles/old-styles.sass'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
