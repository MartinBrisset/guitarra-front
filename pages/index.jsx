import Guitarra from "@/components/guitarra";
import Layout from "../components/layout";
import styles from '../styles/grid.module.css'
import Post from "../components/post";
import Curso from "@/components/curso";

export default function Home({guitarras, posts, curso}) {

    return (
        <>
            <Layout
                title='Inicio'
                desciption='Esta es la página de inicio'
            >
                <main className="contenedor">
                    <h1 className="heading">Nuestra Colección</h1>
                    <div className={styles.grid}>
                        {guitarras?.map(guitarra => (
                            <Guitarra
                                key={guitarra.id}
                                guitarra={guitarra.attributes}
                            />
                        ))}
                    </div>
                </main>

                <Curso curso={curso} />

                <section className="contenedor">
                    <h2 className="heading">Blog</h2>
                    <div className={styles.grid}>
                        {posts?.map(post => (
                            <Post
                                key={post.id}
                                post={post.attributes}
                            />
                        ))}
                    </div>
                </section>
            </Layout>
        </>
        
    )
}

export async function getStaticProps() {
    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
    const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
    const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

    const [resGuitarras, resPosts, resCurso] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlPosts),
        fetch(urlCurso)
    ])

    const [guitarrasData, postsData, cursoData] = await Promise.all([
        resGuitarras.json(),
        resPosts.json(),
        resCurso.json()
    ])

    let posts = postsData.data
    let guitarras = guitarrasData.data
    let curso = cursoData.data

    return {
        props: {
            guitarras,
            posts,
            curso
        }
    }
}