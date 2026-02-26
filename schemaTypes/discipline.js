export default {
  name: 'discipline',
  title: 'Disciplines',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom complet',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'nomCourt',
      title: 'Nom court (pour les menus)',
      type: 'string',
    },
    {
      // Saisie libre — elle tape le nom de l'icône directement
      // On lui fournit la liste des icônes disponibles en description
      name: 'icone',
      title: 'Icône',
      type: 'string',
      description: 'Icônes disponibles : Shield, Swords, Wind, Leaf, Waves, Hand, CircleDot, Sparkles',
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
      name: 'horaires',
      title: 'Horaires (ex: Mardi et Jeudi de 18h30 à 20h00)',
      type: 'string',
    },
    {
      // Array de strings avec liste prédéfinie + "Add item" pour saisie libre
      name: 'professeurs',
      title: 'Professeurs',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Stéphanie Lamoureux', value: 'Stéphanie Lamoureux' },
          { title: 'Myriam Reuter', value: 'Myriam Reuter' },
          { title: 'Alexandre Houze', value: 'Alexandre Houze' },
          { title: 'Jérémie Sigalat', value: 'Jérémie Sigalat' },
          { title: 'Sylvaine Colas', value: 'Sylvaine Colas' },
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
          { title: 'Débutant', value: 'Débutant' },
          { title: 'Intermédiaire', value: 'Intermédiaire' },
          { title: 'Expert', value: 'Expert' },
          { title: 'Tous niveaux', value: 'Tous niveaux' }
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
          { title: '6/8 ans', value: '6-8 ans' },
          { title: '9/12 ans', value: '9-12 ans' },
          { title: '13 ans et +', value: '13 ans et +' },
          { title: '14 ans et +', value: '14 ans et +' },
          { title: 'Adultes', value: 'Adultes' },
        ]
      }
    },
    {
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
    }
  ]
}