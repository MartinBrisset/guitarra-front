
import Layout from '../components/layout'
import Post from '../components/post'
import styles from '../styles/grid.module.css'


const Blog = ({post}) => {
  console.log(post)
  return (
    <>
        <Layout
            title="Guitarra Blog"
            description="Blog de musica, guitarras, instrumentos y accesorios."
        >
            <main className='contenedor'>
              <h1 className='heading'>Blog</h1>
              <div className={styles.grid}>
                {post?.map(post => (
                  <Post 
                    key={post.id}
                    post={post.attributes}
                  />
                ))}
              </div>
            </main>
        </Layout>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data} = await res.json()
  const post = data
  return {
    props: {
      post
    }
  }

} 