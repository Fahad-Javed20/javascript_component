
import './App.css'
import FilmPoster from './components/FilmPoster'
import ProfileCard from './components/ProfileCard'

function App() {


  return (
    <>
    <div className='flex justify-center gap-5 mb-10'>

      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
    </div>


    <FilmPoster/>
    </>
  )
}

export default App
