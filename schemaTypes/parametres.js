export default {
  name: 'parametres',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    {
      name: 'adresse',
      title: 'Adresse',
      type: 'text',
      description: 'Ex: 12 rue des Arts Martiaux, 97410 Saint-Pierre'
    },
    {
      name: 'email',
      title: 'Email de contact',
      type: 'string',
    },
    {
      name: 'telephone',
      title: 'Téléphone',
      type: 'string',
    },
    {
      name: 'horairesAccueil',
      title: 'Horaires d\'accueil',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex: Lundi au Vendredi : 18h00 — 21h00'
    },
    {
      name: 'facebook',
      title: 'Lien Facebook',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Lien Instagram',
      type: 'url',
    }
  ],
  preview: {
    prepare() {
      return { title: 'Paramètres du site' }
    }
  }
}