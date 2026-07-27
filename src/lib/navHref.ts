/** True for mailto, tel, and absolute http(s) links — use `<a>` instead of Next `<Link>`. */
export function isExternalNavHref(href: string): boolean {
  return /^(mailto:|tel:|https?:)/i.test(href);
}

export function externalNavLinkProps(href: string) {
  if (href.startsWith("http")) {
    return { target: "_blank" as const, rel: "noopener noreferrer" };
  }
  return {};
}
