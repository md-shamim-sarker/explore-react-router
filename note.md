# Notes on React Router
## Create very simple react router
Step 1: npm i react-router-dom
Step 2: Create a router using createBrowserRouter
Step 3: Call RouterProvider component and send the router as props
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
Step 1: Create a link
Step 2: Create a component
Step 3: Add a router element
