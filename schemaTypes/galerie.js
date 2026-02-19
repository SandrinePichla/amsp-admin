export default {
  name: 'galerie',
  title: 'Galerie photos',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre de l\'album',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' }
    },
    {
      name: 'discipline',
      title: 'Discipline associée',
      type: 'reference',
      to: [{ type: 'discipline' }],
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'legende',
              title: 'Légende',
              type: 'string',
            }
          ]
        }
      ]
    },
    {
      name: 'publie',
      title: 'Publié',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      titre: 'titre',
      date: 'date',
      media: 'photos.0'
    },
    prepare({ titre, date, media }) {
      return {
        title: titre || 'Album sans titre',
        subtitle: date || '',
        media
      }
    }
  }
}