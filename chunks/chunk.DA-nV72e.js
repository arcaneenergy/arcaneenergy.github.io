import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './chunk.D4nPtnRa.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const pathSplit = currentUrlPath.split("/").slice(1);
  let currentPath = "";
  const breadcrumbList = [
    {
      title: "home",
      path: "/"
    },
    ...pathSplit.map(
      (breadcrumb, index) => (currentPath += `/${breadcrumb}`, {
        title: breadcrumb,
        path: currentPath
      })
    )
  ];
  if (breadcrumbList[1].path === "/posts") {
    breadcrumbList[1].path = "/posts/1";
    if (!isNaN(+pathSplit[pathSplit.length - 1])) {
      breadcrumbList.pop();
    }
  }
  const { title } = Astro2.props;
  if (title) {
    breadcrumbList[breadcrumbList.length - 1]["title"] = title.toLocaleLowerCase();
  }
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-ilhxcym7> <ul data-astro-cid-ilhxcym7> ${breadcrumbList.map((breadcrumb, value) => renderTemplate`<li data-astro-cid-ilhxcym7> <a${addAttribute(breadcrumb["path"], "href")} data-astro-cid-ilhxcym7>${breadcrumb["title"]}</a> ${value + 1 < breadcrumbList.length && renderTemplate`<p data-astro-cid-ilhxcym7>&nbsp;/&nbsp;</p>`} </li>`)} </ul> </nav> `;
}, "/home/runner/work/website/website/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
