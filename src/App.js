// import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Header from "./components/Header"
import Popular from './components/Popular';
import MovieDetails from './components/MovieDetails';
import Appcontent from './ReactConent/Appcontent'; 
import './App.css';


const App = () => 

  <BrowserRouter>
    <Switch>
      <Route exact path='/popular' component={Popular} />
      <Route exact path='/movies/:id' component={MovieDetails} />
    </Switch>
  </BrowserRouter>
  // <Header />
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
