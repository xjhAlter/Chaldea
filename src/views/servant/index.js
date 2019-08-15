const ServantList = () => import('./ServantList')
const Servant = () => import('./Servant')

export default [
  {
    path: '/servant-list',
    component: ServantList,
    name: 'ServantList',
    props: true
  },
  {
    path: '/servant/:id',
    component: Servant,
    name: 'Servant',
    props: true
  }
]
