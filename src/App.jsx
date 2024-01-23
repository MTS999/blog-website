
import './App.css'
import { BrowserRouter } from 'react-router-dom'
// import Layout from './components/Layout/Layout'
// import PostList from './components/PostList'
import Routess from './Routess'
function App() {

  return (

    //  <Layout>
    //   <PostList/>
    //  </Layout>


    <>
    <BrowserRouter>
      <Routess />
    </BrowserRouter>
    </>
  )
}

export default App
