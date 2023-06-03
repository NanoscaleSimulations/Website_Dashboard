
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Error from './pages/Error';
import ProtectedRoute from './pages/ProtectedRoute';
import { AllJobs, AddJob, Profile, Stats, SharedLayout, AddBlog, AllBlogs } from './pages/dashboard';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import ProjectA from "./pages/ProjectA";
import ProjectB from "./pages/ProjectB";
import WebBlog from './pages/WebBlog';

function App() {

  return (

    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><SharedLayout/></ProtectedRoute>} >
            {/* The first page stats */}
            <Route index element={<Stats />} /> 
            <Route path='all-jobs' element={<AllJobs />}></Route>
            <Route path='add-job' element={<AddJob />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='all-blogs' element={<AllBlogs/>}></Route>
            <Route path='add-blog' element={<AddBlog/>}></Route>
          </Route>
          <Route exact path='/landing' element={<Home />}/>
          <Route path='/webBlog' element={<WebBlog />} />
          <Route path='/crud-blog' element={<WebBlog />} />
          <Route path='/projectA' element={<ProjectA />}/>
          <Route path='/projectB' element={<ProjectB />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );

}

export default App;
