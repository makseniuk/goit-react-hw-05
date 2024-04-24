import React from 'react';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from '../src/components/Navigation/Navigation.jsx';

const HomePage = React.lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const MovieDetailsPage = React.lazy(() => import("../src/pages/MovieDetailsPage/MovieDetailsPage.jsx"));
const MoviesPage = React.lazy(() => import("../src/pages/MoviesPage/MoviesPage.jsx"));
const NotFoundPage = React.lazy(() => import("../src/pages/NotFoundPage/NotFoundPage.jsx"));
const MovieCast = React.lazy(() => import("../src/components/MovieCast/MovieCast.jsx"));
const MovieReviews = React.lazy(() => import("../src/components/MovieReviews/MovieReviews.jsx"));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} /> 
            <Route path="reviews" element={<MovieReviews />} /> 
          </Route>
          <Route path="/404" element={<NotFoundPage />} /> 
          <Route path="*" element={<Navigate to="/404" />} /> 
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;