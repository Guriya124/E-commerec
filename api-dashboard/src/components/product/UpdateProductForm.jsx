export const UpadateroductForm = () => {
    return (
        <>
            <div className="p-2">
                <form className="grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="grid gap-2">
                        <label htmlFor="name" className="block text-sm font-bold ">Product Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="regular-price" className="block text-sm font-bold">Regular Price</label>
                        <input
                            id="regular-price"
                            type="number"
                            placeholder="Enter regular price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="sale-price" className="block text-sm font-bold">Sale Price</label>
                        <input
                            id="sale-price"
                            type="number"
                            placeholder="Enter sale price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="stock" className="block text-sm font-bold ">Stock</label>
                        <input
                            id="stock"
                            type="number"
                            placeholder="Enter stock quantity"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="regular-price" className="block text-sm font-bold">Tag</label>
                        <input
                            id="tag"
                            type="text"
                            placeholder="Enter regular price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="category" className="block text-sm font-bold">Category</label>
                        <select
                            id="category"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Select category</option>
                            <option value="category1">Women</option>
                            <option value="category2">Child</option>
                            <option value="category2">Mens</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="size" className="block text-sm font-bold ">Size</label>
                        <select
                            id="size"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Select size</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="color" className="block text-sm font-bold ">Color</label>
                        <select
                            id="color"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Select color</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                        </select>
                    </div>
                    <div className="col-span- lg:col-span-3 xl:col-span-4 grid gap-2">
                        <label htmlFor="description" className="block text-sm font-bold">Description</label>
                        <textarea
                            id="description"
                            placeholder="Enter product description"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>
                    <div className="col-span-2 lg:col-span-3 xl:col-span-4 grid gap-2">
                        <label htmlFor="image" className="block text-sm font-bold ">Product Image</label>
                        <input
                            id="image"
                            type="file"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="col-span-2 lg:col-span-3 xl:col-span-4 flex justify-end mx-2">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
