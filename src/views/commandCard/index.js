const CommandCardList = () => import('./CommandCardList')
const CommandCard = () => import('./CommandCard')

export default [
  {
    path: '/command-card-list',
    component: CommandCardList,
    name: 'CommandCardList',
    props: true
  },
  {
    path: '/command-card/:id',
    component: CommandCard,
    name: 'CommandCard',
    props: true
  }
]
