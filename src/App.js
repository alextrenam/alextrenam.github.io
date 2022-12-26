import './App.css';
import Bio from './components/Bio.js';
import Research from './components/Research.js';
import Teaching from './components/Teaching.js';
import ContactInfo from './components/ContactInfo.js';

function App() {
  return (
	  <div className="App">
	  <div id="top-bar"></div>
	  <div id="main-body">
	  <Bio/>
	  <Research/>
	  <Teaching/>
	  <ContactInfo/>
	  </div>
	  </div>
  );
}

export default App;
