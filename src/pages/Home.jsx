import Header from '../components/header'
import List  from '../components/list'
import ButtonAdd from '../components/button'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

function Home() {

  return (
    <div>
      <Header />
        <Link to="/cadastro">
            <ButtonAdd />
        </Link>
      <List/>
      <Footer />
    </div>
  )
}

export default Home;
