import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <section className="site-footer__about" id="about" aria-labelledby="footer-about-title">
            <p className="eyebrow">IELTS Buddy</p>
            <h2 id="footer-about-title">English practice with a clear path forward.</h2>
            <p>
              IELTS Buddy brings mock-test practice and practical English
              resources together to help you prepare with confidence.
            </p>
          </section>

          <nav className="site-footer__links" aria-label="Footer">
            <h2>Explore</h2>
            <Link href="/ielts">IELTS Full Mock</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/#about">About</Link>
          </nav>

          <section className="site-footer__contact" id="contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title">Get in touch</h2>
            <p>
              Have a question or feedback? We&apos;d love to hear from you.
              Start with a practice session or browse the learning resources.
            </p>
            <Link className="site-footer__contact-link" href="/ielts">
              Explore IELTS practice <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>

        <div className="site-footer__bottom">
          <span>© IELTS Buddy</span>
          <span>Made for learners, one step at a time.</span>
        </div>
      </div>
    </footer>
  );
}
