const paths = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/admin", changefreq: "weekly", priority: 0.8 },
  { path: "/login", changefreq: "monthly", priority: 0.5 },
  { path: "/signup", changefreq: "monthly", priority: 0.5 },
  { path: "/reset-password", changefreq: "monthly", priority: 0.5 },
  {
    path: "/password/reset/confirm/:uid/:token",
    changefreq: "monthly",
    priority: 0.5,
  },
  { path: "/activate/:uid/:token", changefreq: "monthly", priority: 0.5 },
  { path: "/firstpage", changefreq: "weekly", priority: 0.8 },
  { path: "/second", changefreq: "weekly", priority: 0.8 },
  { path: "/about", changefreq: "monthly", priority: 0.5 },
  { path: "/facebook", changefreq: "monthly", priority: 0.5 },
  { path: "/create-news", changefreq: "monthly", priority: 0.5 },
  { path: "/news/:id", changefreq: "weekly", priority: 0.8 },
  { path: "/show-all-news", changefreq: "weekly", priority: 0.8 },
  { path: "/edit-news/:id", changefreq: "monthly", priority: 0.5 },
  { path: "/create-event", changefreq: "monthly", priority: 0.5 },
  { path: "/event/:id", changefreq: "weekly", priority: 0.8 },
  { path: "/show-all-event", changefreq: "weekly", priority: 0.8 },
  { path: "/edit-event/:id", changefreq: "monthly", priority: 0.5 },
  { path: "/fablabmakandura", changefreq: "weekly", priority: 0.8 },
  { path: "/fablabmakandura/:id", changefreq: "weekly", priority: 0.8 },
  { path: "/create-project", changefreq: "monthly", priority: 0.5 },
  { path: "/show-all-projects", changefreq: "weekly", priority: 0.8 },
  { path: "/edit-project/:id", changefreq: "monthly", priority: 0.5 },
  { path: "/industry", changefreq: "monthly", priority: 0.5 },
  { path: "/education", changefreq: "monthly", priority: 0.5 },
  { path: "/contactus", changefreq: "monthly", priority: 0.5 },
];

export default { paths };
