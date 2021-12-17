export default [
    {
        path: '',
        component: () => import('../layouts/AppLayout.vue'),
        children: [
          {
            path: '/',
            name: 'home',
            meta: { allowGuest: true },
            component: () => import('../pages/home')
          },
          {
            path: '/login',
            name: 'login',
            meta: { allowGuest: true },
            component: () => import('../pages/auth/login')
          },
          {
            path: '/cadastro',
            name: 'cadastro',
            meta: { allowGuest: true },
            component: () => import('../pages/auth/register')
          }
        ]
      },
]
