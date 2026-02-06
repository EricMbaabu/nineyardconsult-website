import { SectionHead } from "@/components/ui/SectionHead";
import { SECTORS } from "@/lib/constants";

export function SectorsSection() {
  return (
    <section className="sectors" id="sectors">
      <div className="wrap">
        <SectionHead
          label="Sectors &amp; Industries"
          title="Where We Create Impact"
          description="We thrive in areas that demand blended commercial and impact-driven solutions, especially where scale meets complexity."
          center
        />
        <div className="sec-grid">
          {SECTORS.map((sector, i) => (
            <div
              key={sector.title}
              className={`sec-card rv${i > 0 ? ` rv-d${i}` : ""}`}
            >
              <div className="sec-ico">{sector.icon}</div>
              <h4>{sector.title}</h4>
              <p>{sector.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
