import React from 'react';
import ReactDOM from 'react-dom/client';
import WithoutAuthCatalog from "./full_pages/without_auth_catalog";

ReactDOM.createRoot(document.getElementById('no-auth')).render(
  <React.StrictMode>
    <WithoutAuthCatalog />
  </React.StrictMode>,
);
