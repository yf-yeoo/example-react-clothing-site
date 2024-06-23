import { Routes, Route } from 'react-router-dom';
import './categories.styles.scss';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

function Shop() {
  return (
    <div>
      I am the shop element
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;
