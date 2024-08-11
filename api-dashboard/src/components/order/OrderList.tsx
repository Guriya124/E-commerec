import { PencilIcon, Trash2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../ui/button'
import { Badge } from '../ui/Pills'

export default function OrderList() {
    const orders = [
        { name: "Apple Watch", id: "ORD-001", price: "$299", category: "Electronics", quantity: 1, Payment: "Paid", Status: "Delivered", image: "https://via.placeholder.com/50" },
        { name: "iPhone 12", id: "ORD-002", price: "$999", category: "Electronics", quantity: 1, Payment: "Paid", Status: "Delivered", image: "https://via.placeholder.com/50" },
        { name: "MacBook Pro", id: "ORD-003", price: "$1999", category: "Electronics", quantity: 1, Payment: "Paid", Status: "Delivered", image: "https://via.placeholder.com/50" },
    ]



    return (
        <section>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-lg">
                <thead className="text-xs leading-none bg-gray-800 text-slate-200">
                    <tr>
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3">Order ID</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Quantity</th>
                        <th className="px-4 py-3">Payment</th>
                        <th className="px-4 py-3">Status</th>

                        <th className="text-end px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr
                            key={order.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 leading-none"
                        >
                            <td className="px-4 py-3 flex items-center gap-3">
                                <img src={order.image} alt={order.name} className="w-8 h-8 object-cover rounded" />
                                {order.name}
                            </td>
                            <td className="px-4 py-3">{order.id}</td>
                            <td className="px-4 py-3">{order.price}</td>
                            <td className="px-4 py-3">{order.category}</td>
                            <td className="px-4 py-3">{order.quantity}</td>
                            <td className="px-4 py-3">{order.Payment}</td>
                            <td className="px-4 py-3">
                                <Badge variant="outline">
                                    {order.Status}
                                </Badge></td>

                            <td className="text-end px-4 py-3">
                                <span className="flex items-center justify-end gap-3">
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                    <Link to={`#`} className={buttonVariants("ghost", "small")}>
                                        <PencilIcon className="w-4 h-4 text-blue-500" />
                                    </Link>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </section>
    )
}
