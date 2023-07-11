import './App.css'
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const divStyle = {
    backgroundColor: '#f2f2f2',
    margin: '0',
    pading: '0',
  }

  return (
    <div style={divStyle}>
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