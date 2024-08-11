import CustomerTable from "../components/customer/CustomerTable";


export default function Customer() {
  return (
      <div className="flex flex-col">
          <div className="p-2 border-b">
              <h2 className="text- font-bold text-gray-800 dark:text-white">Customer List</h2>
          </div>

         <CustomerTable/>

      </div>
  )
}
