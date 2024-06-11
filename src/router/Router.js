import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Contract from "../pages/Contract/Contract";
import Services from "../pages/Services/Services";
import AddService from "../pages/AddService/AddService";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";
import MyComments from "../pages/MyComments/MyComments";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/contract", element: <Contract></Contract>

            },
            {
                path: "/services", element: <Services></Services>,
                loader: async () => fetch("https://lexis-art-server.onrender.com/services")
            },
            {
                path: "/service/:id", element: <Service></Service>,
                loader: async ({ params }) => fetch(`https://lexis-art-server.onrender.com/service/${params.id}`)
            },
            {
                path: "/addservice", element: <AddService></AddService>
            },
            {
                path: "/myreview", element: <PrivateRouter><MyComments></MyComments></PrivateRouter>
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <Signup></Signup>
            },
            {
                path: "/about", element: <About></About>
            },
            {
                path: "*", element: <NotFound></NotFound>
            },
        ]
    }
])