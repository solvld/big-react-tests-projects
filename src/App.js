import './App.css';
import ForumApp from './Projects/Forum/ForumApp';
import GroceryApp from './Projects/Grocery/GroceryApp';
import ExampleFetch from './Projects/ExampleFetch/ExampleFetch'

function App() {
  return (
    <div className='App'>
      <ForumApp />
      <hr/>
      <GroceryApp />
      <hr/> 
      <ExampleFetch />
    </div>
  );
}

export default App;
