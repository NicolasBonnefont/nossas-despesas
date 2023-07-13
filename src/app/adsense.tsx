import Head from "next/head"
import Script from "next/script"

function AdSense() {

  return (
    <Head>
      <Script
        async
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1391481324251546"
        crossOrigin="anonymous" />
    </Head>
    )

}

export default AdSense