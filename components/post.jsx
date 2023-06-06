import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers"
const post = ({post}) => {

    const { titulo, contenido, imagen, url, publishedAt } = post

  return (
    <article>
        <Image alt={`Imagen ${titulo}`} src={imagen?.data?.attributes?.formats?.medium?.url} width={600} height={400} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link href={`/blog/${url}`} className={styles.enlace}> 
                Leer Post
            </Link>
        </div>
    </article>
  )
}

export default post