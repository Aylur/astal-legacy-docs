import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Astal",
  description: "Legacy Documentation website of the Astal project",

  outDir: "./dist",
  base: "/astal-legacy-docs/",
  cleanUrls: true,

  lastUpdated: true,

  head: [["link", { rel: "icon", href: "/astal/icon.svg" }]],

  themeConfig: {
    logo: "/icon.svg",
    outline: "deep",

    footer: {
      message: "Released under the LGPL v2.1 License",
      copyright: "Logo is created by VDawg",
    },

    nav: [
      {
        text: "Legacy Guide",
        link: "/guide/getting-started/installation",
        activeMatch: "/guide/",
      },
      { text: "New Documentation", link: "https://aylur.github.io/astal/" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        base: "/guide/getting-started",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Installation", link: "/installation" },
          { text: "Supported Languages", link: "/supported-languages" },
        ],
      },
      {
        text: "TypeScript",
        base: "/guide/typescript",
        collapsed: true,
        items: [
          { text: "Installation", link: "/installation" },
          { text: "First Widgets", link: "/first-widgets" },
          { text: "Theming", link: "/theming" },
          { text: "CLI and App", link: "/cli-app" },
          { text: "Widget", link: "/widget" },
          { text: "Variable", link: "/variable" },
          { text: "Binding", link: "/binding" },
          { text: "GObject", link: "/gobject" },
          { text: "Utilities", link: "/utilities" },
          { text: "FAQ", link: "/faq" },
          { text: "Examples", link: "/examples" },
        ],
      },
      {
        text: "Lua",
        base: "/guide/lua",
        collapsed: true,
        items: [
          { text: "Installation", link: "/installation" },
          { text: "First Widgets", link: "/first-widgets" },
          { text: "Theming", link: "/theming" },
          { text: "CLI and App", link: "/cli-app" },
          { text: "Widget", link: "/widget" },
          { text: "Variable", link: "/variable" },
          { text: "Binding", link: "/binding" },
          // { text: "GObject", link: "/gobject" },
          { text: "Utilities", link: "/utilities" },
          // { text: "FAQ", link: "/faq" },
          { text: "Examples", link: "/examples" },
        ],
      },
      {
        text: "Libraries",
        collapsed: true,
        items: [
          { text: "References", link: "/guide/libraries/references" },
          { text: "IO", link: "https://aylur.github.io/libastal/io" },
          { text: "Astal3", link: "https://aylur.github.io/libastal/astal3" },
          { text: "Astal4", link: "https://aylur.github.io/libastal/astal4" },
          { text: "Apps", link: "/guide/libraries/apps" },
          { text: "Auth", link: "/guide/libraries/auth" },
          { text: "Battery", link: "/guide/libraries/battery" },
          { text: "Bluetooth", link: "/guide/libraries/bluetooth" },
          { text: "Cava", link: "/guide/libraries/cava" },
          { text: "Greet", link: "/guide/libraries/greet" },
          { text: "Hyprland", link: "/guide/libraries/hyprland" },
          { text: "Mpris", link: "/guide/libraries/mpris" },
          { text: "Network", link: "/guide/libraries/network" },
          { text: "Notifd", link: "/guide/libraries/notifd" },
          { text: "PowerProfiles", link: "/guide/libraries/powerprofiles" },
          { text: "River", link: "/guide/libraries/river" },
          { text: "Tray", link: "/guide/libraries/tray" },
          { text: "WirePlumber", link: "/guide/libraries/wireplumber" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/aylur/astal" },
      { icon: "discord", link: "https://discord.gg/CXQpHwDuhY" },
    ],

    search: {
      provider: "local",
    },
  },
});
