import './components/Layout/Layout';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={AboutMe}/>
        <Route path="/Blog" component={Blog}/>
      </Layout>
    </div>
  );
}

export default App;
