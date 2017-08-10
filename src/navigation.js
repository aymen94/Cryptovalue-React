import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './component/header';
import App from './component/App';
import BoxInfo from './component/boxinfo';
import About from './component/about';
const Navigation=()=>{
return(
 <div>
  <Header title="Cryptovalue React"/>
  <Switch>
   <Route exact path="/" name="app" component={App} />
   <Route path="/coin/:coin_url" name="boxinfo" component={BoxInfo}/>
   <Route path="/about" name="about" component={About}/>
  </Switch>
 </div>
)
}

export default Navigation;