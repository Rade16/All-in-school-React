import React from 'react';
import ReactDOM from 'react-dom/client';
import WithoutAuthCourse from "./full_pages/without_auth_course";

ReactDOM.createRoot(document.getElementById('no-auth')).render(
  <React.StrictMode>
    <WithoutAuthCourse />
  </React.StrictMode>,
);
