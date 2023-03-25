import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from './components/Footer';
import Home from 'pages';
import ReserveTable from 'pages/reserve';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'reserve',
    element: <ReserveTable />,
  },
]);

function App() {
  return (
    <div className='page'>
      <Navbar />
      <main>
        <RouterProvider router={router} />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
