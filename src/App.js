import './App.css';
import ProfilePic from './components/ProfilePic.js';
import Bio from './components/Bio.js';
import ActivityFeed from './components/ActivityFeed.js';
import Current from './components/Current.js';
import ContactInfo from './components/ContactInfo.js';

function App() {
  return (
	  <div className="App">
	  <div id="top-bar"></div>
	  <ProfilePic/>
	  <ContactInfo/>
	  <Bio/>
	  <Current/>
	  <ActivityFeed/>
	  </div>
  );
}

export default App;
