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
          { title: 'Débutant', value: 'Débutant' },
          { title: 'Confirmé', value: 'Confirmé' },
          { title: 'Tous niveaux', value: 'Tous niveaux' }
        ]
      }
    },
    {
      name: 'ages',
      title: 'Âges acceptés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Suggestions : 6-8 ans, 9-12 ans, 13 ans et +, 14 ans et +, Adultes',
    },
    {
      name: 'lieu',
      title: 'Lieu',
      type: 'string',
      options: {
        list: [
          { title: 'Dojo Gymnase', value: 'Dojo Gymnase' },
          { title: 'Salle des fêtes', value: 'Salle des fêtes' },
        ]
      }
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