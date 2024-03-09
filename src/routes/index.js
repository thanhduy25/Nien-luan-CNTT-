import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/HomePage/OrderPage/OrderPage";
import NotfoundPage from "../pages/NotfoundPage/NotfoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";

export const routes = [
    {
    path: '/',
    page: HomePage,
    isShowHeader : true
    },
    {
    path: '/order',
    page: OrderPage,
    isShowHeader : true
    },
    {
    path: '/product',
    page:ProductPage,
    isShowHeader : true
    },
    {
    path: '*',
    page:NotfoundPage
    }
        

]