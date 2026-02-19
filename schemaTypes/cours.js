export default {
  name: 'cours',
  title: 'Planning des cours',
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
      name: 'jour',
      title: 'Jour',
      type: 'string',
      options: {
        list: [
          { title: 'Lundi', value: 'lundi' },
          { title: 'Mardi', value: 'mardi' },
          { title: 'Mercredi', value: 'mercredi' },
          { title: 'Jeudi', value: 'jeudi' },
          { title: 'Vendredi', value: 'vendredi' },
          { title: 'Samedi', value: 'samedi' },
          { title: 'Dimanche', value: 'dimanche' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heureDebut',
      title: 'Heure de début',
      type: 'string',
      placeholder: 'ex: 18h00'
    },
    {
      name: 'heureFin',
      title: 'Heure de fin',
      type: 'string',
      placeholder: 'ex: 19h30'
    },
    {
      name: 'niveau',
      title: 'Niveau',
      type: 'string',
      options: {
        list: [
          { title: 'Tous niveaux', value: 'tous' },
          { title: 'Débutant', value: 'debutant' },
          { title: 'Intermédiaire', value: 'intermediaire' },
          { title: 'Expert', value: 'expert' }
        ]
      }
    },
    {
      name: 'lieu',
      title: 'Lieu',
      type: 'string',
    }
  ],
  preview: {
    select: {
      discipline: 'discipline.nom',
      jour: 'jour',
      heureDebut: 'heureDebut'
    },
    prepare({ discipline, jour, heureDebut }) {
      return {
        title: discipline || 'Cours sans discipline',
        subtitle: `${jour || ''} à ${heureDebut || ''}`
      }
    }
  }
}