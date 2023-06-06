import Layout from "../../components/layout"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'

const Guitarra = ({guitarra}) => {

    const { nombre, descripcion, imagen, precio } = guitarra.attributes

  return (
    <Layout
        title={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image alt={`Imagen Guitarra ${nombre}`} src={imagen?.data?.attributes?.url} width={600} height={400} />  
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
            </div>
        </div>
    </Layout>
  )
}

export default Guitarra

export async function getStaticPaths() {

    const res = await fetch(`${process.env.API_URL}/guitarras`)
    const data = await res.json()
    const paths = data.data.map(guitarra => ({
        params: { idGuitarra: guitarra.attributes.url }
    }))

    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps({ params: { idGuitarra } }) {

    const res = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${idGuitarra}&populate=imagen`)
    const {data} = await res.json()
    const guitarra = data[0]

    return {
        props: {
            guitarra
        }
    }
} 