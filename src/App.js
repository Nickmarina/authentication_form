import { Route, Switch, Redirect } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './components/Navigation'
import {RegistrationPage, LoginPage} from './services/routes'

function App() {
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main className="container-sm">
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/login' />
            </Route>
            <Route path='/registration' component={RegistrationPage} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </Suspense> 
      </main>
    </>
  );
}

export default App;
