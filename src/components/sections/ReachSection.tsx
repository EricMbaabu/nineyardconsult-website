import { SectionHead } from "@/components/ui/SectionHead";
import { REACH_TAGS } from "@/lib/constants";

export function ReachSection() {
  return (
    <section className="reach">
      <div className="wrap">
        <SectionHead
          label="Multi-Sector Reach"
          title="Our Network Cuts Across"
          center
        />
        <p className="reach-intro rv rv-d1">
          Our experience and partnerships span every major sector driving
          Africa&apos;s economic transformation.
        </p>
        <div className="reach-tags rv rv-d2">
          {REACH_TAGS.map((tag) => (
            <div key={tag} className="reach-tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
