import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as addAttribute, d as createAstro, j as renderSlot, e as renderHead } from './astro/server_DaRg_WtQ.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_TDTgf7EI.mjs';
import { HomeIcon, DocumentTextIcon, InformationCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { Code, Github, Instagram, Twitter, MapPin, Heart } from 'lucide-react';
import PropTypes from 'prop-types';

const SITE_TITLE = "Mishra Blog`s It";
const SITE_DESCRIPTION = "Articles, stories and Learning From Mishra Shardendu";
const HOMEPAGE_ARTICLE_LIMIT = 6;

const logo = new Proxy({"src":"/_astro/favicon.CrahzBCl.svg","width":792,"height":464,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Coding Stuff Shardendu Mishra/Astro/src/favicon.svg";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  let githubData = {};
  async function fetchGithubData() {
    try {
      const response = await axios.get("https://api.github.com/users/ShardenduMishra22");
      githubData = response.data;
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  }
  await fetchGithubData();
  const imageUrl = githubData.avatar_url;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white shadow-xl" data-astro-cid-5blmo7yk> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-5blmo7yk> <div class="flex items-center justify-between h-20" data-astro-cid-5blmo7yk> <div class="flex-shrink-0 hover:scale-110 duration-300" data-astro-cid-5blmo7yk> <a href="https://www.linkedin.com/in/shardendumishra22/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 group" data-astro-cid-5blmo7yk> <div class="relative" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Image", $$Image, { "src": logo, "class": "rounded-full h-12 w-12 border-2 border-indigo-400 transition-all duration-300", "alt": "Shardendu Mishra's Logo", "width": 48, "height": 48, "data-astro-cid-5blmo7yk": true })} <div class="absolute rounded-full bg-indigo-400 opacity-0 group-hover:opacity-25 transition-opacity duration-300" data-astro-cid-5blmo7yk></div> </div> <span class="text-2xl font-bold tracking-tight" data-astro-cid-5blmo7yk> <span class="px-1 text-indigo-400 group-hover:text-indigo-500 transition-colors duration-300" data-astro-cid-5blmo7yk>Mishra</span> <span class="group-hover:text-yellow-400 transition-colors duration-300" data-astro-cid-5blmo7yk>Blog's It</span> </span> </a> </div> <div class="hidden md:block" data-astro-cid-5blmo7yk> <div class="ml-10 flex items-center space-x-6" data-astro-cid-5blmo7yk> <a href="/" class="nav-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "HomeIcon", HomeIcon, { "className": "w-8 h-8 mr-2", "data-astro-cid-5blmo7yk": true })} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>Home</span> </a> <a href="/articles" class="nav-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "DocumentTextIcon", DocumentTextIcon, { "className": "w-8 h-8 mr-2", "data-astro-cid-5blmo7yk": true })} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>All Articles</span> </a> <a href="/about" class="nav-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "InformationCircleIcon", InformationCircleIcon, { "className": "w-8 h-8 mr-2", "data-astro-cid-5blmo7yk": true })} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>About</span> </a> <a href="https://www.linkedin.com/in/shardendumishra22/" target="_blank" rel="noopener noreferrer" class="nav-link" data-astro-cid-5blmo7yk> ${imageUrl && renderTemplate`<img${addAttribute(imageUrl, "src")} alt="GitHub Avatar" class="rounded-full h-8 mr-3 w-8 border-2 border-indigo-400 transition-all duration-300 hover:scale-110" data-astro-cid-5blmo7yk>`} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>LinkedIn</span> </a> </div> </div> <div class="md:hidden" data-astro-cid-5blmo7yk> <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300" aria-label="Toggle navigation" aria-expanded="false" data-astro-cid-5blmo7yk> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </div> </div> <div id="mobile-menu" class="md:hidden hidden" data-astro-cid-5blmo7yk> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-astro-cid-5blmo7yk> <a href="/" class="mobile-nav-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "HomeIcon", HomeIcon, { "className": "w-8 h-8 mr-2", "data-astro-cid-5blmo7yk": true })} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>Home</span> </a> <a href="/articles" class="mobile-nav-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "DocumentTextIcon", DocumentTextIcon, { "className": "w-8 h-8 mr-2", "data-astro-cid-5blmo7yk": true })} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>All Articles</span> </a> <a href="/about" class="mobile-nav-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "InformationCircleIcon", InformationCircleIcon, { "className": "w-8 h-8 mr-2", "data-astro-cid-5blmo7yk": true })} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>About</span> </a> <a href="https://www.linkedin.com/in/shardendumishra22/" target="_blank" rel="noopener noreferrer" class="mobile-nav-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "UserCircleIcon", UserCircleIcon, { "className": "w-8 h-8 mr-2", "data-astro-cid-5blmo7yk": true })} <span class="font-semibold text-lg" data-astro-cid-5blmo7yk>Connect with Me</span> </a> </div> </div> </nav>  `;
}, "D:/Coding Stuff Shardendu Mishra/Astro/src/components/Navbar.astro", void 0);

const FooterComponent = () => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 h-[100%] mt-40 text-gray-300 pt-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 mt-10 min-h-[calc(100vh-200px)]", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          id: "typed-element",
          className: "text-3xl font-bold text-purple-400 w-full min-w-[300px] h-[40px] overflow-hidden"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsx(SocialLink, { href: "https://leetcode.com/u/ShardenduMishra22/", icon: /* @__PURE__ */ jsx(Code, { size: 20 }), label: "LeetCode", text: "LeetCode" }),
        /* @__PURE__ */ jsx(SocialLink, { href: "https://github.com/ShardenduMishra22", icon: /* @__PURE__ */ jsx(Github, { size: 20 }), label: "GitHub", text: "GitHub" }),
        /* @__PURE__ */ jsx(SocialLink, { href: "https://www.instagram.com/shardendumishra22?igsh=NHAyZWlvODF1cWs0", icon: /* @__PURE__ */ jsx(Instagram, { size: 20 }), label: "Instagram", text: "Instagram" }),
        /* @__PURE__ */ jsx(SocialLink, { href: "https://x.com/Shardendu_M", icon: /* @__PURE__ */ jsx(Twitter, { size: 20 }), label: "Twitter", text: "Twitter" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "text-indigo-400", size: 24 }),
        /* @__PURE__ */ jsx("p", { className: "text-indigo-400 text-xl", children: "Indian Institute of Information Technology Dharwad" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xl font-semibold flex items-center", children: [
          "Made with ",
          /* @__PURE__ */ jsx(Heart, { className: "inline text-red-500 mx-2", size: 24 }),
          " by ",
          /* @__PURE__ */ jsx("strong", { className: "text-indigo-600 px-2", children: " Shardendu Mishra" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-lg font-semibold", children: [
            "Made Using",
            /* @__PURE__ */ jsx("a", { href: "https://github.com/MishraShardendu22/Important-Information/blob/main/AstroKnowledge.md", children: /* @__PURE__ */ jsx("strong", { className: "text-indigo-600 ", children: " Astro.JS" }) })
          ] }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://cdn.sanity.io/images/3do82whm/next/1c2aa4d10fe71c23d7a36f69fc11c419c5f4ac35-1000x667.png?w=960&h=640&fit=clip&auto=format",
              alt: "Astro.js Logo",
              className: "h-10 w-10 object-contain rounded-full bg-white p-1"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-sm", children: [
        "© ",
        year,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-semibold", children: "Shardendu Mishra" }),
        ". All rights reserved."
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4972.567096217221!2d75.02059907264308!3d15.392850793454533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a45986017d%3A0x98a72507dc76b7aa!2sIIIT-Dharwad%20Pond!5e0!3m2!1sen!2sin!4v1727762835442!5m2!1sen!2sin",
        width: "100%",
        height: "100%",
        style: { border: 0 },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: "IIIT Dharwad Map"
      }
    ) })
  ] }) }) });
};
const SocialLink = ({ href, icon, label, text }) => /* @__PURE__ */ jsxs(
  "a",
  {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center text-purple-400 hover:text-yellow-400 transition-colors duration-300 text-lg group",
    "aria-label": label,
    children: [
      /* @__PURE__ */ jsx("span", { className: "bg-gray-800 p-2 rounded-full group-hover:bg-purple-700 transition-colors duration-300", children: icon }),
      /* @__PURE__ */ jsx("span", { className: "ml-2 hidden sm:inline", children: text })
    ]
  }
);
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Render Only When Visible ie in viewport -->${renderComponent($$result, "FooterComponent", FooterComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Coding Stuff Shardendu Mishra/Astro/src/components/Footer.tsx", "client:component-export": "default" })}`;
}, "D:/Coding Stuff Shardendu Mishra/Astro/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-ouamjn2i> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', "><title>", '</title><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous"><\/script>', "</head> <body data-astro-cid-ouamjn2i> ", ' <section class="container mx-auto max-w-screen-xl mt-10 px-8" data-astro-cid-ouamjn2i> ', " </section> ", " </body></html>"])), addAttribute(SITE_DESCRIPTION, "content"), SITE_TITLE, renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ouamjn2i": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true }));
}, "D:/Coding Stuff Shardendu Mishra/Astro/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, HOMEPAGE_ARTICLE_LIMIT as H };
