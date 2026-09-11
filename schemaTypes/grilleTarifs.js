export default {
  name: 'grilleTarifs',
  title: 'Grille tarifaire',
  type: 'document',
  // Document unique (comme "parametres" ou "inscription") : n'en créer qu'un seul.
  fields: [
    {
      name: 'disciplinesAuChoix',
      title: 'Disciplines "au choix"',
      description: 'Disciplines qui partagent le même tarif, selon le nombre d\'activités choisies parmi elles (ex : Qi Gong, Tai Chi, Wutao). Le Karaté est géré à part, voir plus bas.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'discipline' }] }],
    },
    {
      name: 'tarifsAuChoix',
      title: 'Tarifs "au choix" par nombre d\'activités',
      description: 'Une ligne par nombre d\'activités possible (1, 2, 3…). Le total ne monte pas linéairement : c\'est voulu, c\'est la remise multi-activités.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tarifActivites',
          title: 'Tarif',
          fields: [
            { name: 'nombreActivites', title: 'Nombre d\'activités', type: 'number', validation: (Rule) => Rule.required().min(1).max(6) },
            { name: 'total', title: 'Total (€)', type: 'number', validation: (Rule) => Rule.required().min(0) },
            { name: 'cheque1', title: '1er chèque — à l\'inscription (€)', type: 'number', description: 'Pour le paiement en 4 fois.' },
            { name: 'cheque3x', title: 'Montant de chacun des 3 autres chèques (€)', type: 'number', description: 'Décembre, mars, juin.' },
          ],
          preview: {
            select: { n: 'nombreActivites', t: 'total' },
            prepare: ({ n, t }) => ({ title: `${n} activité${n > 1 ? 's' : ''} — ${t ?? '?'} €` }),
          },
        },
      ],
    },
    {
      name: 'disciplineKarate',
      title: 'Discipline Karaté',
      description: 'La discipline concernée par le tarif Karaté ci-dessous (tarif par tranche d\'âge, distinct du groupe "au choix").',
      type: 'reference',
      to: [{ type: 'discipline' }],
    },
    {
      name: 'tarifsKarate',
      title: 'Tarifs Karaté par tranche d\'âge',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tarifKarate',
          title: 'Tarif',
          fields: [
            { name: 'label', title: 'Tranche d\'âge', type: 'string', description: 'Ex : "6-8 ans"', validation: (Rule) => Rule.required() },
            { name: 'total', title: 'Total (€)', type: 'number', validation: (Rule) => Rule.required().min(0) },
            { name: 'cheque1', title: '1er chèque — à l\'inscription (€)', type: 'number' },
            { name: 'cheque3x', title: 'Montant de chacun des 3 autres chèques (€)', type: 'number' },
          ],
          preview: {
            select: { l: 'label', t: 'total' },
            prepare: ({ l, t }) => ({ title: `${l || '?'} — ${t ?? '?'} €` }),
          },
        },
      ],
    },
    {
      name: 'remiseFamille2',
      title: 'Remise famille — 2 personnes (%)',
      description: 'Remise appliquée à la somme des tarifs individuels quand 2 personnes de la même famille sont inscrites.',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'remiseFamille3',
      title: 'Remise famille — 3 personnes et plus (%)',
      description: 'Remise plafonnée à partir de 3 personnes (pas de palier supplémentaire au-delà).',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    },
  ],
  preview: {
    prepare: () => ({ title: 'Grille tarifaire' }),
  },
}
