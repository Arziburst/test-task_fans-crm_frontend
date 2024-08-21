import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux';

// Init
import { reduxStore } from './init';
import { router } from './view/router';

import { AppContainer } from './view/containers'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ReduxProvider store={reduxStore}>
      <AppContainer>
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
      </AppContainer>
    </ReduxProvider>
);

reportWebVitals();
