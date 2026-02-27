export default {
  name: 'tarif',
  title: 'Tarifs',
  type: 'document',
  fields: [
    {
      name: 'discipline',
      title: 'Discipline',
      type: 'reference',
      to: [{ type: 'discipline' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'categorie',
      title: 'Catégorie d\'âge',
      type: 'string',
      description: 'Laisser vide si pas de sous-catégorie',
      options: {
        list: [
          { title: 'Enfants 6/8 ans', value: 'Enfants 6/8 ans' },
          { title: 'Enfants 9/17 ans', value: 'Enfants 9/17 ans' },
          { title: '18 ans et +', value: '18 ans et +' },
        ]
      }
    },
    {
      name: 'jours',
      title: 'Jours de cours',
      type: 'string',
      description: 'Ex: Samedi et Mardi'
    },
    {
      name: 'prixAnnuel',
      title: 'Prix annuel (€)',
      type: 'number',
    },
    {
      name: 'echeancier',
      title: 'Échéancier de paiement',
      type: 'string',
      description: 'Ex: 1x55€ + 3x45€ ou 2x60€ – 2x50€'
    },
    {
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
    }
  ],
  preview: {
    select: {
      discipline: 'discipline.nom',
      categorie: 'categorie',
      prix: 'prixAnnuel'
    },
    prepare({ discipline, categorie, prix }) {
      return {
        title: categorie ? `${discipline} — ${categorie}` : discipline,
        subtitle: prix ? `${prix} €/an` : ''
      }
    }
  }
}