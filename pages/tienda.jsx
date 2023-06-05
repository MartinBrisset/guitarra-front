
import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

const Tienda = (guitarras) => {

  return (
    <>
        <Layout
            title="Guitarra Tienda Online"
            description="Tienda online de guitarras, instrumentos y accesorios."
        >
          <main className='contenedor'>
            <h2 className='heading'>Tienda</h2>
            <div className={styles.grid}>
              {guitarras?.guitarras?.map(guitarra => (
                <Guitarra
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                />
              ))}
            </div>
          </main>
        </Layout>
    </>
  )
}

export default Tienda


export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data} = await res.json()
  return {
    props: {
      guitarras: data
    }
  }
}