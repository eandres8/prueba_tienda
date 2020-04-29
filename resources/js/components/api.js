
// =======================================================
/// Consulta las categorias disponibles
// =======================================================
export const getCategories = async () => {
    const data = await fetch(`/api/category`);
    if (data.status === 200) {
        return {
            success: true,
            message: 'OK',
            data: await data.json()
        }
    } else
        return {
            success: false,
            message: 'No se ha podido obtener las categorias'
        }
}

// =======================================================
/// Consulta los productos filtrando por categorias
// =======================================================
export const getProductByCategory = async (category = 0) => {
    const data = await fetch(`/api/product${category > 0 ? `?category=${category}`: ''}`)
    if (data.status === 200) {
        return {
            success: true,
            message: 'OK',
            data: await data.json()
        }
    } else
        return {
            success: false,
            message: 'No se ha podido obtener las categorias'
        }
}
