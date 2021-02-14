import './App.css';
import Introduction from './components/Introduction';
import DeveloperJourney from './components/DeveloperJourney';
import CreativeEndeavours from './components/CreativeEndeavours';
import FindMe from './components/FindMe';

function App() {
  return (
      <div>
        <Introduction />
        <hr />
        <DeveloperJourney />
        <hr />
        <CreativeEndeavours />
        <hr />
        <FindMe />
      </div>
  );
}

export default App;
