
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: "/baptism", component: () => import("pages/baptism.vue") },
      { path: "/communion", component: () => import("pages/communion.vue") },
      { path: "/info", component: () => import("pages/info.vue") },
      { path: "/contact", component: () => import("pages/contact.vue") }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
