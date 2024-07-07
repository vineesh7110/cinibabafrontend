import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootLayout from './routes/RootLayout';
import Errorpage from './Errorpage';
import Moviespage from './routes/Moviespage';
import HomePage,{loader as homeloader} from './routes/HomePage';
import Singlemoviepage, {loader as singleMovieLoader} from './routes/Singlemoviepage';
import SelectShowPage, {loader as SelectShowLoader} from './routes/SelectShowPage';
import SelectSeats, {loader as SelectSeatsLoader} from './routes/SelectSeats';
import { Provider } from 'react-redux';
import BookingSummary from './routes/BookingSummary';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <Errorpage/>,
    children:[


      {
        path: "/",
        element:<HomePage/>,
        loader: homeloader
      },
      {
        path: "/movies",
        element: <Moviespage/>
       
      },
      {
        path: "/movies/:movieId",
        element: <Singlemoviepage/>,
        loader: singleMovieLoader
       
      },
      {
      path: "/select-show/:movieId",
      element:<SelectShowPage/>,
      loader:SelectShowLoader
     },
     {
      path: "/select-seats/:showId",
      element:<SelectSeats/>,
      loader:SelectSeatsLoader
     },
     {
      path:"/booking-summary",
      element:<BookingSummary/>
     }
     
    ]
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
