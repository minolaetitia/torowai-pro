export interface MBTIQuestion {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP'; // Extraversion-Introversion, Sensation-Intuition, Thinking-Feeling, Judging-Perceiving
  options: {
    A: string; // +2 vers premier pôle (E, S, T, J)
    B: string; // 0 neutre
    C: string; // +2 vers second pôle (I, N, F, P)
  };
}

export const mbtiQuestions: MBTIQuestion[] = [
  // ========== DIMENSION E/I : Extraversion vs Introversion ==========
  {
    id: 1,
    text: "Dans une soirée, vous êtes plutôt :",
    dimension: 'EI',
    options: {
      A: "Énergisé(e), je rencontre de nouvelles personnes facilement",
      B: "Entre les deux, dépend de mon humeur",
      C: "Je me fatigue rapidement et préfère des conversations en petit comité"
    }
  },
  {
    id: 2,
    text: "Après une longue journée de travail, vous préférez :",
    dimension: 'EI',
    options: {
      A: "Sortir avec des amis pour décompresser",
      B: "Selon les jours, tantôt sortir, tantôt rester seul(e)",
      C: "Rester seul(e) pour vous ressourcer"
    }
  },
  {
    id: 3,
    text: "Vous apprenez mieux :",
    dimension: 'EI',
    options: {
      A: "En discutant avec d'autres, en travaillant en groupe",
      B: "Les deux approches me conviennent",
      C: "Seul(e), en réfléchissant par vous-même"
    }
  },
  {
    id: 4,
    text: "Face à un problème, vous avez tendance à :",
    dimension: 'EI',
    options: {
      A: "En parler immédiatement avec quelqu'un",
      B: "Réfléchir un peu, puis en discuter",
      C: "Analyser le problème seul(e) avant d'en parler"
    }
  },
  {
    id: 5,
    text: "Votre cercle social idéal est :",
    dimension: 'EI',
    options: {
      A: "Large et diversifié",
      B: "Quelques groupes différents",
      C: "Restreint avec des relations profondes"
    }
  },

  // ========== DIMENSION S/N : Sensation vs Intuition ==========
  {
    id: 6,
    text: "Quand on vous explique quelque chose, vous préférez :",
    dimension: 'SN',
    options: {
      A: "Des exemples concrets et des étapes précises",
      B: "Un mélange des deux",
      C: "Une vue d'ensemble et les concepts généraux"
    }
  },
  {
    id: 7,
    text: "Vous êtes plutôt :",
    dimension: 'SN',
    options: {
      A: "Pragmatique, ancré(e) dans la réalité",
      B: "Équilibré(e) entre les deux",
      C: "Imaginatif(ve), tourné(e) vers les possibilités"
    }
  },
  {
    id: 8,
    text: "Dans un projet, vous vous concentrez sur :",
    dimension: 'SN',
    options: {
      A: "Les détails pratiques et la mise en œuvre",
      B: "Les deux aspects",
      C: "La vision globale et l'innovation"
    }
  },
  {
    id: 9,
    text: "Vous préférez :",
    dimension: 'SN',
    options: {
      A: "Améliorer ce qui existe déjà",
      B: "Les deux approches",
      C: "Créer quelque chose de complètement nouveau"
    }
  },
  {
    id: 10,
    text: "À votre travail, vous êtes plus intéressé(e) par :",
    dimension: 'SN',
    options: {
      A: "Les procédures établies et les méthodes éprouvées",
      B: "Un équilibre entre stabilité et innovation",
      C: "Explorer de nouvelles idées et possibilités"
    }
  },

  // ========== DIMENSION T/F : Thinking vs Feeling ==========
  {
    id: 11,
    text: "Quand vous prenez une décision importante, vous vous basez sur :",
    dimension: 'TF',
    options: {
      A: "L'analyse logique et les faits objectifs",
      B: "Un mélange de logique et d'émotions",
      C: "Vos valeurs et l'impact sur les personnes concernées"
    }
  },
  {
    id: 12,
    text: "Face à un conflit, vous êtes plutôt :",
    dimension: 'TF',
    options: {
      A: "Direct(e) et factuel(le), même si c'est inconfortable",
      B: "Diplomatique, cherchant l'équilibre",
      C: "Attentif(ve), cherchant à préserver l'harmonie"
    }
  },
  {
    id: 13,
    text: "Les gens disent de vous que vous êtes :",
    dimension: 'TF',
    options: {
      A: "Frank(he) et objectif(ve)",
      B: "Équilibré(e)",
      C: "Empathique et compréhensif(ve)"
    }
  },
  {
    id: 14,
    text: "Dans une critique constructive, vous valorisez :",
    dimension: 'TF',
    options: {
      A: "La clarté et la précision, même si c'est dur à entendre",
      B: "Un équilibre entre honnêteté et tact",
      C: "La bienveillance et la manière dont c'est formulé"
    }
  },
  {
    id: 15,
    text: "Selon vous, un bon leader doit être :",
    dimension: 'TF',
    options: {
      A: "Compétent et juste, prenant des décisions rationnelles",
      B: "Équilibré entre efficacité et humanité",
      C: "Inspirant et à l'écoute de son équipe"
    }
  },

  // ========== DIMENSION J/P : Judging vs Perceiving ==========
  {
    id: 16,
    text: "Votre espace de travail est généralement :",
    dimension: 'JP',
    options: {
      A: "Organisé et rangé",
      B: "Entre ordre et désordre créatif",
      C: "Créatif, avec des piles de choses en cours"
    }
  },
  {
    id: 17,
    text: "Vous préférez :",
    dimension: 'JP',
    options: {
      A: "Planifier à l'avance et suivre votre plan",
      B: "Avoir un plan général mais rester flexible",
      C: "Improviser et vous adapter au fil de l'eau"
    }
  },
  {
    id: 18,
    text: "Face à une deadline, vous :",
    dimension: 'JP',
    options: {
      A: "Commencez tôt et finissez en avance",
      B: "Vous y mettez progressivement",
      C: "Travaillez mieux sous pression de dernière minute"
    }
  },
  {
    id: 19,
    text: "Le week-end, vous préférez :",
    dimension: 'JP',
    options: {
      A: "Avoir un programme défini",
      B: "Quelques activités prévues, le reste spontané",
      C: "Voir au jour le jour selon vos envies"
    }
  },
  {
    id: 20,
    text: "Dans un projet de groupe, vous aimez :",
    dimension: 'JP',
    options: {
      A: "Établir un plan clair avec des échéances",
      B: "Un cadre souple avec de la flexibilité",
      C: "Rester ouvert(e) aux opportunités qui se présentent"
    }
  }
];
