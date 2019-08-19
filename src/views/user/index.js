const Login = () => import('./Login')

export default [
  {
    path: '/login',
    component: Login,
    name: 'UserLogin',
    props: true
  }
]
