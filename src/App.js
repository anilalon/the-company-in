import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import CompanyDetails from "./components/companyDetails";
import Companies from "./components/companies";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/company" component={CompanyDetails}></Route>
            <Route path="/" exact component={Companies}></Route>
            </Switch>
    </div>
  );
}

export default App;
