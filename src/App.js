// import ForumApp from './Projects/Forum/ForumApp';
import GroceryApp from './Projects/Grocery/GroceryApp';
//import ExampleFetch from './Projects/ExampleFetch/ExampleFetch';
import Showcase from './Projects/RandomFontAwesomButton/RandomButton';
import PassingThoughtsApp from './Projects/PassingThoughts/PassingThoughtsApp';
import Header from './Projects/themeToggler/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ForumApp /> */}
      <PassingThoughtsApp />
      <hr />
      <GroceryApp />
      <hr />
      <Showcase />
    </div>
  );
}

export default App;
