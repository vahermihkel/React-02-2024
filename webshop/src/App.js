import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/global/HomePage';
import {ContactUs} from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';
import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Supplier from './pages/admin/Supplier';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path='' element={ <HomePage /> } />
        <Route path='contact' element={ <ContactUs /> } />
        <Route path='shops' element={ <Shops /> } />
        <Route path='cart' element={ <Cart /> } />
        <Route path='product/:productId' element={ <SingleProduct /> } />
        
        <Route path='admin' element={ <AdminHome /> } />
        <Route path='admin/add-product' element={ <AddProduct /> } />
        <Route path='admin/edit-product/:productId' element={ <EditProduct /> } />
        <Route path='admin/maintain-products' element={ <MaintainProducts /> } />
        <Route path='admin/maintain-categories' element={ <MaintainCategories /> } />
        <Route path='admin/maintain-shops' element={ <MaintainShops /> } />
        <Route path='admin/supplier' element={ <Supplier /> } />

        <Route path='login' element={ <Login /> } />
        <Route path='signup' element={ <Signup /> } />

        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// Koju: muuta index.html sees rakenduse nime ja pisipilti
// Koju: Loo siia projekti ka 3s ja 4s keel (võid tõlkida chatGPT abiga)
// Koju: changeLangEe ja teise 3 asemel tehke üks funktsioon, mida taaskasutatakse
//          changeLang   -> onClick={() => changeLang("ee")}
// Saab võtta põhja kuidas tegime eesti keelsel veebipoel 
//        Tooted.js sees esitähe järgi filtreerimist

// NotFound.jsx lehe korrektseks tegemine

// MaintainProducts.jsx vaade tabeli kujul, 
//    kuvades välja kõik toote omadused (rating võib olla huvitav)
//    Täpselt samamoodi nagu eesti keelses
// Kustutada failist

// Cart.jsx
// On võimalik lisada ostukorvi HomePage.jsx lehelt
// Ostukorvis kuvatakse kõik tooted välja
// Saab kustutada, saab tühjendada, saab lõppu juurde panna
// Kokkuarvutus, mitu tk on

// -----------------------

// AddProduct.jsx
// Võimalda toodet lisada

// SingleProduct.jsx tegemine
//    HomePage.jsx sisse tehke nupp "Vt lähemalt", 
//          millega läheb SingleProduct.jsx vaatesse
// SingleProduct.jsx lehel kuvage välja kõik toote omadused


// 20.03 - 9.00-10.15 --> 1h15min, puudu jäi 1h45min 
// 22.03 - 9.00-12.15 --> KOJU: failid lõpetada, EditProduct, checkIdUniqueness editis
// 27.03 - 9.00-12.15 --> Vaatame üle Bakery-Shopi. KOJU: proovitöö Nortal Winter University
// 29.03 - 9.00-12.15 --> Shipments proovitöö.