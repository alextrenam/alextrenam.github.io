import './App.css';
import ProfilePic from './components/ProfilePic.js';
import Bio from './components/Bio.js';
import ActivityFeed from './components/ActivityFeed.js';
import Current from './components/Current.js';
import Previous from './components/Previous.js';
import ContactInfo from './components/ContactInfo.js';

function App() {
  return (
	  <div className="App">
	  <ProfilePic/>
	  <Bio/>
	  <Current/>
	  <Previous/>
	  <ActivityFeed/>
	  <div id="top-bar"></div>
	  <div id="contact-wrapper">
	  <ContactInfo/>
	  </div>
	  </div>
  );
}

export default App;
