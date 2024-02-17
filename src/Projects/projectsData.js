import ContextMixtapeApp from './ContextMixtape/ContextMixtapeApp';
import PassingThoughtsApp from './PassingThoughts/PassingThoughtsApp';
import GroceryApp from './Grocery/GroceryApp';
import Forecast from './ExampleFetch/ExampleFetch';
import ThemeToggler from './themeToggler/ThemeToggler';

export const projectsData = [
  {
    name: 'Context Mixtape',
    link: '/',
    component: <ContextMixtapeApp />,
    description: 'This is project 1.',
  },
  {
    name: 'Theme Toggler',
    link: '/theme-toggler',
    component: <ThemeToggler />,
    description: 'This is project 2.',
  },
  {
    name: 'Passing Thoughts',
    link: '/passing-thoughts',
    component: <PassingThoughtsApp />,
    description: 'This is project 3.',
  },
  {
    name: 'Grocery',
    link: '/grocery',
    component: <GroceryApp />,
    description: 'This is project 4.',
  },
  {
    name: 'Fetch Weather',
    link: '/fetch-weather',
    description: 'This is project 5.',
    component: <Forecast />,
  },
];
