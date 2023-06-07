import Layout from "../../components/layout"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import { useState } from "react"

const Guitarra = ({guitarra, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(0)

    const { nombre, descripcion, imagen, precio } = guitarra.attributes

    const handleSubmit = e => {
        e.preventDefault()
        if (cantidad === 0) {
            return
        }
        const guitarraSel = {
            id: guitarra.id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSel)
    }

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

                <form 
                    className={styles.formulario}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select 
                        id="cantidad"
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    >
                        <option value="0">Seleccione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input 
                        type="submit" 
                        value="Agregar al carrito"
                    />
                </form>
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