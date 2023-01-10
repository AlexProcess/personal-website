import { useContext } from 'react';
import { About } from './Components/About';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Titleabout } from './components/Titleabout';
import { UiContext } from './context/UiContext';
import { Carousel } from './Components/Carousel';

function App() {
  const {isSideBarOpen} = useContext(UiContext)

  
  return (
      <>
        <Navbar/>
        {isSideBarOpen ? <Sidebar/> : null}
        <Titleabout/>
        <About/>
        <Carousel/>
      </>
  );
}

export default App;
