import React from 'react';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import CurrentArticle from '../features/currentArticle/CurrentArticle';
import Comments from '../features/comments/Comments';

import s from './styles.module.css';

function NewsApp() {
  return (
    <div className={s.app}>
      <header className="App-header" />
      <main>
        <div className={s.currentArticle}>
          <CurrentArticle />
          <Comments />
        </div>
        <ArticlePreviews />
      </main>
    </div>
  );
}

export default NewsApp;
