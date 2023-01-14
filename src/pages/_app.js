import Layout from 'components/Layout'
import '../styles/globals.css'

//nested component in layout compoonent.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
