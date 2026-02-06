import { AfricaMapDetailed } from "@/components/svg/AfricaMapDetailed";

export function WhoWeAreSection() {
  return (
    <section className="who" id="who">
      <div className="wrap">
        <div className="who-grid">
          <div className="who-text">
            <div className="s-head rv">
              <span className="s-label">Who We Are</span>
              <h2>Catalyzing Growth Across&nbsp;Africa</h2>
            </div>
            <blockquote className="rv rv-d1">
              At Nineyard Consult, we operate at the intersection of commercial
              strategy, access to funding, and implementation support.
            </blockquote>
            <p className="rv rv-d2">
              We know the pulse of African markets. Our strength lies in putting
              your product, service, or solution on the African map &mdash;
              across sectors, across borders, with precision and speed.
            </p>
            <p className="rv rv-d3">
              A belief that local solutions can scale with the right strategy and
              partnerships. A passion for translating development goals into
              bankable business models. A commitment to collaborative growth,
              where our success is tied to our clients&apos; impact.
            </p>
          </div>
          <div className="who-visual rv rv-d2">
            <div className="who-map">
              <AfricaMapDetailed />
              <div className="badge b1">
                <div className="ico">15+</div> Countries
              </div>
              <div className="badge b2">
                <div className="ico">JV</div> Ready Partners
              </div>
              <div className="badge b3">
                <div className="ico">&#9728;</div> CleanTech
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
