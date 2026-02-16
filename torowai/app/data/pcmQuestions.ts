export interface PcmQuestion {
  id: number;
  text: string;
  category: 'travaillomane' | 'perseverant' | 'empathique' | 'reveur' | 'rebelle' | 'promoteur';
  dimension: 'communication' | 'motivation' | 'stress' | 'decision' | 'relationship' | 'work';
}

export const pcmQuestions: PcmQuestion[] = [
  // Communication (questions 1-6)
  {
    id: 1,
    text: "Quand j'explique quelque chose, je préfère utiliser des schémas, des données et des faits concrets.",
    category: 'travaillomane',
    dimension: 'communication'
  },
  {
    id: 2,
    text: "Dans mes discussions, j'aime partager mes convictions et défendre mes valeurs.",
    category: 'perseverant',
    dimension: 'communication'
  },
  {
    id: 3,
    text: "Je communique naturellement avec chaleur et en montrant mes émotions.",
    category: 'empathique',
    dimension: 'communication'
  },
  {
    id: 4,
    text: "J'ai besoin de moments de calme et d'introspection pour réfléchir avant de parler.",
    category: 'reveur',
    dimension: 'communication'
  },
  {
    id: 5,
    text: "J'aime communiquer avec humour et spontanéité, en apportant de la légèreté.",
    category: 'rebelle',
    dimension: 'communication'
  },
  {
    id: 6,
    text: "Je suis direct et je vais droit au but dans mes échanges, sans détours.",
    category: 'promoteur',
    dimension: 'communication'
  },

  // Motivation (questions 7-12)
  {
    id: 7,
    text: "Ce qui me motive le plus, c'est d'avoir une organisation claire et des objectifs précis.",
    category: 'travaillomane',
    dimension: 'motivation'
  },
  {
    id: 8,
    text: "Je suis le plus motivé quand je travaille sur des projets qui ont du sens et correspondent à mes valeurs.",
    category: 'perseverant',
    dimension: 'motivation'
  },
  {
    id: 9,
    text: "J'ai besoin d'un environnement chaleureux et de me sentir apprécié en tant que personne.",
    category: 'empathique',
    dimension: 'motivation'
  },
  {
    id: 10,
    text: "Pour être motivé, j'ai besoin de temps seul pour réfléchir et d'instructions claires.",
    category: 'reveur',
    dimension: 'motivation'
  },
  {
    id: 11,
    text: "Ce qui m'énergise, c'est la variété, la nouveauté et une ambiance fun.",
    category: 'rebelle',
    dimension: 'motivation'
  },
  {
    id: 12,
    text: "Je suis motivé par les défis stimulants et l'adrénaline de l'action immédiate.",
    category: 'promoteur',
    dimension: 'motivation'
  },

  // Stress (questions 13-18)
  {
    id: 13,
    text: "Sous pression, j'ai tendance à vouloir tout contrôler et à devenir perfectionniste.",
    category: 'travaillomane',
    dimension: 'stress'
  },
  {
    id: 14,
    text: "Quand je suis stressé, je deviens rigide dans mes opinions et j'ai du mal à accepter d'autres points de vue.",
    category: 'perseverant',
    dimension: 'stress'
  },
  {
    id: 15,
    text: "En situation de stress, je tends à m'oublier moi-même pour faire plaisir aux autres.",
    category: 'empathique',
    dimension: 'stress'
  },
  {
    id: 16,
    text: "Sous pression, j'ai tendance à me retirer et à attendre passivement que les choses se règlent.",
    category: 'reveur',
    dimension: 'stress'
  },
  {
    id: 17,
    text: "Quand je suis stressé, je peux blâmer les autres et rejeter les responsabilités.",
    category: 'rebelle',
    dimension: 'stress'
  },
  {
    id: 18,
    text: "En situation de stress, je deviens plus directif et je peux avoir tendance à manipuler pour obtenir ce que je veux.",
    category: 'promoteur',
    dimension: 'stress'
  },

  // Decision (questions 19-24)
  {
    id: 19,
    text: "Je prends mes décisions en analysant tous les faits et données disponibles de manière logique.",
    category: 'travaillomane',
    dimension: 'decision'
  },
  {
    id: 20,
    text: "Mes décisions sont guidées avant tout par mes valeurs et mes principes éthiques.",
    category: 'perseverant',
    dimension: 'decision'
  },
  {
    id: 21,
    text: "Je prends mes meilleures décisions en écoutant mon cœur et en pensant aux autres.",
    category: 'empathique',
    dimension: 'decision'
  },
  {
    id: 22,
    text: "J'ai besoin de temps pour réfléchir tranquillement avant de prendre une décision importante.",
    category: 'reveur',
    dimension: 'decision'
  },
  {
    id: 23,
    text: "Je décide souvent sur l'instant, en me laissant guider par mon intuition et mon enthousiasme du moment.",
    category: 'rebelle',
    dimension: 'decision'
  },
  {
    id: 24,
    text: "Je prends des décisions rapidement, en évaluant les opportunités et en passant à l'action.",
    category: 'promoteur',
    dimension: 'decision'
  },

  // Relationship (questions 25-30)
  {
    id: 25,
    text: "Dans une équipe, je suis celui qui structure, organise et s'assure que tout est en ordre.",
    category: 'travaillomane',
    dimension: 'relationship'
  },
  {
    id: 26,
    text: "Dans un groupe, je suis celui qui veille à ce que les actions soient cohérentes avec nos valeurs communes.",
    category: 'perseverant',
    dimension: 'relationship'
  },
  {
    id: 27,
    text: "Dans une équipe, je suis naturellement celui qui crée de la cohésion et prend soin de l'harmonie.",
    category: 'empathique',
    dimension: 'relationship'
  },
  {
    id: 28,
    text: "Dans un groupe, je préfère observer et contribuer tranquillement plutôt que d'être au centre de l'attention.",
    category: 'reveur',
    dimension: 'relationship'
  },
  {
    id: 29,
    text: "Dans une équipe, je suis celui qui apporte de l'énergie, de la créativité et de la bonne humeur.",
    category: 'rebelle',
    dimension: 'relationship'
  },
  {
    id: 30,
    text: "Dans un groupe, je prends naturellement un rôle de leader et j'aime diriger l'action.",
    category: 'promoteur',
    dimension: 'relationship'
  },

  // Work (questions 31-36)
  {
    id: 31,
    text: "Mon environnement de travail idéal est calme, structuré, avec des procédures claires.",
    category: 'travaillomane',
    dimension: 'work'
  },
  {
    id: 32,
    text: "J'ai besoin de travailler sur des missions qui ont du sens et qui correspondent à mes convictions.",
    category: 'perseverant',
    dimension: 'work'
  },
  {
    id: 33,
    text: "Mon environnement de travail idéal est chaleureux, avec des collègues bienveillants et une bonne ambiance.",
    category: 'empathique',
    dimension: 'work'
  },
  {
    id: 34,
    text: "J'aime avoir des moments de solitude au travail pour me concentrer et réfléchir tranquillement.",
    category: 'reveur',
    dimension: 'work'
  },
  {
    id: 35,
    text: "Mon environnement de travail idéal est dynamique, créatif, avec beaucoup de variété et de liberté.",
    category: 'rebelle',
    dimension: 'work'
  },
  {
    id: 36,
    text: "J'ai besoin d'un environnement de travail stimulant, avec des défis constants et de l'autonomie totale.",
    category: 'promoteur',
    dimension: 'work'
  }
];
