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
                    gscadmissions@greenwichskatingclub.org
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

              <p>
                Interested in joining? Email{" "}
                <a href="mailto:gscadmissions@greenwichskatingclub.org">
                  gscadmissions@greenwichskatingclub.org
                </a>
                .
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