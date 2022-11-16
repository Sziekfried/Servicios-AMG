import { Parallax } from '@react-spring/parallax'
import './App.css'
import * as components from './components';

function App() {
  return (
    <div className="App">
    <components.NavBar />
    <Parallax pages={4}>
      <components.HomeParallax />
      <components.Services />
      <components.Contact />
    </Parallax>
    </div>
  )
}

export default App
