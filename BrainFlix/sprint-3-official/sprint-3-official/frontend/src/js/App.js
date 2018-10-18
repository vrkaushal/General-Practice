import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Upload from './Upload';

// wraps all the components and renders them
class App extends React.Component {

    render() {

        return (
            <Router>
                <div className="site__wrapper">
                    <Header />
                    <Route exact path="/" render={()=><Redirect to='/videos/0'/>}/>
                    <Route exact path="/videos" render={()=><Redirect to='/videos/0'/>}/>
                    {/* <Route exact path="/" component={Main}/>
                    <Route exact path="/videos" component={Main}/> */}
                    <Route path="/videos/:videoId" component={Main}/>
                    <Route exact path="/upload" component={Upload} />
                </div>
            </Router>
        )
    }
}

export default App;
