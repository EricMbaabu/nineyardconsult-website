import { SectionHead } from "@/components/ui/SectionHead";
import { PILLARS } from "@/lib/constants";

export function PillarsSection() {
  return (
    <section className="pillars" id="services">
      <div className="wrap">
        <SectionHead
          label="What We Do"
          title="Three Pillars of Impact"
          description="We specialize in bridging the gap between ideas and scalable impact across the African continent."
          center
        />
        <div className="pill-grid">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`pill rv${i > 0 ? ` rv-d${i}` : ""}`}
            >
              <div className="pill-ico">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <ul className="pill-list">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
