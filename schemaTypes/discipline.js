export default {
  name: 'discipline',
  title: 'Disciplines',
  type: 'document',
  fields: [
    {
      name: 'nom',
      title: 'Nom complet',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'nomCourt',
      title: 'Nom court (affiché dans le planning)',
      type: 'string',
      description: 'Ex: "Karaté" pour "Karaté Shotokan", "Tai Chi" pour "Tai Chi Épée et Main Nue"',
    },
    {
      // Menu déroulant fermé : l'admin choisit un libellé, la valeur est câblée
      // côté site dans src/iconesDisciplines.ts. Toute valeur hors liste retombe
      // sur « Sparkles ». Ajouter une icône = l'ajouter aussi dans ce fichier-là.
      name: 'icone',
      title: 'Icône',
      type: 'string',
      description: 'Symbole affiché à côté du nom de la discipline sur le site. En cas de doute, choisir « Étincelles ».',
      options: {
        layout: 'dropdown',
        list: [
          { title: '🛡 Bouclier — défense, arts martiaux', value: 'Shield' },
          { title: '⚔️ Épées croisées — combat, armes', value: 'Swords' },
          { title: '✋ Main — contact, self-défense', value: 'Hand' },
          { title: '💨 Vent — souffle, tai chi, qi gong', value: 'Wind' },
          { title: '🌊 Vagues — fluidité, mouvement', value: 'Waves' },
          { title: '🌿 Feuille — énergie interne, nature', value: 'Leaf' },
          { title: '🪶 Plume — légèreté, souplesse', value: 'Feather' },
          { title: '🔥 Flamme — énergie, intensité', value: 'Flame' },
          { title: '⭕ Cible — précision', value: 'CircleDot' },
          { title: '✨ Étincelles — générique (par défaut)', value: 'Sparkles' },
        ],
      },
      initialValue: 'Sparkles',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'horaires',
      title: 'Horaires (ex: Mardi et Jeudi de 18h30 à 20h00)',
      type: 'string',
    },
    {
      // Option B — saisie libre avec Add item
      name: 'professeurs',
      title: 'Professeurs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Cliquez sur + Add item pour ajouter un professeur',
    },
    {
      // Option B — saisie libre avec Add item
      name: 'niveaux',
      title: 'Niveaux acceptés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Suggestions : Débutant, Intermédiaire, Expert, Tous niveaux',
    },
    {
      // Option B — saisie libre avec Add item
      name: 'ages',
      title: 'Âges acceptés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Suggestions : 6-8 ans, 9-12 ans, 13 ans et +, Adultes',
    },
    {
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
    }
  ]
}