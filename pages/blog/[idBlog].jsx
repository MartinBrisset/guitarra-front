import Layout from "@/components/layout"
import styles from "@/styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers"
import Image from "next/image"
const Post = ({post}) => {
    const { titulo, contenido, imagen, url, publishedAt } = post.attributes
  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image alt={`Imagen ${titulo}`} src={imagen?.data?.attributes?.url} width={1000} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
                
            </div>
        </article>
    </Layout>
  )
}

export default Post

export async function getServerSideProps({params: {idBlog}}) {
  const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${idBlog}&populate=imagen`)
  const {data} = await res.json()
  const post = data[0]
  return {
    props: {
      post
    }
  }

}