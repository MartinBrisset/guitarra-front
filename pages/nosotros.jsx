import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'
const Nosotros = () => {
  return (
  <>
  <Layout
    title="Nosotros"
    description="Nosotros"
  >
    <main className='contenedor'>
      <h2 className='heading'>Nosotros</h2>

      <div className={styles.contenido}>
        <Image alt='Imagen sobre Nosotros' src='/img/nosotros.jpg' width={1000} height={800} />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in massa pellentesque, pharetra lectus a, rutrum tortor. Suspendisse sed vulputate metus, vitae finibus quam. Fusce malesuada tincidunt orci sit amet volutpat. Phasellus eget laoreet odio. Sed pellentesque sem vel nisi placerat.</p>
          <p>Nam tempus scelerisque dui, sit amet efficitur quam convallis ut. Nullam varius augue id leo rhoncus, eget volutpat quam suscipit. In commodo felis pretium ligula laoreet pretium a eget neque. Vestibulum a arcu molestie sem gravida posuere vitae eget mi. Vivamus placerat nec nisi consequat luctus. Integer erat lectus, semper vel arcu non, pulvinar maximus lacus. In facilisis tortor ac nulla faucibus.</p>
        </div>
      </div>
    </main>

  </Layout>
  </>
  )
}

export default Nosotros
