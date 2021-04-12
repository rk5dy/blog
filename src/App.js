import './components/Layout/Layout';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Blog from './containers/Blog/Blog';
import NewPost from './containers/NewPost/NewPost';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={Blog}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/NewPost" component={NewPost}/>
      </Layout>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
