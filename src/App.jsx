import logo from "./assets/logo.png";
import heroClubhouse from "./assets/hero-clubhouse.jpg";

const SITE_BASE = "https://wingsarenact.wixstudio.com/gscnewsite";

/*
  These are currently using the Wix-hosted images from the GSC site.

  You can replace any of these URLs later with your own local image imports
  or different Wix-hosted image URLs.
*/
const IMAGES = {
  logo,

  hero: heroClubhouse,

  youthHockey:
    "https://static.wixstatic.com/media/259539_a2d7d00757614510a7f008581640c350~mv2.jpg",

  clubhouse:
    "https://static.wixstatic.com/media/259539_5d9585befb0749cebe1b895f052c6aa4~mv2.jpg",
};

function ArrowIcon() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/*
  UPDATE THIS ONE VALUE when the final public GSC
  Wix domain is connected.

  Every internal footer link below is built from
  this base URL.
*/
const FOOTER_SITE_URL = "https://www.greenwichskatingclub.com";

const MEMBER_LOGIN_URL = "https://www.greenwichskatingclub.org/login";

const ADMISSIONS_EMAIL = "gscadmissions@greenwichskatingclub.org";

const ADMISSIONS_PHONE = "(203) 622-9583";

const exploreGroups = [
  {
    title: "About",
    links: [
      { label: "About GSC", href: `${FOOTER_SITE_URL}/about` },
      { label: "Club History", href: `${FOOTER_SITE_URL}/history` },
      { label: "Board of Governors", href: `${FOOTER_SITE_URL}/board` },
      { label: "GSC Alumni", href: `${FOOTER_SITE_URL}/alumni` },
    ],
  },
  {
    title: "Membership",
    links: [
      {
        label: "Admissions Process",
        href: `${FOOTER_SITE_URL}/admissions`,
      },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Learn to Skate", href: `${FOOTER_SITE_URL}/learn-to-skate` },
      { label: "Mini Mites", href: `${FOOTER_SITE_URL}/mini-mites` },
      {
        label: "Youth Travel Hockey",
        href: `${FOOTER_SITE_URL}/youth-travel-hockey`,
      },
      {
        label: "Stateline Girls Hockey",
        href: `${FOOTER_SITE_URL}/stateline-girls-hockey`,
      },
      { label: "Figure Skating", href: `${FOOTER_SITE_URL}/figure-skating` },
      { label: "Adult Hockey", href: `${FOOTER_SITE_URL}/adult-hockey` },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Map & Directions", href: `${FOOTER_SITE_URL}/directions` },
      { label: "Contact Form", href: `${FOOTER_SITE_URL}/contact` },
    ],
  },
];

function FooterArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function FooterPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="
          M20 10
          c0 5-8 11-8 11
          S4 15 4 10
          a8 8 0 1 1 16 0Z
        "
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function FooterPhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="icon-fill" cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

function FooterLogo() {
  return (
    <a
      className="footer-logo"
      href={FOOTER_SITE_URL}
      target="_top"
      aria-label="Greenwich Skating Club home"
    >
      <img src={IMAGES.logo} alt="Greenwich Skating Club" />
    </a>
  );
}

