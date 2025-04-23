import { Route, Switch } from "react-router-dom";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./contexts/AuthContext";
import "./index.css";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/friends/add" component={AddFriend} />
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
