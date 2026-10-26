/** Slanted racing-style button. Works as a link (href) or a real <button>. */
export default function Button({ href, variant = "primary", children, className = "", ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        <span>{children}</span>
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      <span>{children}</span>
    </button>
  );
}
