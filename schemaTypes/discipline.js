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
      // Option A — liste fermée avec menu déroulant
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
          { title: '⭕ CircleDot', value: 'CircleDot' },
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
      // Option B — saisie libre avec Add item
      name: 'professeurs',
      title: 'Professeurs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Cliquez sur + Add item pour ajouter un professeur',
    },
    {
      // Option B — saisie libre avec Add item
      name: 'niveaux',
      title: 'Niveaux acceptés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Suggestions : Débutant, Intermédiaire, Expert, Tous niveaux',
    },
    {
      // Option B — saisie libre avec Add item
      name: 'ages',
      title: 'Âges acceptés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Suggestions : 6-8 ans, 9-12 ans, 13 ans et +, Adultes',
    },
    {
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
    }
  ]
}