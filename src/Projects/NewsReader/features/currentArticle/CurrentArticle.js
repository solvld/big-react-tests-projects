import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentArticle,
  isLoadingCurrentArticle,
} from './currentArticleSlice';
import FullArticle from '../../components/FullArticle';

const CurrentArticle = () => {
  //const dispatch = useDispatch();
  const article = useSelector(selectCurrentArticle);
  const currentArticleIsLoading = useSelector(isLoadingCurrentArticle);

  if (currentArticleIsLoading) {
    return <div>Loading</div>;
  } else if (!article) {
    return null;
  }

  return <FullArticle article={article} />;
};

export default CurrentArticle;
