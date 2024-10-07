/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DaRg_WtQ.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Cr5w6wEI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_TDTgf7EI.mjs';
export { renderers } from '../renderers.mjs';

const team1 = new Proxy({"src":"/_astro/team1.DsajOKaY.png","width":1700,"height":1184,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Coding Stuff Shardendu Mishra/Astro/src/images/team1.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About Shardendu Mishra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 py-12"> <h1 class="text-5xl font-bold mb-12 text-center text-indigo-600">About Shardendu Mishra</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-16"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": team1, "alt": "Shardendu Mishra", "class": "w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105" })} </div> <div class="w-full md:w-1/2"> <h2 class="text-4xl font-bold text-gray-900 mb-6">Who I Am ?</h2> <div class="space-y-6 text-gray-700 leading-relaxed text-lg"> <p>
Hey! I'm Shardendu Mishra, a passionate full-stack developer, tech enthusiast, and current Computer Science student at IIIT Dharwad. I thrive on solving complex problems and creating innovative solutions in the web development space.
</p> <p>
From contributing to my college's website to participating in hackathons, I aim to blend creativity with technology. As an aspiring entrepreneur, I constantly push boundaries and seek ways to improve my skills and knowledge in the tech world.
</p> <p>
Whether it's coding in C++, building responsive web apps, or diving deep into Docker, I believe in staying curious, learning continuously, and leaving a meaningful impact through my work.
</p> </div> </div> </div> <!-- Team Section --> <div class="mt-24"> <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">My Core Team</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> <div class="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"> ${renderComponent($$result2, "Image", $$Image, { "src": team1, "alt": "Shardendu Mishra", "class": "w-full h-auto rounded-t-2xl" })} <div class="p-6 text-center"> <h3 class="text-2xl font-semibold text-gray-900 mb-2">Shardendu Mishra</h3> <p class="text-gray-700">Founder & Solo Developer of this Website !!</p> </div> </div> <!-- Placeholder for new members --> <div class="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"> <div class="flex items-center justify-center h-64 bg-gray-100"> <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg> </div> <div class="p-6 text-center"> <h3 class="text-2xl font-semibold text-gray-900">New Member Coming Soon!</h3> <p class="text-gray-700">Wanna become a member, <a class="text-purple-700 hover:text-purple-900 hover:font-bold duration-100 hover:duration-100" href="https://github.com/ShardenduMishra22/Project-Astro-Framework">Contribute you Blog</a></p> </div> </div> </div> </div> </div> ` })}`;
}, "D:/Coding Stuff Shardendu Mishra/Astro/src/pages/about/index.astro", void 0);

const $$file = "D:/Coding Stuff Shardendu Mishra/Astro/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
