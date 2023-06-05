import Link from 'next/link'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">
            Inicio
          </Link>

          <Link href="/nosotros">
            Nosotros
          </Link>

          <Link href="/blog">
            Blog
          </Link>

          <Link href="/tienda">
            Tienda
          </Link>
        </nav>

        <p className={styles.copy}>© 2023-{new Date().getFullYear()} GuitarLA | Creado por  <a href="https://www.martinbrisset.com" target="_blank" title="marinbrisset.com">M.B.B.</a> </p>

      </div>
    </footer>
  )
}

export default Footer