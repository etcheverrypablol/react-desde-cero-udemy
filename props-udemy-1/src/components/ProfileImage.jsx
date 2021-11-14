import React from 'react';

const ProfileImage = ({ urlImage }) => {
  return (
    <div>
      <img src={urlImage} alt='' width='64px' className='mr-3' />
    </div>
  );
};

export default ProfileImage;
