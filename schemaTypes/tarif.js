export default {
  name: 'tarif',
  title: 'Tarifs',
  type: 'document',
  fields: [
    {
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Enfant', value: 'enfant' },
          { title: 'Adulte', value: 'adulte' },
          { title: 'Famille', value: 'famille' },
          { title: 'Tarif réduit', value: 'reduit' }
        ]
      }
    },
    {
      name: 'discipline',
      title: 'Discipline',
      type: 'reference',
      to: [{ type: 'discipline' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'prix',
      title: 'Prix (€)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
    }
  ],
  preview: {
    select: {
      categorie: 'categorie',
      discipline: 'discipline.nom',
      prix: 'prix'
    },
    prepare({ categorie, discipline, prix }) {
      return {
        title: `${discipline || 'Discipline'} — ${categorie || ''}`,
        subtitle: `${prix || 0} €`
      }
    }
  }
}