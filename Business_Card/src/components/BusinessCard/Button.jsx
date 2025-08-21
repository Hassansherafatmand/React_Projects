function Button() {
  return (
    <div>
      <div className="button-container">
        <button className="email-btn">
          <i className="fa-solid fa-envelope"></i>
          Email
        </button>

        <button className="linkedin-btn">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Button;
