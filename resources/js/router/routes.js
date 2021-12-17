export default [
    {
        path: '',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
          {
            path: '/login',
            name: 'login',
            meta: { allowGuest: true },
            component: () => import('pages/auth/login')
          },
          {
            path: '/cadastro',
            name: 'cadastro',
            meta: { allowGuest: true },
            component: () => import('pages/auth/register')
          }
        ]
      },
]
