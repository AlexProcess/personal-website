import { useContext } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Titleabout } from './components/Titleabout';
import { UiContext } from './context/UiContext';


function App() {
  const {isSideBarOpen} = useContext(UiContext)

  
  return (
      <>
        <Navbar/>
        {isSideBarOpen ? <Sidebar/> : null}
        <Titleabout></Titleabout>
      </>
  );
}

export default App;
