import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/home">홈(Link)</Link>
      <Link to="/profile">프로필(Link)</Link>
    </nav>
      <Switch>
        <Route path={["/home", "/"]} exact> {/* exact : 현재 location과 path가 정확히 일치해야만 라우팅 한다는 의미 */}
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
