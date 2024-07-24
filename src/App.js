import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Fineart from './pages/Fineart';
import Furnitures from './pages/Furnitures';
import ContactUs from './pages/contactus';
import Aboutus from './pages/aboutus';
import Footer from './component/footer';
import DetailsA from './Antiques/details1';
import DetailsB from './Antiques/details2';
import DetailsC from './Antiques/details3';
import DetailsD from './Antiques/details4';
import DetailsE from './Antiques/details5';
import DetailsF from './Antiques/details6';
import DetailsG from './Antiques/details7';
import DetailsH from './Antiques/details8';
import DetailsI from './Antiques/details9';
import DetailsJ from './Antiques/details10';
import DetailsK from './Antiques/details11';
import DetailsL from './Antiques/details12';
import DetailsM from './Antiques/details13';
import FineA from './Fineart/fine1';
import FineB from './Fineart/fine2';
import FineC from './Fineart/fine3';
import FineD from './Fineart/fine4';
import FineE from './Fineart/fine5';
import FineF from './Fineart/fine6';
import FineG from './Fineart/fine7';
import FineH from './Fineart/fine8';
import FineI from './Fineart/fine9';
import FurA from './Furniture/Fur1';
import FurB from './Furniture/Fur2';
import FurC from './Furniture/Fur3';
import FurD from './Furniture/Fur4';
import FurE from './Furniture/Fur5';
import FurF from './Furniture/Fur6';
import FurG from './Furniture/Fur7';
import FurH from './Furniture/Fur8';
import FurI from './Furniture/Fur9';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './Blog/Blog';
import BlogHome from './pages/BlogHome';
import BlogRome from './Blog/BlogRome';
import BlogGogh from './Blog/BlogGogh';
import ArticlesHome from './pages/ArticlesHome';
import ArticleArt from './Articles/ArticleArt';
import ArticleRich from './Articles/ArticleRich';
import ArticleCartier from './Articles/ArticleCartier';
import FurK from './Furniture/Fur10';
import FurL from './Furniture/Fur11';
import FurM from './Furniture/Fur12';
import FineK from './Fineart/fine10';
import FineL from './Fineart/fine11';
import Antiques from './pages/Antiques';
import { render } from '@testing-library/react';
import { FaBars } from 'react-icons/fa';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <nav>
        {/* <img src="/images/logo.jpg" alt='logo' className="logo" /> */}
        <a href="index.html">
          <svg id="logo-37" width="42" height="38"
            viewBox="0 0 42 38" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5.74661 28.7259C7.28678
             29.8002 9.78389 29.8002 11.3241
              28.7259C12.8642 27.6516 12.8642 
              25.9098 11.3241 24.8355C9.78389
               23.7612 7.28678 23.7612 5.
                24.8355C4.20644 25.9098 4.20644 
                27.6516 5.74661 28.7259Z"
              class="ccustom" fill="#25CAAC">
            </path> <path d="M21.7322 14.1371C24.0425
                   15.7485 27.7881 15.7485 30.0984 
                   14.1371C32.4086 12.5256 32.4086 
                   9.91298 30.0984 8.30155C27.7881 
                   6.69011 24.0425 6.69011 21.7322 
                   8.30155C19.422 9.91298 19.422 
                   12.5256 21.7322 14.1371Z" class="ccustom"
              fill="#25CAAC"></path>
            <path d="M13.2464 21.4315C15.1716 
                     22.7743 18.293 22.7743 20.2182 
                     21.4315C22.1434 20.0886 22.1434
                      17.9114 20.2182 16.5685C18.293 
                      15.2257 15.1716 15.2257 13.2464 
                      16.5685C11.3212 17.9114 11.3212 
                      20.0886 13.2464 21.4315Z" class="ccustom"
              fill="#25CAAC"></path>
            <path d="M0.866345 20.4589C2.02147 
                      21.2646 3.8943 21.2646 5.04943 
                      20.4589C6.20455 19.6532 6.20455 
                      18.3469 5.04943 17.5411C3.8943 
                      16.7354 2.02147 16.7354 0.866345 
                      17.5411C-0.288782 18.3469 -0.288781 
                      19.6532 0.866345 20.4589Z" class="ccustom"
              fill="#25CAAC"></path>
            <path d="M13.2464 5.87008C15.1716 7.21294
                       18.293 7.21294 20.2182 5.87008C22.1434 
                       4.52722 22.1434 2.35001 20.2182 1.00715C18.293
                        -0.335715 15.1716 -0.335716 13.2464 
                        1.00715C11.3212 2.35001 11.3212 4.52722 
                        13.2464 5.87008Z" class="ccustom" fill="#25CAAC">
            </path> <path d="M5.74661 13.1645C7.28678 14.2388
                           9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 
                           12.8642 10.3484 11.3241 9.27415C9.78389 8.19986
                            7.28678 8.19986 5.74661 9.27415C4.20644 10.3484
                             4.20645 12.0902 5.74661 13.1645Z" class="ccustom" fill="#25CAAC">
            </path> <path d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 
                              20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293
                               30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 
                               13.2464 36.9929Z" class="ccustom" fill="#25CAAC"></path> <path d="M31.9011 21.9178C34.2114 
                               23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 
                               14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z" class="ccustom"
              fill="#25CAAC"></path> <path d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086
                                28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 
                                28.087 21.7322 29.6984Z" class="ccustom" fill="#25CAAC"></path> </svg>
        </a>
        <h1>BidSpirit Online MarketPlace</h1>
        <div>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/antiques" >Antique</Link></li>
            <li><Link to="/furnitures">Furnitures</Link></li>
            <li><Link to="/fineart">Fineart</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/contactus">ContactUs</Link></li>
          </ul>

           {/* <form className="d-flex" style={{ width: "40%", marginLeft: "30%", textDecoration: "none" }}>
            <button className="dgrid"><Link to="/login">Login</Link></button>
            <button className="dgrid"><Link to="/register">Register</Link></button>
          </form> */}
        </div>
        <div className="bars">
        <button className="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><FaBars/></button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/home">Home</a></li>
          <li><a className="dropdown-item" href="/antiques">Antiques</a></li>
          <li><a className="dropdown-item" href="/furnitures">Furnitures</a></li>
          <li><a className="dropdown-item" href="/fineart">FineArt</a></li>
          <li><a className="dropdown-item" href="/aboutus">Aboutus</a></li>
          <li><a className="dropdown-item" href="/contactus">Contactus</a></li>
          </ul>
          </div>
      </nav>

      <div class="dropdown">
        <button class="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">The Auction</button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="/home">Home</a></li>
          <li><a class="dropdown-item" href="/antiques">Antiques</a></li>
          <li><a class="dropdown-item" href="/furnitures">Furnitures</a></li>
          <li><a class="dropdown-item" href="/fineart">FineArt</a></li>
          <li><a class="dropdown-item" href="/aboutus">Aboutus</a></li>
          <li><a class="dropdown-item" href="/contactus">Contactus</a></li>

        </ul>
        {/* <form className="d-flex" style={{ width: "40%", marginLeft: "30%" }}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <Search/>

      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/antiques' element={<Antiques />} />
        <Route path='/fineart' element={<Fineart />} />
        <Route path='/furnitures' element={<Furnitures />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details1' element={<DetailsA />} />
        <Route path='/details2' element={<DetailsB />} />
        <Route path='/details3' element={<DetailsC />} />
        <Route path='/details4' element={<DetailsD />} />
        <Route path='/details5' element={<DetailsE />} />
        <Route path='/details6' element={<DetailsF />} />
        <Route path='/details7' element={<DetailsG />} />
        <Route path='/details8' element={<DetailsH />} />
        <Route path='/details9' element={<DetailsI />} />
        <Route path='/details10' element={<DetailsJ />} />
        <Route path='/details11' element={<DetailsK />} />
        <Route path='/details12' element={<DetailsL />} />
        <Route path='/details13' element={<DetailsM />} />
        <Route path='/fur1' element={<FurA />} />
        <Route path='/fur2' element={<FurB />} />
        <Route path='/fur3' element={<FurC />} />
        <Route path='/fur4' element={<FurD />} />
        <Route path='/fur5' element={<FurE />} />
        <Route path='/fur6' element={<FurF />} />
        <Route path='/fur7' element={<FurG />} />
        <Route path='/fur8' element={<FurH />} />
        <Route path='/fur9' element={<FurI />} />
        <Route path='/fur10' element={<FurK />} />
        <Route path='/fur11' element={<FurL />} />
        <Route path='/fur12' element={<FurM />} />
        <Route path='/fine1' element={<FineA />} />
        <Route path='/fine2' element={<FineB />} />
        <Route path='/fine3' element={<FineC />} />
        <Route path='/fine4' element={<FineD />} />
        <Route path='/fine5' element={<FineE />} />
        <Route path='/fine6' element={<FineF />} />
        <Route path='/fine7' element={<FineG />} />
        <Route path='/fine8' element={<FineH />} />
        <Route path='/fine9' element={<FineI />} />
        <Route path='/fine10' element={<FineK />} />
        <Route path='/fine11' element={<FineL />} />
        <Route path='/bloghome' element={<BlogHome />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogrome' element={<BlogRome />} />
        <Route path='/bloggogh' element={<BlogGogh />} />
        <Route path='/articleshome' element={<ArticlesHome />} />
        <Route path='/articleart' element={<ArticleArt />} />
        <Route path='/articlerich' element={<ArticleRich />} />
        <Route path='/articlecartier' element={<ArticleCartier />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;


