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
      name: 'discipline',
      title: 'Discipline enseignée',
      type: 'reference',
      to: [{ type: 'discipline' }],
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
      name: 'bio',
      title: 'Biographie courte',
      type: 'text',
      rows: 3,
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
      subtitle: 'discipline.nom',
      media: 'photo',
    },
  },
}
