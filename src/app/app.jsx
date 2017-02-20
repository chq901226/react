import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Home from '../home/home.jsx';
import Live from '../live/live.jsx';

const App = React.createClass({
    render() {
        return (<div>
            <Header/>
            <Footer/>
        </div>);
    }
});

ReactDom.render(<Router>
    <Route path='/' component={Home} >home</Route>
    <Route path='/live'component={Live} >live</Route>
</Router>, document.getElementById('app'));

export default App;