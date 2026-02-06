import Image from "next/image";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-inner">
          <div className="foot-brand">
            <Image
              src="/logo.jpg"
              alt="Nineyard Consult"
              width={600}
              height={200}
              className="foot-brand-img"
            />
            <div>
              <div className="foot-tag">
                Connecting Ideas, Markets &amp; Partnerships
              </div>
            </div>
          </div>
          <div className="foot-copy">
            &copy; 2025 Nineyard Consult Group Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
