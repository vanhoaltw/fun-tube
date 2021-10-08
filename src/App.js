import './App.css';
import { Header } from './components/header';
import { Body } from './components/main';
import DetailVideo from './components/main/DetailVideo'
import { Switch,Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/'  component={Body}/>
          <Route path='/detail/:videoId' component={DetailVideo}/>
      </Switch>
    </div>
  );
}
