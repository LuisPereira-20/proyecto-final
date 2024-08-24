import Product from "../components/button"
function Products () {
    return(
        <>
        <h1>Productos</h1>
        <div className="grid grid-cols-4 gap-8">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        </>
    )
}
export default Products