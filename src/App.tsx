import {Routes,Route} from 'react-router-dom'

import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Navigation from './component/Navigation'

function App() {
  

  return (
    <>
        <Navigation/>

      <Routes>
        <Route path='/' Component={Page1}/>
        <Route path='/page2' Component={Page2}/>
      </Routes>
    </>
  )
}

export default App
