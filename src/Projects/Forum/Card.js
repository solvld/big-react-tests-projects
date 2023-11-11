import React from "react";
import Head from './Head';
import Body from './Body'

function Card(props){
  return (
    <div>
      <Head profileImg={props.commentObject.profileImg} 
        username={props.commentObject.username} />
      <Body comment={props.commentObject.comment}></Body>
    </div>
  )
};

export default Card;