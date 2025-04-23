import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Success from "./components/Success";

function App() {
    const history = useHistory();

    const goTo = (path) => {
        history.push(path);
    };

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Login goTo={goTo} />
                </Route>
                <Route exact path="/success">
                    <Success goTo={goTo} />
                </Route>
            </Switch>
        </>
    );
}

export default App;
