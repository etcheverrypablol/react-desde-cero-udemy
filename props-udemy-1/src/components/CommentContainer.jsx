import React from 'react';
import ProfileImage from './ProfileImage';

const CommentContainer = ({ name, urlImage, text }) => {
  return (
    <div className='d-flex'>
      <div className='flex-shrink-0'>
        <ProfileImage urlImage={urlImage} />
      </div>
      <div className='flex-grow-1 ms-3'>
        <h5>{name}</h5>
        {text}
      </div>
    </div>
  );
};

export default CommentContainer;
