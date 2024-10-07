import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro } from './astro/server_DaRg_WtQ.mjs';
import 'kleur/colors';
import 'clsx';

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0)
    return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Astro = createAstro();
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  const getTagColor = (index) => {
    const colors = [
      "bg-blue-500 hover:bg-blue-600",
      "bg-green-500 hover:bg-green-600",
      "bg-indigo-500 hover:bg-indigo-600",
      "bg-purple-500 hover:bg-purple-600",
      "bg-pink-500 hover:bg-pink-600",
      "bg-red-500 hover:bg-red-600"
    ];
    return colors[index % colors.length];
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-4"> ${tags.map((tag, index) => renderTemplate`<a${addAttribute(`/articles/tag/${tag}`, "href")}${addAttribute(`
        ${getTagColor(index)}
        px-8 py-1 rounded-full text-sm font-medium text-white
        transition-all duration-200 ease-in-out
        transform hover:scale-105 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50
        ${getTagColor(index).replace("bg-", "focus:ring-")}
      `, "class")}>
#${capitalize(tag)} </a>`)} </div>`;
}, "D:/Coding Stuff Shardendu Mishra/Astro/src/components/Tags.astro", void 0);

export { $$Tags as $, capitalize as c, formatDate as f };
