import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import NavBar from './layouts/NavBar/NavBar';
//import LiveEdit from './live-edit/LiveEdit'
import TemplateEdit from './live-edit/template-edit/TemplateEdit'


import Homepage from './pages/homepage/Homepage'
// import PageNotFound from './Pages/PageNotFound'
import { Provider } from './live-edit/template-edit/templates - context/TemplateContext';


function App() {

  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <div className="navbar">
            <NavBar />
          </div>
          <Switch>
            <Route exact path='/' component={Homepage} />
            {/* <Route exact path='/live-edit' component={LiveEdit} /> */}
            <Route exact path='/live-edit/template-edit' component={TemplateEdit} />
            {/* <Route exact path='/live-edit/test' component={Test} /> */}
            {/* <Route component={PageNotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
