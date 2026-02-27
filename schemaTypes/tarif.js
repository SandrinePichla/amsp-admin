export default {
  name: 'tarif',
  title: 'Tarifs',
  type: 'document',
  fields: [
    {
      name: 'discipline',
      title: 'Discipline / Catégorie',
      type: 'string',
      description: 'Ex: Karaté Enfants 6/8 ans, Wutao, Qi Gong...',
      validation: Rule => Rule.required()
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
      title: "Ordre d'affichage",
      type: 'number',
    }
  ],
  preview: {
    select: {
      discipline: 'discipline',
      prix: 'prixAnnuel'
    },
    prepare({ discipline, prix }) {
      return {
        title: discipline,
        subtitle: prix ? `${prix} €/an` : ''
      }
    }
  }
}