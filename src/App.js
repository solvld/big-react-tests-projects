import './App.css';
import ForumApp from './Projects/Forum/ForumApp';
import GroceryApp from './Projects/Grocery/GroceryApp';
import ExampleFetch from './Projects/ExampleFetch/ExampleFetch'
import Showcase from './Projects/RandomFontAwesomButton/RandomButton';

function App() {
  return (
    <div className='App'>
      <ForumApp />
      <hr/>
      <GroceryApp />
      <hr/> 
      {/* <ExampleFetch /> */}
      <Showcase />
    </div>
  );
}

export default App;
