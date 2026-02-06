import { AfricaMapOutline } from "@/components/svg/AfricaMapOutline";
import { ArrowRightIcon } from "@/components/svg/ArrowRightIcon";
import { HERO_STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-tex" />
      <AfricaMapOutline className="hero-africa" />
      <div className="hero-inner">
        <div className="hero-label rv vis rv-d1">
          <span className="dot" />
          Boutique Advisory &middot; Pan-African Reach
        </div>
        <h1 className="rv vis rv-d2">
          We don&apos;t just build strategies &mdash; we{" "}
          <em>open up Africa</em> for&nbsp;you.
        </h1>
        <p className="hero-sub rv vis rv-d3">
          A boutique strategy and business development advisory firm, catalyzing
          growth for African businesses and sustainable innovations &mdash;
          bridging the gap between ideas and scalable impact.
        </p>
        <div className="hero-ctas rv vis rv-d4">
          <a href="#services" className="btn-brand">
            What We Do <ArrowRightIcon />
          </a>
          <a href="#contact" className="btn-ghost">
            Get In Touch
          </a>
        </div>
        <div className="hero-stat-row rv vis rv-d5">
          {HERO_STATS.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
