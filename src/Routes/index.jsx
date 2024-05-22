import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import UserRoot from "../Pages/UserRoot";

export const ROUTES = [
    {
        path: '/',
        element: <UserRoot />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]