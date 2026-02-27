export default {
  name: 'tarifSpecial',
  title: 'Tarifs spéciaux / Réductions',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre',
      type: 'string',
      description: 'Ex: Tarifs famille, Multi-disciplines',
      validation: Rule => Rule.required()
    },
    {
      name: 'lignes',
      title: 'Lignes de réduction',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex: Pour 2 personnes : -10% du tarif total'
    },
    {
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
    }
  ]
}