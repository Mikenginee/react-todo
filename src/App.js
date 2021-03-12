import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import List from './components/list';



function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-container">
          <List />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
