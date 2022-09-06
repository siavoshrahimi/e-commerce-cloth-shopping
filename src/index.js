import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import CartProvider from "./contexts/provider/cart/cart";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <CartProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </CartProvider>
    </QueryClientProvider>
);


