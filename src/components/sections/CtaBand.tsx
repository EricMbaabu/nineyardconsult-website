import Image from "next/image";

export function CtaBand() {
  return (
    <div className="cta-band">
      <div className="wrap">
        <Image
          src="/logo.jpg"
          alt="Nineyard Consult"
          width={600}
          height={200}
          className="cta-logo rv vis"
        />
        <h2 className="rv">
          Connecting Ideas, Markets,
          <br />
          &amp; <em>Partnerships</em>
        </h2>
        <p className="rv rv-d1">
          Ready to put your product, service, or solution on the African map?
        </p>
        <a href="#contact" className="btn-brand rv rv-d2">
          Let&apos;s Talk
        </a>
      </div>
    </div>
  );
}
