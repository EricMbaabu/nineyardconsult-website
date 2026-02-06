import { SectionHead } from "@/components/ui/SectionHead";
import { CONTACT_INFO, APPROACH_STEPS } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <SectionHead
          label="Get In Touch"
          title="Start the Conversation"
          description="Let&apos;s discuss how we can help you navigate, enter, and win in African markets."
          center
        />
        <div className="con-grid">
          <div className="con-card rv">
            <h3>Contact Information</h3>
            <div className="con-items">
              <div className="con-item">
                <div className="con-ico">&#9993;</div>
                <div>
                  <label>Email</label>
                  <div className="v">
                    <a href={`mailto:${CONTACT_INFO.email}`}>
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="con-item">
                <div className="con-ico">&#9742;</div>
                <div>
                  <label>Phone</label>
                  {CONTACT_INFO.phones.map((phone) => (
                    <div key={phone} className="v">
                      {phone}
                    </div>
                  ))}
                </div>
              </div>
              <div className="con-item">
                <div className="con-ico">in</div>
                <div>
                  <label>LinkedIn</label>
                  <div className="v">
                    <a
                      href={CONTACT_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CONTACT_INFO.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="con-card rv rv-d1">
            <h3>Our Approach</h3>
            <div className="steps">
              {APPROACH_STEPS.map((step) => (
                <div key={step.number} className="step">
                  <div className="step-n">{step.number}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
