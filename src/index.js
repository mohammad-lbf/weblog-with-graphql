import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri:"https://api-us-west-2.hygraph.com/v2/cl67rnab4celw01ut8byq83bg/master",
    cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ApolloProvider client={client} >
        <App />
   </ApolloProvider>
);
