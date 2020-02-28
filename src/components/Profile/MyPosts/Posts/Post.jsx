import React from 'react';
import clases from'./Post.module.css';

const Post = (props) => {
    return (
      <div className={clases.item}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8gUvJy2l3wwao2jOdyoBPwf0DGMovtgWLmuaVEqRcMrvgvZWG"
          alt=""
        />
        {props.message}
        <div>{props.like}</div>
      </div>
    );
};

export default Post;