import React, { useState } from 'react';

const CommentCreate = ({ postId }) => {
  return (
    <div>
      <form action=''>
        <div className='form-group'>
          <label htmlFor=''>New Comment</label>
          <input type='text' className='form-control' />
        </div>
        <button className='btn btn-primary'>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentCreate;
