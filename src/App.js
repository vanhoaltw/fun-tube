import './App.css';
import { Header } from './components/header';
import { Body } from './components/main';
import DetailVideo from './components/main/DetailVideo'
import { Switch,Route, useRouteMatch } from 'react-router-dom';

export default function App() {
  const params = useRouteMatch('/:slug');
  const a = !params ? 'home' : params.params.slug == 'detail' ? 'detailStyle' : 'home'
  document.body.classList.value= ''
  document.body.classList.add(a)
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
