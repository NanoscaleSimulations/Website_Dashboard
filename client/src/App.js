
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Error from './pages/Error';
import ProtectedRoute from './pages/ProtectedRoute';
import { Profile, Stats, SharedLayout, Geography } from './pages/dashboard';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Products from "./pages/Products";
import ProjectA from "./pages/ProjectA";
import ProjectB from "./pages/ProjectB";
import Blogs from './pages/dashboard/Blogs';
import WebBlog from './pages/WebBlog';

function App() {

  return (

    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>} >
            {/* The first page stats */}
            <Route index element={<Stats />} />
            <Route path='profile' element={<Profile />}></Route>
            <Route path='geography' element={<Geography />} />
            <Route path='blogs' element={<Blogs />} />
          </Route>
          <Route exact path='/landing' element={<Home />} />
          <Route path='/blog' element={<WebBlog />} />
          <Route path='/projectA' element={<ProjectA />} />
          <Route path='/projectB' element={<ProjectB />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );

}

export default App;
