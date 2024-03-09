import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/HomePage/OrderPage/OrderPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotfoundPage from "../pages/NotfoundPage/NotfoundPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
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
    path: '/product-detail',
    page: ProductDetailPage,
    isShowHeader: true
    },
    {
    path: '/login',
    page: LoginPage,
    },
    {
    path: '*',
    page:NotfoundPage
    }
        

]