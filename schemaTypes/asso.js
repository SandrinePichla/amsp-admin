export default {
  name: 'asso',
  title: "L'Association",
  type: 'document',
  // Document singleton — un seul document de ce type
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'titre',
      title: 'Titre de la page',
      type: 'string',
      initialValue: "L'Association",
    },
    {
      name: 'sousTitre',
      title: 'Sous-titre / accroche',
      type: 'string',
      description: 'Ex : Un club familial ouvert à tous depuis plus de 40 ans',
    },
    {
      name: 'description',
      title: 'Description principale',
      type: 'text',
      rows: 5,
      description: 'Texte de présentation général du club',
    },
    {
      name: 'anneesExistence',
      title: "Années d'existence",
      type: 'number',
      description: 'Ex : 40',
    },
    {
      name: 'nbAdherents',
      title: 'Nombre d\'adhérents (fourchette)',
      type: 'string',
      description: 'Ex : 40 à 70',
    },
    {
      name: 'valeurs',
      title: 'Valeurs du club',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titre', title: 'Titre', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            {
              name: 'icone',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: '🤝 Bienveillance', value: 'Heart' },
                  { title: '🎓 Transmission', value: 'GraduationCap' },
                  { title: '👨‍👩‍👧 Famille', value: 'Users' },
                  { title: '🌟 Respect', value: 'Star' },
                  { title: '🛡 Sécurité', value: 'Shield' },
                  { title: '🤲 Bénévolat', value: 'Handshake' },
                ]
              }
            }
          ],
          preview: {
            select: { title: 'titre', subtitle: 'description' }
          }
        }
      ]
    },
    {
      name: 'publicsCibles',
      title: 'Publics accueillis',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex : Débutants, Parents d\'enfants pratiquants, Grand public...',
    },
    {
      name: 'image',
      title: 'Photo principale',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'galeriePresentations',
      title: 'Photos de présentation',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'legende', title: 'Légende', type: 'string' }]
        }
      ]
    },
  ],
  preview: {
    prepare: () => ({ title: "L'Association" })
  }
}
