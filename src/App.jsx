import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="content-wrapper">
                <Sidebar />
                <main className="main-content">
                    <Dashboard />
                </main>
            </div>
        </div>
    );
}

export default App;
