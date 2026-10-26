import { business, navLinks } from "@/lib/data";
import { InstaIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg" aria-hidden="true">SCOOTER&apos;S</div>

      <div className="wrap">
        <div className="footer-mark">
          <strong>SCOOTER&apos;S</strong>
          <span>CAR VALETING</span>
        </div>

        <div className="footer-cols">
          <nav aria-label="Footer">
            <h4>MENU</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>GET IN TOUCH</h4>
            <ul className="footer-contact">
              <li>
                <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <InstaIcon width={18} height={18} /> {business.instagram}
                </a>
              </li>
              <li>
                <a href={business.phoneHref}>
                  <PhoneIcon width={18} height={18} /> {business.phone}
                </a>
              </li>
              <li>
                <a href={business.emailHref}>
                  <MailIcon width={18} height={18} /> {business.email}
                </a>
              </li>
              <li>
                <span>
                  <PinIcon width={18} height={18} /> {business.area}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span className="footer-line" />
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
