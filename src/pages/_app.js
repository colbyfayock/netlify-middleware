import '../styles/globals.scss'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return  <Component {...pageProps} />
}