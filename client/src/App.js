import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className='container'>
      <h1>Blog App</h1>
      <PostCreate />
      <hr />
      <h1>List of Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
