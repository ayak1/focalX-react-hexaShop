import './App.css';
import Nav from './components/nav/Nav'
import Header from './components/header/Header';
import Men from './components/men/Men'
import Women from './components/women/Women'
import Kids from './components/kids/Kids'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Men/>
      <Women/>
      <Kids/>
    </div>
  );
}

export default App;
