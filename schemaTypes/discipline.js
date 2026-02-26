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
      name: 'icone',
      title: 'Icône',
      type: 'string',
      options: {
        list: [
          { title: '🛡 Shield (Karaté Shotokan)', value: 'Shield' },
          { title: '⚔️ Swords (Viet Vo Dao / Épée)', value: 'Swords' },
          { title: '💨 Wind (Tai Chi)', value: 'Wind' },
          { title: '🌿 Leaf (Qi Gong)', value: 'Leaf' },
          { title: '🌊 Waves (Wutao)', value: 'Waves' },
          { title: '✋ Hand (Aïkido)', value: 'Hand' },
          { title: '⭕ CircleDot (Épée)', value: 'CircleDot' },
          { title: '✨ Sparkles', value: 'Sparkles' },
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
      name: 'horaires',
      title: 'Horaires (ex: Mardi et Jeudi de 18h30 à 20h00)',
      type: 'string',
    },
    {
      // Option C : liste prédéfinie + saisie libre
      // La responsable choisit dans la liste OU tape un nouveau nom
      name: 'professeur',
      title: 'Professeur',
      type: 'string',
      options: {
        list: [
          { title: 'Stéphanie Lamoureux', value: 'Stéphanie Lamoureux' },
          { title: 'Myriam Reuter', value: 'Myriam Reuter' },
          { title: 'Alexandre Houze', value: 'Alexandre Houze' },
          { title: 'Jérémie Sigalat', value: 'Jérémie Sigalat' },
          { title: 'Sylvaine Colas', value: 'Sylvaine Colas' },
        ]
      }
      // Sans "layout: 'radio'", Sanity affiche un menu déroulant
      // ET permet de taper une valeur libre si elle n'est pas dans la liste
    },
    {
      // Option C : tableau de strings avec liste prédéfinie
      // La responsable coche les niveaux existants
      // ET peut cliquer "Add item" pour en saisir un nouveau librement
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
      // Même principe pour les âges
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