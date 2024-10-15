import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Live from './pages/Live';

const AppContainer = styled.div`
  background-color: #141414;
  color: #ffffff;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;