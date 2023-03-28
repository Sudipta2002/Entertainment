import { Container } from '@material-ui/core';
import './App.css';
import Header from './components/Header/Header.jsx';
import SimpleBottomNavigation from './components/MainNav.jsx'; 
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom"; 
import React, { lazy , Suspense, useState} from "react";

// import Trending from './components/Trending.jsx';
// import Movies from './components/Movies.jsx';
// import Series from './components/Series.jsx';
// import Search from './components/Search.jsx';

const Trending = lazy(()=>import("./components/Trending/Trending.jsx"))
const Movies = lazy(()=>import("./components/Movies/Movies.jsx"))
const Series = lazy(()=>import("./components/Series/Series.jsx"))
const Search = lazy(()=>import("./components/Search/Search.jsx"))

function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <Container>
          <Outlet/>
        </Container>
      </div>
    <SimpleBottomNavigation/>
    </>
  );
}
const  appRouter= createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App/>,
    children:[
      {
        path: "/",
        exact: true,
        element:
        <Suspense>
          <Trending/>
        </Suspense>
      },
      {
        path: "/movies",
        exact: true,
        element: 
        <Suspense>
          <Movies/>
        </Suspense>
      },
      {
        path: "/series",
        exact: true,
        element:
        <Suspense>
          <Series/>
        </Suspense>
      },
      {
        path: "/search",
        exact: true,
        element:
        <Suspense>
          <Search/>
        </Suspense>
      }
    ]
  },
])
export  {appRouter};
export default App;
