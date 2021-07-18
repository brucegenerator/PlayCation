import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Auth from './user/pages/Auth'
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from "./places/pages/UpdatePlace";
import MainNavigation from './shared/components/Navigation/MainNavigation'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userId/places" exact>
        <UserPlaces />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Route path="/places/:placeId">
        <UpdatePlace />
      </Route>
      <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
