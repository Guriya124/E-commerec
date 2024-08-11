import { PencilIcon, Trash2 } from 'lucide-react'

import { Link } from 'react-router-dom'
import { buttonVariants } from '../ui/button'

export default function CustomerTable() {
    const customers = [
        {
            id: 1,
            image: "https://via.placeholder.com/50",
            name: "John Doe",
            phone: "1234567890",
            email: "jhone@mail.com",
            address: "Kathmandu, Nepal"
        },
        {
            id: 2,
            image: "https://via.placeholder.com/50",
            name: "Jane Doe",
            phone: "1234567890",
            email: "jane@mail.com",
            address: "Kathmandu, Nepal"
        },
    ]



    return (
        <section>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-lg">
                <thead className="text-xs leading-none bg-gray-800 text-slate-200">
                    <tr>
                        <th className="px-4 py-3">Customer Name</th>
                        <th className="px-4 py-3">Phone</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Address</th>

                        <th className="text-end px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr
                            key={customer.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 leading-none"
                        >
                            <td className="px-4 py-3 flex items-center gap-3">
                                <img src={customer.image} alt={customer.name} className="w-8 h-8 object-cover rounded" />
                                {customer.name}
                            </td>
                            <td className="px-4 py-3">{customer.phone}</td>
                            <td className="px-4 py-3">{customer.email}</td>
                            <td className="px-4 py-3">
                                {customer.address}
                            </td>

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
