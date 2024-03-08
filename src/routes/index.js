import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/HomePage/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";

export const routes = [
    {
    path: '/',
    page:HomePage
    },
    {
    path: '/order',
    page: OrderPage
    },
    {
    path: '/product',
    page:ProductPage
    },
    

]