import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllPreviews,
  selectAllPreviews,
  isLoading,
} from './articlePreviewsSlice';
import { loadCurrentArticle } from '../currentArticle/currentArticleSlice';
import ArticleListItem from '../../components/ArticleListItem';

const ArticlePreviews = () => {
  const dispatch = useDispatch();
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);

  const clickHandler = e => dispatch(loadCurrentArticle(e.id));

  useEffect(() => {
    dispatch(loadAllPreviews());
  }, [dispatch]);

  if (isLoadingPreviews) {
    return <div>loading state</div>;
  }

  return (
    <>
      <section className="articles-container">
        <h2 className="section-title">All Articles</h2>
        {articlePreviews.map(article => (
          <div key={article.id} onClick={clickHandler(article)}>
            <ArticleListItem article={article} />
          </div>
        ))}
      </section>
    </>
  );
};

export default ArticlePreviews;
