import Main from './Components/Main';
import './App.css';
import { About } from './Components/About';
import Navbar from './Components/Navbar';
import OverView from './Components/OverView';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Fotter from './Components/Fotter';


function App() {
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <div className="absolute w-screen" >
  <Navbar/>
</div>
      <div className=' min-h-screen'>
        <div className='absolute'>

          <Main/>

        </div>

    <div className='relative'>
        <About/>
     </div>

      </div>
    
     <div className='flex flex-col relative bg-white'>
        <OverView/>
        <Project/>
         <Contact/>
        <Fotter/>
     </div>


    </div>
  );
}

export default App;
