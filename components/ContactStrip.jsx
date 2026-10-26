import { business } from "@/lib/data";

export default function ContactStrip() {
  const items = [
    { label: "SERVING", value: "HETHERSETT & LOCAL AREAS" },
    { label: "CALL", value: business.phone, href: business.phoneHref },
    { label: "EMAIL", value: business.email, href: business.emailHref },
  ];
  return (
    <section className="strip" aria-label="Contact details">
      <div className="wrap strip-grid">
        {items.map((it) => {
          const Tag = it.href ? "a" : "div";
          return (
            <Tag key={it.label} className="strip-item" {...(it.href ? { href: it.href } : {})}>
              <small>{it.label}</small>
              <strong>{it.value}</strong>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
