const navBarLinks = [
  {
    name: "contact",
    href: "/contact",
    id: 5,
    subLinks: [],
    title: "צרו קשר",
  },
  {
    name: "blog",
    href: "/blog",
    id: 5,
    subLinks: [],
    title: "בלוג",
  },
  {
    name: "projects",
    href: "/projects",
    id: 4,
    subLinks: [],
    title: "פרויקטים",
  },
  {
    name: "services",
    href: "/services",
    id: 3,
    subLinks: [
      {
        name: "seo",
        href: "/services/seo",
        id: 3,
        title: "קידום אתרים",
      },
      {
        name: "branding",
        href: "/services/branding",
        id: 2,
        title: "מיתוג",
      },
      {
        name: "web",
        href: "/services/web",
        isActive: false,
        id: 1,
        title: "בניית אתרים",
      },
    ],
    title: "שירותים",
  },
  {
    name: "about",
    href: "/about",
    id: 2,
    subLinks: [],
    title: "אודות",
  },
  {
    name: "home",
    href: "/",
    id: 1,
    subLinks: [],
    title: "עמוד הבית",
  },
];

export default navBarLinks;
