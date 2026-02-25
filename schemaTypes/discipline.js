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
          { title: '✨ Sparkles (Karaté)', value: 'Sparkles' },
          { title: '⭕ CircleDot (Viet Vo Dao)', value: 'CircleDot' },
          { title: '🛡 Shield (Aïkido)', value: 'Shield' },
          { title: '💨 Wind (Tai Chi / Qi Gong)', value: 'Wind' },
          { title: '⚔️ Swords (Épée)', value: 'Swords' },
          { title: '✋ Hand (Wutao)', value: 'Hand' },
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
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
    }
  ]
}