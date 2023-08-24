
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FilterProvider } from './context/FilterContext';
import { AppProvider } from './context/ProductContext';
import { StyledEngineProvider } from '@mui/material';
import { CartProvider } from './context/Cart_Context';
import { Auth0Provider } from '@auth0/auth0-react';const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientid = process.env.REACT_APP_CLIENT_ID;
root.render(
  <StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientid}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <AppProvider>
    <FilterProvider> 
      <CartProvider>
      <StyledEngineProvider>
    <App />
    </StyledEngineProvider>
    </CartProvider>
    </FilterProvider>
  
</AppProvider>
</Auth0Provider>
    
   </StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
