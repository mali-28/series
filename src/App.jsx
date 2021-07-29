
import {Route,Switch, BrowserRouter , Redirect} from "react-router-dom";
import Home from "./components/Home";
import Series from "./components/Series";
import Movies from "./components/Movies";
import Context from "./context/Context";


const App = ()=>{
    return <>
    <Context>
    <BrowserRouter>
        <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route exact path="/series" component={Series}/>
        <Redirect from="/" to="/home" />
        </Switch>
    </BrowserRouter>
        
    </Context>
    </>
}

export default App;