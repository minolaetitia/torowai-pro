export interface PcmType {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  communication: {
    style: string;
    channels: string[];
    keywords: string[];
  };
  motivation: {
    needs: string[];
    energizers: string[];
  };
  stress: {
    driver: string;
    firstDegree: string[];
    secondDegree: string[];
    management: string[];
  };
  strengths: string[];
  challenges: string[];
  workStyle: string[];
  icon: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

export const pcmTypes: Record<string, PcmType> = {
  travaillomane: {
    id: 'travaillomane',
    name: 'Le Travaillomane',
    subtitle: 'Logique et Structuré',
    description: "Logique et structuré, tu excelles dans l'analyse et l'organisation. Tu prends des décisions basées sur des faits et des données concrètes.",
    communication: {
      style: "Factuel, précis, orienté données et résultats",
      channels: ["Requestif (questions ouvertes)", "Informatif (donner des faits)"],
      keywords: ["Pense", "Analyse", "Organise", "Planifie", "Logique"]
    },
    motivation: {
      needs: ["Structure du temps", "Reconnaissance du travail accompli"],
      energizers: ["Tâches bien définies", "Objectifs clairs", "Organisation efficace", "Résultats mesurables"]
    },
    stress: {
      driver: "Sois Parfait",
      firstDegree: ["Sur-contrôle", "Perfectionnisme excessif", "Micro-management"],
      secondDegree: ["Retrait émotionnel", "Critique acerbe", "Isolation"],
      management: ["Accepter l'imperfection", "Déléguer sans tout contrôler", "Reconnaître ses émotions"]
    },
    strengths: ["Logique imparable", "Fiabilité", "Organisation méthodique", "Analyse approfondie"],
    challenges: ["Rigidité face au changement", "Difficulté avec les émotions", "Perfectionnisme paralysant"],
    workStyle: ["Planification détaillée", "Procédures claires", "Environnement calme", "Respect des délais"],
    icon: "heroicons:clipboard-document-check",
    color: "bg-blue-500",
    gradientFrom: "#3B82F6",
    gradientTo: "#1D4ED8"
  },

  perseverant: {
    id: 'perseverant',
    name: 'Le Persévérant',
    subtitle: 'Convaincu et Engagé',
    description: "Guidé par tes valeurs et tes convictions, tu recherches du sens et de la cohérence dans tout ce que tu entreprends.",
    communication: {
      style: "Basé sur les valeurs, les opinions et les convictions",
      channels: ["Nurturatif (apporter du soutien)", "Requestif (poser des questions)"],
      keywords: ["Crois", "Valeurs", "Engagement", "Fidélité", "Authenticité"]
    },
    motivation: {
      needs: ["Reconnaissance de ses convictions", "Travail qui a du sens"],
      energizers: ["Causes importantes", "Cohérence éthique", "Engagement à long terme", "Impact positif"]
    },
    stress: {
      driver: "Sois Fort",
      firstDegree: ["Rigidité d'opinion", "Croisade morale", "Jugement des autres"],
      secondDegree: ["Méfiance excessive", "Dénigrement", "Isolement idéologique"],
      management: ["Accepter d'autres points de vue", "Lâcher prise sur le contrôle", "Reconnaitre ses limites"]
    },
    strengths: ["Intégrité profonde", "Engagement durable", "Loyauté", "Sens des responsabilités"],
    challenges: ["Intolérance face aux divergences", "Difficulté à lâcher prise", "Tendance au sacrifice excessif"],
    workStyle: ["Missions porteuses de sens", "Cohérence valeurs-actions", "Engagement sur la durée", "Autonomie responsable"],
    icon: "heroicons:shield-check",
    color: "bg-indigo-600",
    gradientFrom: "#6366F1",
    gradientTo: "#312E81"
  },

  empathique: {
    id: 'empathique',
    name: 'L\'Empathique',
    subtitle: 'Chaleureux et Bienveillant',
    description: "Chaleureux et empathique, tu excelles dans l'écoute et la création de liens authentiques avec les autres.",
    communication: {
      style: "Empreint d'émotions, chaleureux, bienveillant",
      channels: ["Nurturatif (donner de l'attention)", "Émotif (partager des sentiments)"],
      keywords: ["Ressens", "Empathie", "Soutien", "Harmonie", "Connexion"]
    },
    motivation: {
      needs: ["Environnement sensoriel agréable", "Reconnaissance en tant que personne"],
      energizers: ["Ambiance chaleureuse", "Relations positives", "Gratitude exprimée", "Bien-être collectif"]
    },
    stress: {
      driver: "Fais Plaisir",
      firstDegree: ["Sur-adaptation", "Oubli de soi", "Sacrifice excessif"],
      secondDegree: ["Erreurs par inattention", "Confusion", "Désorganisation"],
      management: ["S'affirmer sans culpabilité", "Dire non quand nécessaire", "Prendre soin de soi"]
    },
    strengths: ["Empathie naturelle", "Capacité d'écoute", "Création de liens", "Sensibilité aux besoins"],
    challenges: ["Difficulté à dire non", "Peur du conflit", "Oubli de ses propres besoins"],
    workStyle: ["Ambiance conviviale", "Travail d'équipe", "Reconnaissance personnelle", "Confort de l'espace"],
    icon: "heroicons:heart",
    color: "bg-purple-500",
    gradientFrom: "#8B5CF6",
    gradientTo: "#6B21A8"
  },

  reveur: {
    id: 'reveur',
    name: 'Le Rêveur',
    subtitle: 'Imaginatif et Introspectif',
    description: "Calme et introspectif, tu as besoin de moments de solitude pour réfléchir et imaginer. Tu apportes une perspective unique et créative.",
    communication: {
      style: "Peu verbale, introspective, imaginative",
      channels: ["Directif (instructions claires)", "Informatif (contexte précis)"],
      keywords: ["Imagine", "Réfléchis", "Observe", "Intériorise", "Visualise"]
    },
    motivation: {
      needs: ["Temps de solitude", "Directives claires"],
      energizers: ["Espace personnel", "Tâches individuelles", "Clarté des attentes", "Calme et tranquillité"]
    },
    stress: {
      driver: "Sois Fort",
      firstDegree: ["Retrait excessif", "Passivité", "Attente que les autres agissent"],
      secondDegree: ["Confusion totale", "Désorientation", "Paralysie décisionnelle"],
      management: ["Exprimer ses besoins", "S'engager progressivement", "Demander du soutien"]
    },
    strengths: ["Imagination riche", "Calme et sérénité", "Observation fine", "Réflexion profonde"],
    challenges: ["Difficulté à s'exprimer", "Manque d'initiative", "Isolement excessif"],
    workStyle: ["Espaces calmes", "Travail en autonomie", "Instructions précises", "Temps de réflexion"],
    icon: "heroicons:cloud",
    color: "bg-violet-400",
    gradientFrom: "#A78BFA",
    gradientTo: "#7C3AED"
  },

  rebelle: {
    id: 'rebelle',
    name: 'Le Rebelle',
    subtitle: 'Spontané et Créatif',
    description: "Spontané et ludique, tu apportes de l'énergie positive et de la créativité partout où tu passes. Tu aimes que les choses soient fun et variées.",
    communication: {
      style: "Spontané, créatif, ludique, avec humour",
      channels: ["Émotif (réactions spontanées)", "Émissif (expression libre)"],
      keywords: ["Réagis", "Joue", "Crée", "Amuse", "Explore"]
    },
    motivation: {
      needs: ["Contact ludique", "Stimulation et variété"],
      energizers: ["Atmosphère fun", "Nouveauté constante", "Liberté d'expression", "Créativité encouragée"]
    },
    stress: {
      driver: "Fais Effort",
      firstDegree: ["Blâme des autres", "Irresponsabilité", "Rejet des règles"],
      secondDegree: ["Comportements destructeurs", "Auto-sabotage", "Addiction au chaos"],
      management: ["Accepter les contraintes raisonnables", "Prendre ses responsabilités", "Canaliser l'énergie créative"]
    },
    strengths: ["Créativité débordante", "Enthousiasme contagieux", "Adaptabilité", "Positivité"],
    challenges: ["Difficulté de concentration", "Impulsivité", "Fuite des responsabilités"],
    workStyle: ["Environnement dynamique", "Variété des tâches", "Liberté créative", "Ambiance décontractée"],
    icon: "heroicons:sparkles",
    color: "bg-amber-500",
    gradientFrom: "#F59E0B",
    gradientTo: "#D97706"
  },

  promoteur: {
    id: 'promoteur',
    name: 'Le Promoteur',
    subtitle: 'Audacieux et Orienté Action',
    description: "Audacieux et orienté action, tu es motivé par les défis et l'excitation. Tu es un fonceur qui sait prendre des risques calculés.",
    communication: {
      style: "Direct, incisif, orienté action et résultats",
      channels: ["Directif (donner des ordres)", "Comminatoire (ultimatums)"],
      keywords: ["Agis", "Fonce", "Décide", "Challenge", "Conquiers"]
    },
    motivation: {
      needs: ["Excitation et adrénaline", "Communication incisive"],
      energizers: ["Défis stimulants", "Prise de risques", "Action immédiate", "Compétition"]
    },
    stress: {
      driver: "Sois Fort",
      firstDegree: ["Manipulation", "Prise de risques excessive", "Provocation"],
      secondDegree: ["Comportements asociaux", "Vengeance", "Destruction"],
      management: ["Canaliser l'énergie vers des objectifs constructifs", "Accepter la vulnérabilité", "Respecter les limites"]
    },
    strengths: ["Leadership assumé", "Capacité d'action rapide", "Courage", "Charisme"],
    challenges: ["Impatience excessive", "Manipulation possible", "Difficulté avec la lenteur"],
    workStyle: ["Environnement dynamique", "Autonomie totale", "Défis constants", "Récompenses immédiates"],
    icon: "heroicons:bolt",
    color: "bg-red-500",
    gradientFrom: "#EF4444",
    gradientTo: "#991B1B"
  }
};
