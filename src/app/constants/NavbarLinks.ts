const navBarLinks = [
  {
    name: "contact",
    href: "/contact",
    id: 1,
    subLinks: [],
    title: "צרו קשר",
  },
  {
    name: "blog",
    href: "/blog",
    id: 2,
    subLinks: [],
    title: "בלוג",
  },
  {
    name: "projects",
    href: "/projects",
    id: 3,
    subLinks: [],
    title: "פרויקטים",
  },
  {
    name: "services",
    href: "/services",
    id: 4,
    subLinks: [
      {
        name: "web",
        href: "/services/web",
        isActive: false,
        id: 5,
        title: "בניית אתרים",
      },
      {
        name: "branding",
        href: "/services/branding",
        id: 6,
        title: "מיתוג",
      },
      {
        name: "seo",
        href: "/services/seo",
        id: 7,
        title: "קידום אתרים",
      },
    ],
    title: "שירותים",
  },
  {
    name: "about",
    href: "/about",
    id: 8,
    subLinks: [],
    title: "אודות",
  },
  {
    name: "home",
    href: "/",
    id: 9,
    subLinks: [],
    title: "עמוד הבית",
  },
];

export default navBarLinks;
