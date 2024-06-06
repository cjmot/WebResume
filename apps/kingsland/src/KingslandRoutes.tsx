import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import CreateAccount from './routes/CreateAccount';
import About from './routes/About';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import Shop from './routes/Shop';
import Profile from './routes/Profile';

export default function KingslandRoutes() {

    return (
        <>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route path='/login' element={<Login />}/>
                <Route path='/create_account' element={<CreateAccount />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/shop' element={<Shop />}/>
                <Route path='/profile' element={<Profile />}/>
            </Routes>
        </>
    )
}