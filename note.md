# Notes on React Router
## Create very simple react router
- Step 1: npm i react-router-dom
- Step 2: Create a router using createBrowserRouter
- Step 3: Call RouterProvider component and send the router as props

## Example 1
```js
// App.js
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <h1>Default Page.</h1>},
    {path: '/home', element: <h1>Home Page.</h1>},
    {path: '/about', element: <h1>About Page.</h1>}
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
```

## Example 2
```js
// App.js
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <h1>Default Page.</h1>},
    {path: '/home', element: <Home></Home>},
    {path: '/about', element: <About></About>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
```

## Create a Navbar
```js
// Header.js
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
        </div>
    );
};

export default Header;
```

## Setup a new route
- Step 1: Create a link
- Step 2: Create a component
- Step 3: Add a router element

## Nested Route and Outlet
```js
// Main.js
import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
```

```js
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
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
        {path: '/friends', element: <Friends></Friends>},
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
```

## Common Header
```js
// Header.js
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <nav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/friends"}>Friends</Link>
            </nav>
            <h1>This is common header</h1>
        </div>
    );
};

export default Header;
```

## Data Load, Recieve, Display and Dynamic Route From API
```js
// App.js
// Data Load
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
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
```

```js
// Friends.js
// Data Recieve
import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {

    const friends = useLoaderData();
    console.log(friends);

    return (
        <div className='Friends'>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;
```
```js
// Friend.js
// Data Display and Dynamic Route
import React from 'react';
import {Link} from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {id, name, email, website, username} = friend;
    return (
        <div className='Friend'>
            <h3>{name}</h3>
            <h5>
                Email: {email} <br />
                Website: {website}
            </h5>
            <Link to={`/friend/${id}`}>{username}</Link>
        </div>
    );
};

export default Friend;
```