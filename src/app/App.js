import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root from './Root';
import { projectsData } from '../Projects/projectsData';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {projectsData.map(element => (
        <Route
          path={element.link}
          element={element.component}
          key={element.name}
        />
      ))}
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
