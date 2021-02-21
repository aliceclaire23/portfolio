import './App.css';
import Introduction from './components/Introduction';
import DeveloperJourney from './components/DeveloperJourney';
import CreativeEndeavours from './components/CreativeEndeavours';
import FindMe from './components/FindMe';

function App() {
  return (
      <div className="main"> 
        <Introduction />
        <hr size="0" noshade />
        <DeveloperJourney />
        <hr size="0" noshade />
        <CreativeEndeavours />
        <hr size="0" noshade />
        <FindMe />
      </div>
  );
}

export default App;
