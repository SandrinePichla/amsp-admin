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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: '📢 Actualité', value: 'actualite' },
          { title: '🥋 Stage', value: 'stage' },
        ]
      },
      initialValue: 'actualite'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' }
    },
    {
      name: 'horaires',
      title: 'Horaires',
      type: 'string',
      description: 'Ex: De 19h00 à 21h00 ou Samedi 9h30 - 12h30'
    },
    {
      name: 'contenu',
      title: 'Contenu / Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image / Flyer',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'lieu',
      title: 'Lieu',
      type: 'string',
      description: 'Ex: Salle des fêtes de St Pierre la Palud'
    },
    {
      name: 'prix',
      title: 'Prix',
      type: 'string',
      description: 'Ex: 30€'
    },
    {
      name: 'intervenant',
      title: 'Intervenant / Professeur invité',
      type: 'string',
    },
    {
      name: 'inscription',
      title: 'Informations d\'inscription',
      type: 'text',
      initialValue: '06.82.16.22.66 ou artsmartiauxstpierrois@gmail.com',
      description: 'Laisser vide pour afficher les coordonnées par défaut'
    },   
    {
      name: 'minimumPersonnes',
      title: 'Nombre minimum de participants',
      type: 'number',
      description: 'Le stage sera maintenu à partir de ce nombre d\'inscrits'
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
      type: 'type',
      date: 'date',
      media: 'image'
    },
    prepare({ titre, type, date, media }) {
      return {
        title: titre,
        subtitle: `${type === 'stage' ? '🥋 Stage' : '📢 Actu'} — ${date || 'Sans date'}`,
        media
      }
    }
  }
}