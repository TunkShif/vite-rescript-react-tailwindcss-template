// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import LogoSvg from "./logo.svg";

var logo = LogoSvg;

import './App.css'
;

function App(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  return React.createElement("div", {
              className: "App"
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("div", {
                      className: "space-y-6"
                    }, React.createElement("p", undefined), React.createElement("p", {
                          className: "group"
                        }, "Hello ", React.createElement("span", {
                              className: "group-hover:text-green-300"
                            }, "Vite"), " + ", React.createElement("span", {
                              className: "group-hover:text-red-400"
                            }, "ReScript"), " + ", React.createElement("span", {
                              className: "group-hover:text-blue-400"
                            }, "React"), " + ", React.createElement("span", {
                              className: "group-hover:text-blue-400"
                            }, "TailwindCSS")), React.createElement("p", undefined, React.createElement("button", {
                              className: "py-2 px-4 bg-blue-400 rounded-md shadow-md hover:bg-blue-500",
                              type: "button",
                              onClick: (function (_e) {
                                  return Curry._1(setCount, (function (count) {
                                                return count + 1 | 0;
                                              }));
                                })
                            }, "count is: " + String(match[0]))), React.createElement("p", {
                          className: "space-x-2"
                        }, React.createElement("span", undefined, "Edit"), React.createElement("code", {
                              className: "px-2 bg-gray-50 text-gray-600 rounded-md"
                            }, "App.res"), React.createElement("span", undefined, "and save to test HMR updates.")), React.createElement("p", undefined, React.createElement("a", {
                              className: "App-link hover:underline",
                              href: "https://reactjs.org",
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, "Learn React"), " | ", React.createElement("a", {
                              className: "App-link hover:underline",
                              href: "https://vitejs.dev/guide/features.html",
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, "Vite Docs"), " | ", React.createElement("a", {
                              className: "App-link hover:underline",
                              href: "https://rescript-lang.org/",
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, "Learn ReScript"), " | ", React.createElement("a", {
                              className: "App-link hover:underline",
                              href: "https://tailwindcss.com/docs",
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, "TailwindCSS Docs")))));
}

var make = App;

export {
  logo ,
  make ,
  
}
/* logo Not a pure module */