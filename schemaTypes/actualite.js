export default {
  name: 'actualite',
  title: 'Actualités',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre',
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
      name: 'contenu',
      title: 'Contenu',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'publie',
      title: 'Publié',
      type: 'boolean',
      initialValue: false
    }
  ]
}