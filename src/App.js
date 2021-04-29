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
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  return (
    <Aux>
      <Layout token={token} setToken={setToken}>
        <Route path="/" exact render={(props) => <Blog {...props} token={token}/>}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/OnePost" component={OnePost} exact/>
        <Route path="/OnePost/:postId" component={OnePost}/>
        <Route path="/Login" render={(props) => <Login {...props} token={token} setToken={setToken}/>} exact/>
      </Layout>
      <AmplifySignOut/>
    </Aux>
  );
}

export default withAuthenticator(App);
