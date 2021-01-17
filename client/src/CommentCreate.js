import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label className='form-label'>New Comment</label>
          <input
            type='text'
            className='form-control'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button className='btn btn-primary mt-3'>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentCreate;
