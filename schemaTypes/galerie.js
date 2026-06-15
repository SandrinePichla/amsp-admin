export default {
  name: 'galerie',
  title: 'Galerie photos',
  type: 'document',
  fields: [
    {
      name: 'discipline',
      title: 'Discipline associée',
      type: 'reference',
      to: [{ type: 'discipline' }],
      description: 'Laisser vide pour "Toutes disciplines"'
    },
    {
      name: 'titre',
      title: 'Nom de l\'album (optionnel)',
      type: 'string',
      description: 'Ex: Stage janvier 2026, Compétition régionale...'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' }
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
      options: { layout: 'grid' },
      of: [
        {
          type: 'image',
          options: { hotspot: true, accept: 'image/*' },
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
      name: 'videos',
      title: 'Vidéos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'video_upload',
          title: 'Vidéo uploadée',
          fields: [
            {
              name: 'fichier',
              title: 'Fichier vidéo',
              type: 'file',
              options: { accept: 'video/*' }
            },
            {
              name: 'legende',
              title: 'Légende',
              type: 'string'
            }
          ],
          preview: {
            select: { legende: 'legende' },
            prepare({ legende }) {
              return { title: legende || 'Vidéo uploadée' }
            }
          }
        },
        {
          type: 'object',
          name: 'video_youtube',
          title: 'Lien YouTube',
          fields: [
            {
              name: 'youtubeUrl',
              title: 'URL YouTube',
              type: 'url',
              description: 'Ex: https://www.youtube.com/watch?v=abc123 ou https://youtu.be/abc123',
              validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
            },
            {
              name: 'legende',
              title: 'Légende',
              type: 'string'
            }
          ],
          preview: {
            select: { legende: 'legende', url: 'youtubeUrl' },
            prepare({ legende, url }) {
              return { title: legende || url || 'Lien YouTube' }
            }
          }
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
      discipline: 'discipline.nom',
      media: 'photos.0'
    },
    prepare({ titre, date, prive, discipline, media }) {
      const label = titre || discipline || 'Album sans titre'
      return {
        title: `${prive ? '🔒 ' : ''}${label}`,
        subtitle: date || '',
        media
      }
    }
  }
}
