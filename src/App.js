import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from './pages/Welcome/Welcome';
import { SearchPage } from './pages/SearchPage/SearshPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='search' element={ <SearchPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
