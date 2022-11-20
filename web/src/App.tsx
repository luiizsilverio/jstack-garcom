import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Orders } from './components/Orders';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />

      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        limit={1}
      />
    </>
  )
}

export default App
