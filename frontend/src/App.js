import './App.css';
import Footer from './components/presentational/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/presentational/NavBar';


function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <p>Bootstrap Test</p>
            </div>
            <p>Body</p>
            <Footer />
        </div>
    );
}

export default App;
