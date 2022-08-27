import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';


// All Rights are reserved for Mohammad Labbafi
const client = new ApolloClient({
    uri:process.env.REACT_APP_HYGRAPH_URI,
    cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
     <ApolloProvider client={client} >
          <App />
     </ApolloProvider>
   </BrowserRouter>
);
