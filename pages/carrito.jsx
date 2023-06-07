import Layout from "@/components/layout"
import styles from "@/styles/carrito.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"

const carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, articulo) => total + (articulo.precio * articulo.cantidad), 0)
        setTotal(calculoTotal)  
    
    }, [carrito])
    

  return (
    <Layout
        title="Carrito"
        description="Carrito de compras."
    >

        <main className="contenedor">
            <h1 className="heading">Carrito</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>

                    {carrito.length === 0 ? 'El carrito esta vacio' : (
                        carrito.map(articulo => (
                            <div key={articulo.id} className={styles.producto}>
                                <div>
                                    <Image alt={`Imagen ${articulo.nombre}`} src={articulo.imagen} width={150} height={100} />
                                </div>
                                <div className={styles.cantidad}>
                                    <p>Cantidad:</p>
                                    <select
                                        className={styles.select}
                                        onChange={e => actualizarCantidad(articulo.id, Number(e.target.value))}
                                        value={articulo.cantidad}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div>
                                    <p className={styles.nombre}>{articulo.nombre}</p>
                                    <p className={styles.precio}>Precio: <span>$ {articulo.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: <span>$ {articulo.cantidad * articulo.precio}</span></p>
                                </div>
                                <button
                                    className={styles.eliminar}
                                    type="button"
                                    onClick={() => eliminarProducto(articulo.id) }
                                >
                                    X
                                </button>
                            </div>
                        )
                    ))}
                </div>
                <aside className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: $ {total}</p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}

export default carrito