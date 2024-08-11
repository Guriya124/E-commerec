import { Link } from 'react-router-dom';
import { PencilIcon, Trash2 } from "lucide-react";
import { buttonVariants } from '../ui/button';

export default function ProductTable() {

    const getStockColorClass = (stockStatus) => {
        switch (stockStatus) {
            case "In Stock":
                return "text-green-500";
            case "Out of Stock":
                return "text-red-500";
            case "Limited Stock":
                return "text-yellow-500";
            default:
                return "text-gray-500";
        }
    };

    const products = [
        { name: "bmnbkj", id: "12345", price: "$99.99", category: "Women", quantity: 50, stock: "In Stock", image: "https://via.placeholder.com/50" },
        { name: "xyz", id: "67890", price: "$59.99", category: "Women", quantity: 0, stock: "Out of Stock", image: "https://via.placeholder.com/50" },
        { name: "abc", id: "11223", price: "$29.99", category: "Women", quantity: 10, stock: "Limited Stock", image: "https://via.placeholder.com/50" },
    ];

    return (
        <section className="">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-lg">
                <thead className="text-xs leading-none bg-gray-800 text-slate-200">
                    <tr>
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3">Product Id</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Quantity</th>
                        <th className="px-4 py-3">Stock</th>
                        <th className="text-end px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr
                            key={product.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 leading-none"
                        >
                            <td className="px-4 py-3 flex items-center gap-3">
                                <img src={product.image} alt={product.name} className="w-8 h-8 object-cover rounded" />
                                {product.name}
                            </td>
                            <td className="px-4 py-3">{product.id}</td>
                            <td className="px-4 py-3">{product.price}</td>
                            <td className="px-4 py-3">{product.category}</td>
                            <td className="px-4 py-3">{product.quantity}</td>
                            <td className={`px-4 py-3 ${getStockColorClass(product.stock)}`}>{product.stock}</td>
                            <td className="text-end px-4 py-3">
                                <span className="flex items-center justify-end gap-3">
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                    <Link to={`/product/${product.id}`} className={buttonVariants("ghost", "small")}>
                                        <PencilIcon className="w-4 h-4 text-blue-500" />
                                    </Link>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
