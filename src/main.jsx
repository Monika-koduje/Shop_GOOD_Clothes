import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Item } from './pages/AddItemToBasketShop.jsx';
import { Basket } from './pages/BasketShop.jsx'
import { Saved } from './pages/FavoriteItems.jsx'
import { User } from './pages/User.jsx'
import { NewUser } from './pages/NewUser.jsx'
import { SignInUser } from './pages/SignInUser.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Sale } from './pages/Sale.jsx'
import { Woman } from './pages/ForWoman.jsx'
import { Man } from './pages/ForMan.jsx'
import { Kids } from './pages/ForKids.jsx'
import { Layout } from './layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPassword } from './pages/ForgotPassword.jsx';




ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="/item/:id" element={<Item />} /> 
                </Route>
                <Route path='/item' element={<Layout />}>
                    <Route index element={<Item />} />
                </Route>
                <Route path='/basket' element={<Layout />}>
                    <Route index element={<Basket />} />
                </Route>
                <Route path='/saved' element={<Layout />}>
                    <Route index element={<Saved />} />
                </Route>
                <Route path='/user' element={<Layout />}>
                    <Route index element={<User />} />
                </Route>
                <Route path='/new_user' element={<Layout />}>
                    <Route index element={<NewUser />} />
                </Route>
                <Route path='/sign_in_user' element={<Layout />}>
                    <Route index element={<SignInUser />} />
                </Route>
                <Route path='/forgot_password' element={<Layout />}>
                    <Route index element={<ForgotPassword />} />
                </Route>
                <Route path='/about_us' element={<Layout />}>
                    <Route index element={<AboutUs />} />
                </Route>
                <Route path='/sale' element={<Layout />}>
                    <Route index element={<Sale />} />
                </Route>
                <Route path='/woman' element={<Layout />}>
                    <Route index element={<Woman />} />
                </Route>
                <Route path='/man' element={<Layout />}>
                    <Route index element={<Man />} />
                </Route>
                <Route path='/kids' element={<Layout />}>
                    <Route index element={<Kids />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
