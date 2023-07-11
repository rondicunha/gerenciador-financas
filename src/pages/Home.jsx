import Header from '../components/header'
import List  from '../components/list'
import ButtonAdd from '../components/button'
import { Link } from 'react-router-dom'

function Home() {

  const divStyle = {
    backgroundColor: '#f2f2f2',
    margin: '0',
    pading: '0',
    height: '100%',
  }

  return (
    <div>
      <Header />
        <Link to="/cadastro">
            <ButtonAdd />
        </Link>
      <List/>
    </div>
  )
}

export default Home;
