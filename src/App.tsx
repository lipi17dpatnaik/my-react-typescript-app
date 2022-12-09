import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Contact } from './components/Contact';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store //Provider is wrapped around the
        // components store should have access to
      }>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
