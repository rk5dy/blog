import './components/Layout/Layout';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Blog from './containers/Blog/Blog';
import OnePost from './containers/OnePost/OnePost';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={Blog}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/OnePost" component={OnePost} exact/>
        <Route path="/OnePost/:postId" component={OnePost}/>
      </Layout>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
