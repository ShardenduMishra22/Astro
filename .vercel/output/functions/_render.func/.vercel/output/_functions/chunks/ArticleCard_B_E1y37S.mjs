import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from './astro/server_DaRg_WtQ.mjs';
import 'kleur/colors';
import { f as formatDate, $ as $$Tags } from './Tags_B-j-vdiU.mjs';

const $$Astro = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-md mx-auto mt-10"> <article class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"> <a${addAttribute(`/articles/${article.slug}`, "href")} class="block relative group"> <div class="aspect-w-16 aspect-h-9 max-h-60 overflow-hidden"> <img${addAttribute(article.data.image, "src")}${addAttribute(article.data.title, "alt")} class="w-96 h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"> </div> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div> </a> <div class="p-6"> <div class="flex justify-between items-center mb-3"> <time${addAttribute(article.data.pubDate.toISOString(), "datetime")} class="text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full"> ${formatDate(article.data.pubDate)} </time> </div> <h2 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-200"> <a${addAttribute(`/articles/${article.slug}`, "href")} class="group"> <span class="bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"> ${article.data.title} </span> </a> </h2> ${renderComponent($$result, "Tags", $$Tags, { "tags": article.data.tags })} </div> </article> </div>`;
}, "D:/Coding Stuff Shardendu Mishra/Astro/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
