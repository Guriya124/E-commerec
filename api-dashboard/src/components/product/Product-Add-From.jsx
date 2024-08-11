import { useState } from "react";

export const AddProductForm = () => {
    const [data, setData] = useState({
        productName: "",
        regularPrice: "",
        salePrice: "",
        stock: "",
        tag: "",
        category: "",
        size: "",
        color: "",
        images: [],
        description: "",
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;

        if (id === "images") {
            setData({ ...data, [id]: Array.from(files) });
        } else {
            setData({ ...data, [id]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div className="p-2">
            <form className="grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    <label htmlFor="productName" className="block text-sm font-bold">Product Name</label>
                    <input
                        id="productName"
                        type="text"
                        placeholder="Enter product name"
                        onChange={handleChange}
                        value={data.productName}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="regularPrice" className="block text-sm font-bold">Regular Price</label>
                    <input
                        id="regularPrice"
                        type="number"
                        placeholder="Enter regular price"
                        onChange={handleChange}
                        value={data.regularPrice}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="salePrice" className="block text-sm font-bold">Sale Price</label>
                    <input
                        id="salePrice"
                        type="number"
                        placeholder="Enter sale price"
                        onChange={handleChange}
                        value={data.salePrice}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="stock" className="block text-sm font-bold">Stock</label>
                    <input
                        id="stock"
                        type="number"
                        placeholder="Enter stock quantity"
                        onChange={handleChange}
                        value={data.stock}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="tag" className="block text-sm font-bold">Tag</label>
                    <input
                        id="tag"
                        type="text"
                        placeholder="Enter product tag"
                        onChange={handleChange}
                        value={data.tag}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="category" className="block text-sm font-bold">Category</label>
                    <select
                        id="category"
                        onChange={handleChange}
                        value={data.category}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select category</option>
                        <option value="women">Women</option>
                        <option value="children">Children</option>
                        <option value="men">Men</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="size" className="block text-sm font-bold">Size</label>
                    <select
                        id="size"
                        onChange={handleChange}
                        value={data.size}
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
                    <label htmlFor="color" className="block text-sm font-bold">Color</label>
                    <select
                        id="color"
                        onChange={handleChange}
                        value={data.color}
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
                <div className="col-span-1 lg:col-span-2 xl:col-span-1 grid gap-2">
                    <label htmlFor="images" className="block text-sm font-bold">Product Images</label>
                    <input
                        id="images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="col-span-1 lg:col-span-3 xl:col-span-4 grid gap-2">
                    <label htmlFor="description" className="block text-sm font-bold">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter product description"
                        onChange={handleChange}
                        value={data.description}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="col-span-1 lg:col-span-3 xl:col-span-4 flex justify-end mx-2">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};
