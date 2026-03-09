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
    },
    {
      name: 'texteAutorisationImage',
      title: "Texte autorisation droit à l'image",
      type: 'text',
      description: "Texte de la case à cocher 'Droit à l'image'.",
      rows: 3,
    },
  ],
  preview: {
    prepare() {
      return { title: 'Page Inscription' }
    },
  },
}