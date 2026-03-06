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
      name: 'prive',
      title: 'Album privé (membres uniquement)',
      type: 'boolean',
      initialValue: false,
      description: 'Si coché, visible uniquement par les membres connectés'
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
      prive: 'prive',
      media: 'photos.0'
    },
    prepare({ titre, date, prive, media }) {
      return {
        title: `${prive ? '🔒 ' : ''}${titre || 'Album sans titre'}`,
        subtitle: date || '',
        media
      }
    }
  }
}