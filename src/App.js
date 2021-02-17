import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';

function App() {

  const HatsPage = () => {
    return (
      <div>
        <h1>HATS PAGE</h1>
      </div>
    )
  }
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
