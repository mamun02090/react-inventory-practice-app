import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import Documents from './components/pages/Documents';
import Inventory from './components/pages/Inventory';
import Settings from './components/pages/Settings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/inventory' element={<Inventory/>}></Route>
            <Route path='/documents' element={<Documents/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
