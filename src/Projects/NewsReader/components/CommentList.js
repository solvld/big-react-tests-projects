import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  if (comments) {
    return (
      <ul>
        {comments.map(comment => {
          return <Comment comment={comment} key={comment.id} />;
        })}
      </ul>
    );
  }
}
