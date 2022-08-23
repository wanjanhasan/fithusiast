import React from 'react'
import {Blog, Features, Footer, Header, Possibility} from './containers'
import {Navbar, UserNav} from './components'
import {Homepage, Login, Signup, Article, Workoutplans, Groups, Diet, Activitytracker, MuscleBuild, LoseWeight, Beginner, Advanced} from './pages'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"



const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='gradient__bg'>
          <Routes>
            <Route exact path='/' element={<><Navbar /><Header /></>}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/homepage' element={<><UserNav /><Header/></>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/activity' element={<><UserNav/><Activitytracker /></>}/>
            <Route path='/plans' element={<><UserNav/><Workoutplans /></>}/>
            <Route path='/articles' element={<><UserNav/><Article /></>}/>
            <Route path='/diet' element={<><UserNav/><Diet /></>}/>
            <Route path='/groups' element={<><UserNav/><Groups /></>}/>
            <Route path='/plans/musclebuild' element={<><UserNav/><MuscleBuild /></>}/>
            <Route path='/plans/beginner' element={<Beginner />}/>
            <Route path='/plans/weightloss' element={<><UserNav/><LoseWeight /></>}/>
            <Route path='/plans/advanced' element={<><UserNav/><Advanced /></>}/>

            
          </Routes>
            
        </div>
      </div>
    </Router>
  )
}

export default App