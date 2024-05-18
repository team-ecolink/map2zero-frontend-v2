import { Route, Routes } from 'react-router-dom';
import { MenueBar } from './components/MenueBar';
import { Fotter } from './components/Fotter';
function App() {
  return (
    <>
      <MenueBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/map" element={<div>map</div>} />
        <Route path="/store" element={<div>store</div>} />
        <Route path="/product" element={<div>product</div>} />
        <Route path="/event" element={<div>event</div>} />
        <Route path="/community" element={<div>community</div>} />
        <Route path="/article" element={<div>article</div>} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
      <Fotter />
    </>
  );
}

export default App;
