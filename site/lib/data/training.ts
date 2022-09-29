export type TrainingClass = {
  id: string
  date: string
  featuredImage: string
  title: string
  description: string
  video: {
    html: string
    title: string
  }
  intensity: string
  level: string
  duration: string
  type: string
  instructor: string
  equipment: string[]
}

const trainingClasses: TrainingClass[] = [
  {
    id: 'abc',
    date: '25 August 2022',
    featuredImage: '/assets/images/tough.jpeg',
    title: 'lorem lipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan eros id sem cursus tincidunt. Proin vestibulum ante et orci volutpat, id eleifend est fermentum. Nulla a neque eu orci interdum bibendum congue vel tortor. Donec iaculis tincidunt enim, sed congue leo molestie facilisis. Ut tristique orci porttitor nunc porttitor, eu lobortis lorem facilisis. Nam vitae lacinia tortor. Praesent ullamcorper, ligula ac lobortis egestas, erat leo bibendum justo, et pretium erat elit in mauris.<br/><br/>Praesent pretium est neque, sit amet auctor est rhoncus et. Sed tempor vitae sem a posuere.',
    video: {
      html: '<iframe width="1239" height="697" src="https://www.youtube.com/embed/aYg4CeY63MA" title="[EN] 20min STANDING ABS HOME WALKING (SWEAT💦) l No Equipment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title: 'video',
    },
    intensity: 'HIIT',
    level: '2',
    duration: '45 Mins',
    type: 'Cardio',
    instructor: 'Steffan',
    equipment: [],
  },
]

export default trainingClasses
