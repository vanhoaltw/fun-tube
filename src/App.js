import './App.css';
import { Header } from './components/header';
import { Body } from './components/main';
import DetailVideo from './components/main/DetailVideo'
import { Switch,Route, useRouteMatch } from 'react-router-dom';
import { createContext } from 'react';
import React from 'react';

export const ShowContext = createContext(); 
export default function App() {
  const params = useRouteMatch('/:slug');
  const [show, setShow] = React.useState(false);
  const a = !params ? 'home' : params.params.slug == 'detail' ? 'detailStyle' : 'home'
  document.body.classList.value= ''
  document.body.classList.add(a)
  return (
    <div className="App">
      <ShowContext.Provider value={{show,setShow}}>
        <Header/>
      <Switch>
          <Route exact path='/'  component={Body}/>
          <Route path='/detail/:videoId' component={DetailVideo}/>
      </Switch>
      </ShowContext.Provider>
    </div>
  );
}
