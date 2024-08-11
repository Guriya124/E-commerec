import { PlusSquare, Search } from "lucide-react";
import ProductTable from "../components/product/ProductTable";
import {  buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="p-2 border-b">
          <h2 className=" font-bold text-gray-800 dark:text-white">Product List</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage your products here</p>
        </div>
        <div className="flex items-center justify-between gap-4 p-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Product"
              className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="mx-2">
            <Link to="/products" className={buttonVariants("primary", "small")}>
              <PlusSquare className="w-4 h-4 me-2" />
              Add Product
            </Link>
        </div>
        </div>
      </div>
      <ProductTable />
    </section>
  );
}
