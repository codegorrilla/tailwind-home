import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/shared/Header'
import Home from './components/Home'
import About from './components/About'
import './App.css';

function App() {  
  const location = useLocation()  

	return (
		<>
      <Header />
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	);
}

export default App;
