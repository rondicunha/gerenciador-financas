import './App.css'
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;