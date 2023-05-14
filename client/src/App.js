
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Error from './pages/Error';
import ProtectedRoute from './pages/ProtectedRoute';
import { AllJobs, AddJob, Profile, Stats, SharedLayout, Blogs } from './pages/dashboard';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <SharedLayout/>
            </ProtectedRoute>
          
          } >
            {/* The first page stats */}
            <Route index element={<Stats />} /> 
            <Route path='all-jobs' element={<AllJobs />}></Route>
            <Route path='add-job' element={<AddJob />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='blogs' element={<Blogs/>}></Route>
          </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/landing' element={<Landing />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;
