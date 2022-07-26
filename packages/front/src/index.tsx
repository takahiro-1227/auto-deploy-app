import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Create } from './pages/Create';
import { TopPage } from './pages/TopPage';
import { Edit } from './pages/Edit';
import { client } from './app/client';
import { ApolloProvider } from '@apollo/client';
import { NotFound } from './pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/create" element={<Create/>}/> 
        <Route path="/edit/:slug" element={<Edit />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)