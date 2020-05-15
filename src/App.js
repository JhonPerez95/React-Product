import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import Header from './components/Header';
import Button from './components/AddButton';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <Header title="Products App" />
      <Button />
      <Loading />
    </>
  );
}

export default App;
