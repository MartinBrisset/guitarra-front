import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/header.module.css'
import logo from '../public/img/logo.svg'

const Header = () => {

  const router = useRouter()

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
          <Link href="/">
            <Image src={logo} alt="Logotipo" width={300} height={40} />
          </Link>

            <nav className={styles.navegacion}>
                <Link href="/" className={ router.pathname === '/' ? styles.active : ''}>
                  Inicio
                </Link>

                <Link href="/nosotros" className={ router.pathname === '/nosotros' ? styles.active : ''}>
                  Nosotros
                </Link>

                <Link href="/blog" className={ router.pathname === '/blog' ? styles.active : ''}>
                  Blog
                </Link>

                <Link href="/tienda" className={ router.pathname === '/tienda' ? styles.active : ''}>
                  Tienda
                </Link>

                <Link href="/carrito" className={ router.pathname === '/carrito' ? styles.active : ''}>
                  <Image src="/img/carrito.png" alt="Carrito" width={20} height={20} />
                </Link>
            </nav>

        </div>
    </header>
  )
}

export default Header