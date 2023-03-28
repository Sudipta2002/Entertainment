import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { appRouter } from './App.js';
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

