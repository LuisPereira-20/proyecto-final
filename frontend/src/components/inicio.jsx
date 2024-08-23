function Home() {
    return (
        <div className="container bg-gray-200">
            <div className="grid grid-cols-12 gap-4 py-8">
                <div className="col-span-9">
                    <img src="./assets/images/home.jpeg" alt="" className="w-full h-96 p-4 object-cover rounded-lg shadow-lg max-md:hidden" />
                </div>
            <div className="col-span-3">
                <div className="grid grid-cols-1 gap-4 p-4">
                    <img src="./assets/images/milax.jpeg" alt="" className="w-full h-44 object-cover rounded-lg" />
                    <img src="./assets/images/analp.jpeg" alt="" className="w-full h-44 object-cover rounded-lg" />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Home