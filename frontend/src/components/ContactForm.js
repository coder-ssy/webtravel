import React, { useState } from 'react';
import '../components/ContactFormStyles.css';

function ContactForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const author_id = 1; // 예시로 사용자 ID를 1로 설정 (실제로는 로그인한 사용자의 ID를 사용해야 함)
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content, author_id }),
    });

    if (response.ok) {
      alert('Post created successfully!');
    } else {
      alert('Error creating post');
    }
  };

  return (
    <div className="from-container">
      <h1>게시글을 작성해주세요!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          rows="16"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">작성 완료</button>
      </form>
    </div>
  );
}

export default ContactForm;
