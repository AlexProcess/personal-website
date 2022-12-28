import { useContext } from 'react';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { UiContext } from './context/UiContext';


function App() {
  const {isSideBarOpen} = useContext(UiContext)

  
  return (
      <>
        <Navbar/>
        {isSideBarOpen ? <Sidebar/> : null}
      </>
  );
}

export default App;
