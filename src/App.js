import './components/Layout/Layout';
import { useState} from 'react';
import { Route } from 'react-router-dom';
import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Blog from './containers/Blog/Blog';
import Login from './containers/Login/Login';
import OnePost from './containers/OnePost/OnePost';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import useIsLoggedIn from './LoggedIn';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();
  return (
    <Aux>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Route path="/" exact component={() => <Blog isLoggedIn={isLoggedIn}/>}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/OnePost" component={OnePost} exact/>
        <Route path="/OnePost/:postId" component={OnePost}/>
        <Route path="/Login" component={Login} exact/>
      </Layout>
      <AmplifySignOut/>
    </Aux>
  );
}

export default withAuthenticator(App);
