import { SectionHead } from "@/components/ui/SectionHead";
import { PAN_AFRICAN_FEATURES } from "@/lib/constants";

export function PanAfricanSection() {
  return (
    <section className="pan" id="advantage">
      <div className="pan-tex" />
      <div className="wrap">
        <SectionHead label="Our Edge" title="The Pan-African Advantage" />
        <div className="pan-layout">
          <div className="pan-left">
            <div className="big-num rv">15+</div>
            <div className="big-label rv rv-d1">
              African countries with deep local intelligence
            </div>
            <p className="rv rv-d2">
              Whether you&apos;re a local enterprise looking to scale regionally
              or a global brand entering Africa for the first time, we help you
              navigate complex markets with cultural intelligence and commercial
              clarity.
            </p>
          </div>
          <div className="pan-features">
            {PAN_AFRICAN_FEATURES.map((feat, i) => (
              <div
                key={feat.title}
                className={`pan-feat rv${i > 0 ? ` rv-d${i}` : ""}`}
              >
                <div className="pan-feat-ico">{feat.icon}</div>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
