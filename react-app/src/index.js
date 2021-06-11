import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { EditModalProvider } from './context/EditModal';
import EditProdModal from './components/EditProdModal';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <EditModalProvider>
          <App />
        </EditModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
