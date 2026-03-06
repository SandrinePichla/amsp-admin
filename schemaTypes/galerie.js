export default {
  name: 'galerie',
  title: 'Galerie photos',
  type: 'document',
  fields: [
    {
      // Discipline en premier, optionnelle
      name: 'discipline',
      title: 'Discipline associée',
      type: 'reference',
      to: [{ type: 'discipline' }],
      description: 'Laisser vide pour "Toutes disciplines"'
    },
    {
      // Titre optionnel
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
      // Upload multiple activé
      name: 'photos',
      title: 'Photos',
      type: 'array',
      options: {
        layout: 'grid' // Affichage en grille dans Sanity
      },
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
            accept: 'image/*',
            storeOriginalFilename: true
          },
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