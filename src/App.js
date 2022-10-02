import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/about', element: <About></About>},
        {path: '/products', element: <Products></Products>},
        {
          path: '/friends',
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
          },
          element: <FriendDetails></FriendDetails>
        },
      ]
    },
    {path: '/*', element: <ErrorPage></ErrorPage>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;