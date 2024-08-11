import { AddProductForm } from '../components/product/Product-Add-From';

function product() {
    return (
        <section>
            <div className="p-2">
                <h1 className="font-bold text-gray-800">Add New Product</h1>
                <p className="text-gray-600">Fill out the form to add a new product to your clothing store.</p>
            </div>
            <AddProductForm />

        </section>
    )
}

export default product
