
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { BrowserRouter } from 'react-router-dom';
import RoutingConfig from './config/router.config';

import {Provider} from "react-redux"
import store, {persistor} from './config/store.config';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingComponent } from './components/common';

const htmlRoot: HTMLElement = document.getElementById('root') as HTMLElement

const RootElement = ReactDOM.createRoot(htmlRoot)

RootElement.render(
  <React.StrictMode>    
    <Provider store={store} >
      <PersistGate loading={<LoadingComponent />} persistor = {persistor} >
        <BrowserRouter>
          <RoutingConfig /> 
        </BrowserRouter> 
      </PersistGate>
    </Provider> 
  </React.StrictMode>
)

// strictMode ==> check real dom and virtual dom if find any kind of
                  // then update virtual DOM
            //==> helps in UI/ Hook dubging
            //===> limitation --> calls same API e times
            //===> only for development environment

// BrowserRouter ===>provide routing feature
