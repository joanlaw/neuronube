export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Neuronube",
  description: "Soporte IT de Alta Calidad para Empresas Modernas",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Soluciones",
      href: "/soluciones",
    },
  /*  {
      label: "Docs",
      href: "/docs",
    }, */
   /* {
      label: "Pricing",
      href: "/pricing",
    }, */
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Nosotros",
      href: "/about",
    }

  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    facebook: "https://www.facebook.com/Neuronube"
  },
};
