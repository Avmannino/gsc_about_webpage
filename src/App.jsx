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

            <div className="heading-line heading-line--vertical" />

            <h1>About The Club</h1>
          </div>
        </section>

        <section className="intro-section section-padding">
          <div className="content-container intro-layout">
            <div className="intro-content">
              <p className="section-label">Founded in 1954</p>

              <h2>
                A Community
                <br />
                Built Around the Ice
              </h2>

              <div className="heading-line heading-line--dark" />

              <p>
                Founded in 1954, Greenwich Skating Club is a
                private, member-based club where families and
                friends can spend time together both on and off
                the ice.
              </p>

              <p>
                More than 250 families call GSC home, creating a
                close-knit community centered around skating,
                hockey, and shared traditions. With programs for
                children and adults, the club continues to bring
                people together and strengthen the sense of
                community that has defined GSC for generations.
              </p>

              <a
                className="inline-link"
                href={`${SITE_BASE}/club-history`}
              >
                Explore club history
                <ArrowIcon />
              </a>
            </div>

            <figure className="intro-image">
              <div className="intro-image-accent" />

              <img
                src={IMAGES.youthHockey}
                alt="Greenwich Skating Club youth hockey players"
              />
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
                href={`${SITE_BASE}/prospective-members`}
              >
                Prospective members
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
    </div>
  );
}

export default App;