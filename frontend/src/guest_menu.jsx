import React from 'react';
import ReactDOM from 'react-dom/client';
import WithoutAuthMenu from "./full_pages/without_auth_menu";

ReactDOM.createRoot(document.getElementById('no-auth')).render(
  <React.StrictMode>
    <WithoutAuthMenu />
  </React.StrictMode>,
);
