export default {
  name: 'discipline',
  title: 'Disciplines',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom de la discipline',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'icone',
      title: 'Icône',
      type: 'string',
      options: {
        list: [
          { title: '🛡 Shield (Karaté Shotokan)', value: 'Shield' },
          { title: '💨 Wind (Tai Chi - main nue)', value: 'Wind' },
          { title: '⚔️ Swords (Tai Chi - épée)', value: 'Swords' },
          { title: '🌿 Leaf (Qi Gong)', value: 'Leaf' },
          { title: '🌊 Waves (Wutao)', value: 'Waves' },
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
  name: 'professeur',
  title: 'Professeur',
  type: 'string',
  options: {
    list: [
      { title: 'Stéphanie Lamoureux', value: 'StephanieLamoureux' },
      { title: 'Myriam Reuter', value: 'MyriamReuter' },
      { title: 'Alexandre Houze', value: 'AlexandreHouze' },
      { title: 'Jérémie Sigalat', value: 'JeremieSigalat' },
      { title: 'Sylvaine Colas', value: 'SylvaineColas' },
      ]
    }
    },
    {
      name: 'niveaux',
      title: 'Niveaux acceptés',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Débutant', value: 'debutant' },
          { title: 'Intermédiaire', value: 'intermediaire' },
          { title: 'Expert', value: 'expert' },
          { title: 'Tous niveaux', value: 'tous' }
        ]
      }
    },
    {
      name: 'ages',
      title: 'Âges acceptés',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '6/8 ans', value: '6-8ans' },
          { title: '9/12 ans', value: '9-12ans' },
          { title: '13 ans et +', value: '13ansEtPlus' },
          { title: '14 ans et +', value: '14ansEtPlus' },
          { title: 'Adultes', value: 'adultes' },
        ]
      }
    },
    {
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
    }
  ]
}