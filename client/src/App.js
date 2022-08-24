import React from 'react'
import {Blog, Features, Footer, Header, Possibility} from './containers'
import {Navbar, UserNav, LoginSignupNavbar} from './components'
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
            <Route exact path='/' element={<><Navbar /><Header /><Footer/></>}/>
            <Route path='/signup' element={<><LoginSignupNavbar/><Signup /><Footer/></>}/>
            <Route path='/homepage' element={<><UserNav /><Header/><Footer/></>}/>
            <Route path='/login' element={<><LoginSignupNavbar/><Login /><Footer/></>}/>
            <Route path='/activity' element={<><UserNav/><Activitytracker /><Footer/></>}/>
            <Route path='/plans' element={<><UserNav/><Workoutplans /><Footer/></>}/>
            <Route path='/articles' element={<><UserNav/><Article /><Footer/></>}/>
            <Route path='/diet' element={<><UserNav/><Diet /><Footer/></>}/>
            <Route path='/groups' element={<><UserNav/><Groups /><Footer/></>}/>
            <Route path='/plans/musclebuild' element={<><UserNav/><MuscleBuild /><Footer/></>}/>
            <Route path='/plans/beginner' element={<><UserNav/><Beginner /><Footer/></>}/>
            <Route path='/plans/weightloss' element={<><UserNav/><LoseWeight /><Footer/></>}/>
            <Route path='/plans/advanced' element={<><UserNav/><Advanced /><Footer/></>}/>

            
          </Routes>
            
        </div>
      </div>
    </Router>
  )
}

export default App