const navBarLinks = [
  {
    name: "home",
    href: "/",
    id: 1,
    subLinks: [],
    title: "עמוד הבית",
  },
  {
    name: "about",
    href: "/about",
    id: 2,
    subLinks: [],
    title: "אודות",
  },
  {
    name: "services",
    href: "/services",
    id: 3,
    subLinks: [
      {
        name: "web",
        href: "/services/web",
        isActive: false,
        id: 1,
        title: "בניית אתרים",
      },
      {
        name: "branding",
        href: "/services/branding",
        id: 2,
        title: "מיתוג",
      },
      {
        name: "seo",
        href: "/services/seo",
        id: 3,
        title: "קידום אתרים",
      },
    ],
    title: "שירותים",
  },
  {
    name: "projects",
    href: "/projects",
    id: 4,
    subLinks: [],
    title: "פרויקטים",
  },
  {
    name: "blog",
    href: "/blog",
    id: 5,
    subLinks: [],
    title: "בלוג",
  },
  {
    name: "contact",
    href: "/contact",
    id: 5,
    subLinks: [],
    title: "צרו קשר",
  },
];

export default navBarLinks;
