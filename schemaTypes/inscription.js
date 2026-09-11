export default {
  name: 'inscription',
  title: 'Page Inscription',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'reglementInterieur',
      title: 'Règlement intérieur',
      type: 'text',
      description: 'Texte affiché dans le bloc règlement intérieur du formulaire.',
      rows: 20,
    },
    {
      name: 'saison',
      title: 'Saison en cours',
      type: 'string',
      description: 'Ex : 2025-2026. Utilisé dans les inscriptions enregistrées.',
      initialValue: '2025-2026',
    },
    {
      name: 'titreInfosPaiement',
      title: 'Titre infos paiement',
      type: 'string',
      description: 'Ex : Règlement des cotisations',
      initialValue: 'Règlement des cotisations',
    },
    {
      name: 'infosPaiement',
      title: 'Infos de paiement',
      type: 'text',
      description: 'Texte affiché dans le bloc de règlement des cotisations.',
      rows: 4,
      initialValue: "Le tarif dépend du nombre d'activités choisies et du nombre de personnes inscrites de la même famille — reportez-vous à la grille tarifaire ou contactez-nous. Le règlement peut s'effectuer en 1 ou 4 fois par chèque, à l'ordre des Arts Martiaux St Pierrois.",
    },
    {
      name: 'texteAutorisationImage',
      title: "Texte autorisation droit à l'image",
      type: 'text',
      description: "Texte de la case à cocher 'Droit à l'image'.",
      rows: 3,
    },
    {
      name: 'texteAutorisationParentale',
      title: 'Texte autorisation parentale (mineurs)',
      type: 'text',
      description: 'Texte affiché dans le bloc autorisation parentale (pour les mineurs).',
      rows: 6,
    },
    {
      name: 'texteInfosCertificatMedical',
      title: 'Note certificat médical',
      type: 'string',
      description: 'Petite note sous le droit à l\'image. Ex: "Le certificat médical n\'est plus obligatoire..."',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Page Inscription' }
    },
  },
}