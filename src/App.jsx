import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import First from './First';
import Second from './Second';
import Third from './Third';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
      </Routes>
    </div>
  );
}