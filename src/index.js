import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
/*
const appRouting = (

  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>

  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
    </Routes>
  </Router>
  
);
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(appRouting, document.getElementById("root"));