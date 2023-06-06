export const formatearFecha = fecha => {
    const fechaNew = new Date(fecha)
    const opciones = { 
        year: 'numeric', 
        month: 'long', 
        day: '2-digit' 
    }
    return fechaNew.toLocaleDateString('es-ES', opciones)
}