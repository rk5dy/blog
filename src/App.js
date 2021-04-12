import './components/Layout/Layout';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Blog from './containers/Blog/Blog';
import NewPost from './containers/NewPost/NewPost';
import { API } from 'aws-amplify';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={Blog}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/NewPost" component={NewPost}/>
      </Layout>
    </div>
  );
}

export default App;
