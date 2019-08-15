const ConceptCardList = () => import('./ConceptCardList')
const ConceptCard = () => import('./ConceptCard')

export default [
  {
    path: '/concept-card-list',
    component: ConceptCardList,
    name: 'ConceptCardList',
    props: true
  },
  {
    path: '/concept-card/:id',
    component: ConceptCard,
    name: 'ConceptCard',
    props: true
  }
]
