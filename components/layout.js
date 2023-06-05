import Head from 'next/head'
import Header from './header'
import Footer from './footer'
const Layout = ({children, title = '', desciption = ''}) => {
  return (
    <>
      <Head>
        <title>{`Guitaras - ${title}`}</title>
        <meta name="description" content={desciption} />
      </Head>
      
      <Header/>
      
      {children}

      <Footer/>
    </>
  )
}

export default Layout