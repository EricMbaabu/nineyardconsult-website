interface SectionHeadProps {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHead({
  label,
  title,
  description,
  center = false,
  className = "",
}: SectionHeadProps) {
  return (
    <div className={`s-head${center ? " center" : ""} rv ${className}`}>
      <span className="s-label">{label}</span>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p>{description}</p>}
    </div>
  );
}
