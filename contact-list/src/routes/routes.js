import React from "react";
import { createBrowserRouter} from 'react-router-dom';
import Contact from '../views/Contact';
import Layout from "../layout/Layout";

const innerRoutes = [
    {
        path: '/',
        element: <Contact />
    }
]

const fullRoutes = [
    {
        path: '/',
        element: <Layout />,
        children: innerRoutes
    }
]

const router = createBrowserRouter(fullRoutes);

export default router;