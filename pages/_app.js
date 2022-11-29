import '../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    //Jandi Teset
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
