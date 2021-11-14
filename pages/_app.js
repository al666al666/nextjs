
import '../styles/global.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
       <meta charSet="UTF-8" />
        <meta name="keywords" description="nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
        <title>Fashion Page</title>
      </Head>
     
      <Component {...pageProps} />
   
    </>
  )
}

export default MyApp
