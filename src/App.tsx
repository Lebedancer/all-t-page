import React from 'react';
import ListPage from './pages/ListPage';
import ItemPage from './pages/ItemPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <ListPage/>
                    </Route>
                    <Route path="/item/:id" component={ItemPage} />
                </Switch>
            </ div>
        </Router>
    );
}

export default App;
