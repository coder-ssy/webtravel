import '../components/ContactFormStyles.css';

function ContactForm() {
  return (
    <div className="from-container">
      <h1>게시글을 작성해주세요!</h1>
      <form>
        <input placeholder="Title" />
        <textarea placeholder="Content" rows="16"></textarea>
        <button>작성 완료</button>
      </form>
    </div>
  );
}

export default ContactForm;
