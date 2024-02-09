import { defineConfig } from "vitepress";
import casketfile from "./casketfile.tmLanguage.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Casket",
  description: "Documentation for Casket by tmpim, mholt's Caddy v1 but maintained",

  head: [
    ["meta", { name: "theme-color", content: "#3d63d6" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],

    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-64x64.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "128x128", href: "/favicon-128x128.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  themeConfig: {
    logo: "/logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Docs", link: "/" },
      { text: "Caddy v1", link: "https://caddy.its-em.ma" },
    ],

    sidebar: [
      {
        text: "Using Casket",
        items: [
          { text: "Casket - What & Why?", link: "/" },
          { link: "/cli", text: "Command Line Interface" },
          { link: "/casketfile", text: "Casketfile Syntax" },
          { link: "/telemetry", text: "Telemetry (disabled)" },
        ]
      },

      {
        text: "Tutorials",
        items: [
          { link: "/tutorial/", text: "Quick Start" },
          { link: "/tutorial/beginner", text: "Beginner Tutorial" },
          { link: "/tutorial/casketfile", text: "Casketfile Primer" },
        ]
      },

      {
        text: "HTTP Server",
        items: [
          { link: "/http-casketfile", text: "HTTP Casketfile" },
          { link: "/automatic-https", text: "Automatic HTTPS" },
          { link: "/mitm-detection", text: "MITM Detection" },
          { link: "/placeholders", text: "Placeholders" },
          { link: "/template-actions", text: "Template Actions" },
          {
            text: "Standard HTTP Directives",
            items: [
              { link: "/basicauth", text: "basicauth" },
              { link: "/bind", text: "bind" },
              { link: "/browse", text: "browse" },
              { link: "/errors", text: "errors" },
              { link: "/expvar", text: "expvar" },
              { link: "/ext", text: "ext" },
              { link: "/fastcgi", text: "fastcgi" },
              { link: "/gzip", text: "gzip" },
              { link: "/header", text: "header" },
              { link: "/import", text: "import" },
              { link: "/http.index", text: "index" },
              { link: "/internal", text: "internal" },
              { link: "/limits", text: "limits" },
              { link: "/log", text: "log" },
              { link: "/markdown", text: "markdown" },
              { link: "/mime", text: "mime" },
              { link: "/on", text: "on" },
              { link: "/pprof", text: "pprof" },
              { link: "/proxy", text: "proxy" },
              { link: "/push", text: "push" },
              { link: "/redir", text: "redir" },
              { link: "/request_id", text: "request_id" },
              { link: "/rewrite", text: "rewrite" },
              { link: "/root", text: "root" },
              { link: "/status", text: "status" },
              { link: "/templates", text: "templates" },
              { link: "/timeouts", text: "timeouts" },
              { link: "/tls", text: "tls" },
              { link: "/websocket", text: "websocket" },
            ]
          },
        ]
      },

      {
        text: "Plugins",
        items: [
          {
            text: "Casketfile Loaders",
            items: [
              { link: "/docker", text: "docker" },
            ]
          },
          {
            text: "DNS Providers",
            items: [
              { link: "/tls.dns.acmedns", text: "tls.dns.acmedns" },
              { link: "/tls.dns.azure", text: "tls.dns.azure" },
              { link: "/tls.dns.cloudflare", text: "tls.dns.cloudflare" },
              { link: "/tls.dns.digitalocean", text: "tls.dns.digitalocean" },
              { link: "/tls.dns.dnspod", text: "tls.dns.dnspod" },
              { link: "/tls.dns.duckdns", text: "tls.dns.duckdns" },
              { link: "/tls.dns.gandi", text: "tls.dns.gandi" },
              { link: "/tls.dns.godaddy", text: "tls.dns.godaddy" },
              { link: "/tls.dns.googlecloud", text: "tls.dns.googlecloud" },
              { link: "/tls.dns.linode", text: "tls.dns.linode" },
              { link: "/tls.dns.namecheap", text: "tls.dns.namecheap" },
              { link: "/tls.dns.namedotcom", text: "tls.dns.namedotcom" },
              { link: "/tls.dns.ovh", text: "tls.dns.ovh" },
              { link: "/tls.dns.pdns", text: "tls.dns.pdns (PowerDNS)" },
              { link: "/tls.dns.rfc2136", text: "tls.dns.rfc2136" },
              { link: "/tls.dns.route53", text: "tls.dns.route53" },
              { link: "/tls.dns.transip", text: "tls.dns.transip" },
              { link: "/tls.dns.vultr", text: "tls.dns.vultr" },
            ]
          },
          {
            text: "Directives/Middleware",
            items: [
              { link: "/http.cors", text: "http.cors" },
              { link: "/http.forwardproxy", text: "http.forwardproxy" },
              { link: "/http.geoip", text: "http.geoip" },
              { link: "/http.ipfilter", text: "http.ipfilter" },
              { link: "/http.jwt", text: "http.jwt" },
              { link: "/http.prometheus", text: "http.prometheus" },
              { link: "/http.ratelimit", text: "http.ratelimit" },
              { link: "/http.realip", text: "http.realip" },
              { link: "/http.webdav", text: "http.webdav" },
            ]
          },
          {
            text: "Event Hooks",
            items: [
              { link: "/hook.service", text: "hook.service" },
            ]
          },
          {
            text: "Server Types",
            items: [
              { link: "/dns", text: "dns" },
              { link: "/net", text: "net" },
              { link: "/supervisor", text: "supervisor" },
            ]
          },
          {
            text: "TLS Clustering",
            items: [
              { link: "/consul", text: "consul" },
              { link: "/redis", text: "redis" },
            ]
          }
        ]
      }
    ],

    editLink: {
      pattern: "https://github.com/tmpim/casket-docs/edit/master/src/:path",
      text: "Edit this page on GitHub",
    },

    lastUpdated: {},
    docFooter: {},

    search: {
      provider: "local"
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/tmpim/casket" },
    ],

    externalLinkIcon: true,
  },

  markdown: {
    languages: [casketfile as any]
  },

  ignoreDeadLinks: [
    "http://localhost:2015"
  ]
});
