import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='container-scroller background-container'>
        <Header/>
          <div className='container-fluid  page-body-wrapper'>
            <Sidebar/>
              <div className='main-panel'>
                <Outlet/>
                
              </div>
          </div>
      </div>
    
    </>
  );
}

export default App;