function ExploreMenu() {
  return (
    <nav className="footer-menu" aria-label="Footer navigation">
      <h2>Explore</h2>

      <div className="footer-menu__groups">
        {exploreGroups.map((group) => (
          <div className="footer-menu__group" key={group.title}>
            <h3 className="footer-menu__group-title">{group.title}</h3>

            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_top">
                    <span>{link.label}</span>
                    <FooterArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

function ConnectPanel() {
  return (
    <section className="footer-connect" aria-labelledby="connect-title">
      <div className="footer-connect__info">
        <h2 id="connect-title">Connect</h2>

        <p>
          Questions about joining Greenwich Skating Club or visiting the
          rink?
        </p>

        <div className="footer-connect__details">
          <a href={`${FOOTER_SITE_URL}/directions`} target="_top">
            <FooterPinIcon />
            <span>Cardinal Road · Greenwich, Connecticut</span>
          </a>

          <a href={`mailto:${ADMISSIONS_EMAIL}`}>
            <EmailIcon />
            <span>{ADMISSIONS_EMAIL}</span>
          </a>

          <a href={`tel:+1${ADMISSIONS_PHONE.replace(/\D/g, "")}`}>
            <FooterPhoneIcon />
            <span>Phone: {ADMISSIONS_PHONE}</span>
          </a>
        </div>

        <a className="member-button" href={MEMBER_LOGIN_URL} target="_blank" rel="noreferrer">
          <span>Member Login</span>
          <FooterArrowIcon />
        </a>

        <a
          className="instagram-link"
          href="https://www.instagram.com/thegreenwichskatingclub/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
          <span>Follow GSC on Instagram</span>
        </a>
      </div>

      <div className="footer-map">
        <iframe
          title="Greenwich Skating Club location"
          src="https://www.google.com/maps?q=Greenwich+Skating+Club,+Cardinal+Road,+Greenwich,+CT&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__accent" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="site-footer__rings" aria-hidden="true" />

      <div className="footer-container site-footer__main">
        <section className="footer-brand" aria-label="Greenwich Skating Club">
          <FooterLogo />
        </section>

        <ExploreMenu />

        <ConnectPanel />
      </div>

      <div className="site-footer__bottom">
        <div className="footer-container site-footer__bottom-inner">
          <p>© {currentYear} Greenwich Skating Club</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <main>
        <section
          className="about-hero"
          style={{
            "--about-hero-image": `url("${IMAGES.hero}")`,
          }}
        >
          <div className="about-hero-overlay" />

          <div className="content-container about-hero-content">
            <img
              className="about-hero-crest"
              src={IMAGES.logo}
              alt="Greenwich Skating Club crest"
            />

            <h1>About The Club</h1>
          </div>
        </section>

        <section className="intro-section section-padding">
          <div className="content-container intro-layout">
            <div className="intro-content">
              <h2>
                A Community
                <br />
                Built Around the Ice
              </h2>

              <div className="heading-line heading-line--dark" />

              <p>
                Greenwich Skating Club (GSC) is a member-based
                club that offers endless opportunities for
                families and friends—both new and old—to
                connect, have fun, and enjoy ice sports together.
                Founded in 1954 and conveniently located on
                Cardinal Road near Greenwich High School, GSC is
                home to a community of 250 families. Members
                enjoy access to a private rink and a recently
                renovated clubhouse featuring a pro shop,
                fireplaces, coaching rooms, and a snack bar,
                along with exceptional access to ice time that is
                simply not available through most other programs.
              </p>

              <p>
                GSC offers programming for children and adults of
                all ages, including weekend general skating
                sessions, travel hockey teams for boys ages 6–14
                and girls ages 6–19, Learn-to-Play Hockey and Mini
                Mites programs, the Cardinal Road Adult Hockey
                League with six teams and more than 120 players,
                free Stick-and-Puck sessions during holiday
                breaks, figure skating lessons beginning at age 3,
                curling, and a variety of family parties and
                social gatherings throughout the year.
              </p>

              <p>
                If you are not currently a member and are
                interested in joining, please email{" "}
                <strong>
                  <a href="mailto:gscadmissions@greenwichskatingclub.org">
                    gscadmissions@<wbr />greenwichskatingclub.org
                  </a>
                </strong>
                .
              </p>
            </div>

            <figure className="intro-image">
              <div className="intro-image-accent" />

              <img
                src={IMAGES.youthHockey}
                alt="Greenwich Skating Club youth hockey players"
              />

              <a
                className="inline-link"
                href={`${SITE_BASE}/club-history`}
              >
                Explore club history
                <ArrowIcon />
              </a>
            </figure>
          </div>
        </section>

        <section className="facts-section">
          <div className="content-container facts-grid">
            <article className="fact">
              <div className="fact-icon">
                <CalendarIcon />
              </div>

              <div>
                <strong>1954</strong>
                <span>Club founded</span>
              </div>
            </article>

            <article className="fact">
              <div className="fact-icon">
                <UsersIcon />
              </div>

              <div>
                <strong>250+</strong>
                <span>Member families</span>
              </div>
            </article>

            <article className="fact fact--contact">
              <div className="fact-icon">
                <PinIcon />
              </div>

              <div>
                <strong>15 Cardinal Road, Greenwich, CT 06830</strong>
                <span>(203) 622-9583</span>
              </div>
            </article>
          </div>
        </section>

        <section className="membership-section section-padding">
          <div className="content-container membership-layout">
            <article className="membership-card">
              <p className="section-label section-label--light">
                Membership
              </p>

              <h2>Interested in Joining GSC?</h2>

              <div className="heading-line" />

              <p>
                Greenwich Skating Club is a private,
                member-based club. Prospective members can learn
                more about the application process, membership
                requirements, and the steps involved in joining.
              </p>

              <a
                className="light-button"
                href={`${FOOTER_SITE_URL}/admissions`}
              >
                Admissions Process
                <ArrowIcon />
              </a>
            </article>

            <figure className="clubhouse-image">
              <img
                src={IMAGES.clubhouse}
                alt="Greenwich Skating Club clubhouse interior"
              />
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;