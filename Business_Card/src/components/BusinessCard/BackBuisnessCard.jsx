import logo from "../../assets/images/logo.svg";

function BackBusinessCard() {
  return (
    <main className="card card--back">
      {/* Top Logo */}
      <div className="back-hero">
        <img src={logo} alt="Logo" className="back-logo" />
      </div>

      {/* Info */}
      <section className="back-info">
        <h4 className="back-tagline">Photographer • Natural Light</h4>

        {/* Portfolio links */}
        <ul className="back-services">
          <li>
            <a href="/portraits">Portraits</a>
          </li>
          <li>
            <a href="/weddings">Weddings</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/lifestyle">Lifestyle</a>
          </li>
        </ul>

        {/* Contact details */}
        <div className="back-contact">
          <p>123 Main Street, Poulsbo, WA</p>
          <p>(360) 555-1234</p>
        </div>
      </section>
    </main>
  );
}
export default BackBusinessCard;
