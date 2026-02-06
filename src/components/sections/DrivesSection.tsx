import { SectionHead } from "@/components/ui/SectionHead";
import { DRIVES_VALUES } from "@/lib/constants";

export function DrivesSection() {
  return (
    <section className="drives">
      <div className="wrap">
        <SectionHead
          label="What Drives Us"
          title="Always Proud Of"
          center
        />
        <div className="drives-grid">
          {DRIVES_VALUES.map((value, i) => (
            <div
              key={value.title}
              className={`drive-card rv${i > 0 ? ` rv-d${i}` : ""}`}
            >
              <div className="drive-line" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
