import OrderList from "../components/order/OrderList";


export default function Orders() {
  return (
      <div className="flex flex-col">
          <div className="p-2 border-b">
              <h2 className="text- font-bold text-gray-800 dark:text-white">Orders List</h2>
          </div>

          <OrderList/>
         
      </div>
  )
}
