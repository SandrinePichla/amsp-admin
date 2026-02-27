export default {
  name: 'tarif',
  title: 'Tarifs',
  type: 'document',
  fields: [
    {
      name: 'discipline',
      title: 'Discipline',
      type: 'string',
      description: 'Ex: Karaté, Wutao, Qi Gong...',
      validation: Rule => Rule.required()
    },
    {
      name: 'categorie',
      title: 'Catégorie / Tranche d\'âge',
      type: 'string',
      description: 'Laisser vide si pas de sous-catégorie. Ex: Enfants 6/8 ans, 18 ans et +'
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
      discipline: 'discipline',
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