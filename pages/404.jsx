import Layout from "@/components/layout"
import Link from "next/link"
const Pagina404 = () => {
  return (
    <Layout
        title="404"
    >

        <p className="error">Pagina no encontrada</p>
        <Link href="/" className="error-enlace"> Ir a la pagna principal </Link>
    </Layout>
  )
}

export default Pagina404