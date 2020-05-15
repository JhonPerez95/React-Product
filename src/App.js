import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import Header from './components/Header';
import Button from './components/AddButton';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <>
      <Header title="Products App" />
      <Button />
      <ListProducts />
    </>
  );
}

export default App;
