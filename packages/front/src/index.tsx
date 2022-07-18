import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Create } from './pages/Create';
import { TopPage } from './pages/TopPage';
import { Edit } from './pages/Edit';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="create" element={<Create/>}/> 
      <Route path="edit">
        <Route path=":slug" element={<Edit />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)