import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('http://localhost:5000/products')
    const { products } = await productsData.json();


    const savedCart = getStoredCart()
    const InitialCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id)
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            InitialCart.push(addedProduct)
        }
    }

    return { products, InitialCart }
}