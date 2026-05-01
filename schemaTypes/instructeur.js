export default {
  name: 'instructeur',
  title: 'Instructeurs',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom complet',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'disciplines',
      title: 'Disciplines enseignées',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'discipline' }] }],
      description: 'Sélectionner une ou plusieurs disciplines',
    },
    {
      name: 'telephone',
      title: 'Téléphone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'grade',
      title: 'Grade / Niveau',
      type: 'string',
      description: 'Ex : Ceinture noire 3e dan, Enseignant certifié…',
    },
    {
      name: 'bio',
      title: 'Biographie / Texte libre',
      type: 'text',
      rows: 5,
    },
    {
      name: 'liens',
      title: 'Sites personnels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Libellé', type: 'string', validation: Rule => Rule.required() },
            { name: 'url', title: 'URL', type: 'url', validation: Rule => Rule.required() },
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        },
      ],
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'nom',
      subtitle: 'disciplines.0.nom',
      media: 'photo',
    },
  },
}
