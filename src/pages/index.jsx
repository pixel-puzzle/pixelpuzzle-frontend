import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './home'

function PageNotFont() {
  return <div>404</div>
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="*">
          <PageNotFont/>
        </Route>
      </Switch>
    </Router>
  );
}
