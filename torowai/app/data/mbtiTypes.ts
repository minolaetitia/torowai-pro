export type MBTIType = 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP' | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP' | 
                       'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ' | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type MBTIFamily = 'Analystes' | 'Diplomates' | 'Sentinelles' | 'Explorateurs';

export interface MBTITypeInfo {
  code: MBTIType;
  name: string;
  family: MBTIFamily;
  familyDescription: string;
  shortDescription: string; // Freemium
  mainTraits: string[]; // Freemium (3 traits)
  color: string;
  icon: string;
  // Premium content below
  fullDescription?: string;
  strengths?: string[];
  challenges?: string[];
  cognitiveStack?: {
    dominant: string;
    auxiliary: string;
    tertiary: string;
    inferior: string;
  };
  psychologicalNeeds?: string[];
  underStress?: string;
  relationships?: {
    communication: string;
    romantic: string[];
    teamwork: string;
  };
  career?: {
    idealEnvironments: string[];
    managementStyle: string[];
    suitedRoles: string[];
  };
}

export const mbtiTypes: Record<MBTIType, MBTITypeInfo> = {
  // ========== ANALYSTES (NT) ==========
  INTJ: {
    code: 'INTJ',
    name: 'L\'Architecte',
    family: 'Analystes',
    familyDescription: 'Rationnels, stratégiques, centrés sur la logique et la vision',
    shortDescription: "Stratège visionnaire et indépendant. Vous excellez dans la planification à long terme et l'optimisation des systèmes. Votre esprit analytique et votre détermination font de vous un innovateur efficace.",
    mainTraits: ["Stratégique", "Indépendant", "Analytique"],
    color: "bg-purple-600",
    icon: "heroicons:puzzle-piece",
    fullDescription: "Les INTJ sont des penseurs stratégiques naturels avec une vision claire du futur. Ils excellent dans la création de plans à long terme et l'optimisation des systèmes complexes.",
    strengths: ["Vision stratégique", "Pensée analytique", "Indépendance", "Détermination", "Innovation"],
    challenges: ["Perfectionnisme", "Difficulté à déléguer", "Impatience", "Manque de diplomatie"],
    cognitiveStack: {
      dominant: "Intuition Introvertie (Ni)",
      auxiliary: "Pensée Extravertie (Te)",
      tertiary: "Sentiment Introverti (Fi)",
      inferior: "Sensation Extravertie (Se)"
    },
    psychologicalNeeds: ["Compétence", "Autonomie", "Vision claire", "Efficacité"],
    underStress: "Devient hypercritique et peut se replier dans un perfectionnisme paralysant",
    relationships: {
      communication: "Direct et concis, préfère les discussions basées sur la logique",
      romantic: ["ENFP", "ENTP", "INFP"],
      teamwork: "Excellent en leadership stratégique, préfère travailler de manière autonome"
    },
    career: {
      idealEnvironments: ["Entreprises innovantes", "R&D", "Consulting stratégique", "Entrepreneuriat tech"],
      managementStyle: ["Leadership visionnaire", "Délégation stratégique", "Focus sur les résultats"],
      suitedRoles: ["Architecte système", "Stratège d'entreprise", "Chercheur", "Entrepreneur", "Analyste financier"]
    }
  },

  INTP: {
    code: 'INTP',
    name: 'Le Logicien',
    family: 'Analystes',
    familyDescription: 'Rationnels, stratégiques, centrés sur la logique et la vision',
    shortDescription: "Penseur analytique et inventif. Vous adorez explorer des idées abstraites et résoudre des problèmes complexes. Votre curiosité intellectuelle est insatiable.",
    mainTraits: ["Analytique", "Curieux", "Théoricien"],
    color: "bg-purple-600",
    icon: "heroicons:light-bulb",
    fullDescription: "Les INTP sont des penseurs logiques qui adorent analyser les systèmes et théoriser. Ils excellent dans la résolution de problèmes complexes et l'innovation conceptuelle.",
    strengths: ["Logique pure", "Créativité conceptuelle", "Analyse approfondie", "Objectivité", "Adaptabilité intellectuelle"],
    challenges: ["Procrastination", "Difficulté à concrétiser", "Distraction", "Insensibilité sociale"],
    psychologicalNeeds: ["Autonomie intellectuelle", "Temps de réflexion", "Stimulation mentale", "Liberté d'explorer"],
    underStress: "Peut devenir hypersensible émotionnellement et fuir les interactions sociales"
  },

  ENTJ: {
    code: 'ENTJ',
    name: 'Le Commandant',
    family: 'Analystes',
    familyDescription: 'Rationnels, stratégiques, centrés sur la logique et la vision',
    shortDescription: "Leader naturel et décideur stratégique. Vous prenez le contrôle avec assurance et menez les projets vers le succès avec efficacité et détermination.",
    mainTraits: ["Leader", "Décideur", "Ambitieux"],
    color: "bg-purple-600",
    icon: "heroicons:flag",
    fullDescription: "Les ENTJ sont des leaders nés qui excellent dans l'organisation et la direction. Ils voient rapidement les inefficacités et savent comment les corriger.",
    strengths: ["Leadership naturel", "Pensée stratégique", "Efficacité", "Confiance", "Vision claire"],
    challenges: ["Impatience", "Autoritarisme", "Insensibilité", "Workaholic"],
    psychologicalNeeds: ["Challenges", "Contrôle", "Efficacité", "Accomplissement"],
    underStress: "Devient agressif, dominateur et peut négliger les besoins émotionnels des autres"
  },

  ENTP: {
    code: 'ENTP',
    name: 'L\'Innovateur',
    family: 'Analystes',
    familyDescription: 'Rationnels, stratégiques, centrés sur la logique et la vision',
    shortDescription: "Débatteur charismatique et innovateur. Vous excellez à remettre en question le statu quo et à générer des idées révolutionnaires. Votre esprit vif adore les défis intellectuels.",
    mainTraits: ["Innovant", "Débatteur", "Visionnaire"],
    color: "bg-purple-600",
    icon: "heroicons:sparkles",
    fullDescription: "Les ENTP sont des innovateurs charismatiques qui adorent débattre et explorer de nouvelles idées. Ils excellent dans la remise en question créative.",
    strengths: ["Créativité", "Agilité mentale", "Charisme", "Adaptabilité", "Vision innovante"],
    challenges: ["Difficulté à terminer", "Argumentatif", "Dispersé", "Impatience avec les détails"],
    psychologicalNeeds: ["Stimulation intellectuelle", "Débats", "Nouveauté", "Liberté"],
    underStress: "Devient cynique et peut s'épuiser à force de multiplier les projets"
  },

  // ========== DIPLOMATES (NF) ==========
  INFJ: {
    code: 'INFJ',
    name: 'L\'Avocat',
    family: 'Diplomates',
    familyDescription: 'Empathiques, idéalistes, centrés sur les relations humaines et les valeurs',
    shortDescription: "Conseiller idéaliste et intuitif. Vous comprenez profondément les autres et aspirez à créer un monde meilleur. Votre empathie et votre vision inspirent ceux qui vous entourent.",
    mainTraits: ["Idéaliste", "Empathique", "Visionnaire"],
    color: "bg-teal-600",
    icon: "heroicons:heart",
    fullDescription: "Les INFJ sont des conseillers empathiques avec une vision profonde de l'humanité. Rares et complexes, ils aspirent à créer un impact positif durable.",
    strengths: ["Empathie profonde", "Vision idéaliste", "Intuition des gens", "Détermination", "Créativité"],
    challenges: ["Épuisement émotionnel", "Perfectionnisme", "Difficulté à s'ouvrir", "Sensibilité aux critiques"],
    psychologicalNeeds: ["Sens et authenticité", "Harmonie", "Créativité", "Temps de solitude"],
    underStress: "Se replie sur lui-même et peut devenir hypercritique envers soi-même"
  },

  INFP: {
    code: 'INFP',
    name: 'Le Médiateur',
    family: 'Diplomates',
    familyDescription: 'Empathiques, idéalistes, centrés sur les relations humaines et les valeurs',
    shortDescription: "Rêveur créatif et authentique. Guidé par vos valeurs profondes, vous cherchez l'harmonie et l'authenticité. Votre sensibilité artistique et votre empathie sont remarquables.",
    mainTraits: ["Authentique", "Créatif", "Idéaliste"],
    color: "bg-teal-600",
    icon: "heroicons:paint-brush",
    fullDescription: "Les INFP sont des rêveurs idéalistes guidés par leurs valeurs profondes. Ils cherchent l'authenticité et l'harmonie dans tout ce qu'ils font.",
    strengths: ["Authenticité", "Créativité", "Empathie", "Flexibilité", "Idéalisme"],
    challenges: ["Trop sensible", "Procrastination", "Difficulté avec les conflits", "Perfectionnisme"],
    psychologicalNeeds: ["Authenticité", "Expression créative", "Harmonie", "Sens profond"],
    underStress: "Devient hypersensible et peut se perdre dans des fantasmes ou l'autocritique"
  },

  ENFJ: {
    code: 'ENFJ',
    name: 'Le Protagoniste',
    family: 'Diplomates',
    familyDescription: 'Empathiques, idéalistes, centrés sur les relations humaines et les valeurs',
    shortDescription: "Mentor charismatique et inspirant. Vous avez un don naturel pour motiver les autres et créer des communautés soudées. Votre empathie et votre leadership transforment les vies.",
    mainTraits: ["Charismatique", "Mentor", "Altruiste"],
    color: "bg-teal-600",
    icon: "heroicons:user-group",
    fullDescription: "Les ENFJ sont des leaders charismatiques qui inspirent et motivent les autres. Ils excellent dans la création de communautés et l'aide au développement personnel.",
    strengths: ["Charisme", "Empathie", "Leadership inspirant", "Communication", "Organisation"],
    challenges: ["Trop idéaliste", "Épuisement à aider", "Difficulté à dire non", "Besoin d'approbation"],
    psychologicalNeeds: ["Harmonie sociale", "Aider les autres", "Reconnaissance", "Authenticité"],
    underStress: "Devient contrôlant et manipulateur, cherchant l'approbation à tout prix"
  },

  ENFP: {
    code: 'ENFP',
    name: 'Le Campagneur',
    family: 'Diplomates',
    familyDescription: 'Empathiques, idéalistes, centrés sur les relations humaines et les valeurs',
    shortDescription: "Enthousiaste spontané et créatif. Votre énergie contagieuse et votre curiosité infinie vous poussent à explorer mille possibilités. Vous inspirez les autres par votre optimisme.",
    mainTraits: ["Enthousiaste", "Créatif", "Spontané"],
    color: "bg-teal-600",
    icon: "heroicons:fire",
    fullDescription: "Les ENFP sont des esprits libres enthousiastes qui voient des possibilités partout. Leur énergie contagieuse et leur créativité inspirent ceux qui les entourent.",
    strengths: ["Enthousiasme", "Créativité", "Empathie", "Communication", "Adaptabilité"],
    challenges: ["Dispersé", "Difficulté à terminer", "Hypersensibilité", "Besoin d'approbation"],
    psychologicalNeeds: ["Liberté", "Nouveauté", "Connexions authentiques", "Créativité"],
    underStress: "Devient anxieux et peut se disperser dans trop de projets simultanés"
  },

  // ========== SENTINELLES (SJ) ==========
  ISTJ: {
    code: 'ISTJ',
    name: 'Le Logisticien',
    family: 'Sentinelles',
    familyDescription: 'Organisés, fiables, centrés sur la stabilité et le devoir',
    shortDescription: "Organisateur fiable et méthodique. Vous excellez dans la structure et le respect des règles. Votre sens du devoir et votre précision font de vous un pilier de confiance.",
    mainTraits: ["Fiable", "Organisé", "Méthodique"],
    color: "bg-blue-700",
    icon: "heroicons:clipboard-document-list",
    fullDescription: "Les ISTJ sont des piliers fiables qui valorisent la tradition et le devoir. Ils excellent dans l'organisation et la gestion méthodique.",
    strengths: ["Fiabilité", "Organisation", "Attention aux détails", "Loyauté", "Pragmatisme"],
    challenges: ["Rigidité", "Résistance au changement", "Difficulté avec les émotions", "Manque de spontanéité"],
    psychologicalNeeds: ["Stabilité", "Structure claire", "Respect des règles", "Devoir accompli"],
    underStress: "Devient encore plus rigide et peut exploser émotionnellement de façon inattendue"
  },

  ISFJ: {
    code: 'ISFJ',
    name: 'Le Défenseur',
    family: 'Sentinelles',
    familyDescription: 'Organisés, fiables, centrés sur la stabilité et le devoir',
    shortDescription: "Protecteur dévoué et attentionné. Vous prenez soin des autres avec chaleur et dévouement. Votre loyauté et votre générosité créent des environnements sécurisants.",
    mainTraits: ["Protecteur", "Dévoué", "Attentionné"],
    color: "bg-blue-700",
    icon: "heroicons:shield-check",
    fullDescription: "Les ISFJ sont des protecteurs chaleureux et dévoués qui prennent soin des autres avec attention. Ils créent des environnements stables et sécurisants.",
    strengths: ["Dévouement", "Empathie pratique", "Fiabilité", "Loyauté", "Organisation"],
    challenges: ["Difficulté à dire non", "S'oublier pour les autres", "Résistance au changement", "Hypersensibilité"],
    psychologicalNeeds: ["Appréciation", "Stabilité", "Aider les autres", "Harmonie"],
    underStress: "S'épuise à force de donner et peut devenir amer si non reconnu"
  },

  ESTJ: {
    code: 'ESTJ',
    name: 'Le Directeur',
    family: 'Sentinelles',
    familyDescription: 'Organisés, fiables, centrés sur la stabilité et le devoir',
    shortDescription: "Gestionnaire efficace et pragmatique. Vous prenez les choses en main avec autorité et organisez tout avec précision. Votre sens de l'ordre maintient la structure.",
    mainTraits: ["Directeur", "Pragmatique", "Efficace"],
    color: "bg-blue-700",
    icon: "heroicons:briefcase",
    fullDescription: "Les ESTJ sont des administrateurs efficaces qui excellent dans l'organisation et la gestion. Ils valorisent l'ordre, la loi et la tradition.",
    strengths: ["Leadership organisationnel", "Efficacité", "Décisions claires", "Pragmatisme", "Loyauté"],
    challenges: ["Inflexibilité", "Autoritarisme", "Insensibilité", "Résistance au changement"],
    psychologicalNeeds: ["Structure", "Contrôle", "Respect des règles", "Efficacité"],
    underStress: "Devient dictatorial et rigide, refusant toute remise en question"
  },

  ESFJ: {
    code: 'ESFJ',
    name: 'Le Consul',
    family: 'Sentinelles',
    familyDescription: 'Organisés, fiables, centrés sur la stabilité et le devoir',
    shortDescription: "Hôte chaleureux et sociable. Vous créez l'harmonie et prenez soin des autres avec générosité. Votre sens du social et votre dévouement rassemblent les communautés.",
    mainTraits: ["Sociable", "Dévoué", "Organisateur"],
    color: "bg-blue-700",
    icon: "heroicons:home",
    fullDescription: "Les ESFJ sont des hôtes chaleureux qui excellent dans la création d'harmonie sociale. Ils prennent soin des autres et organisent la communauté.",
    strengths: ["Sens social", "Dévouement", "Organisation", "Loyauté", "Empathie pratique"],
    challenges: ["Besoin d'approbation", "Difficulté avec les critiques", "Trop traditionnel", "S'oublie pour les autres"],
    psychologicalNeeds: ["Harmonie sociale", "Appréciation", "Aider les autres", "Structure"],
    underStress: "Devient hypersensible aux critiques et peut manipuler pour maintenir l'harmonie"
  },

  // ========== EXPLORATEURS (SP) ==========
  ISTP: {
    code: 'ISTP',
    name: 'Le Virtuose',
    family: 'Explorateurs',
    familyDescription: 'Pragmatiques, spontanés, centrés sur l\'action immédiate et l\'expérimentation',
    shortDescription: "Artisan pragmatique et indépendant. Vous excellez dans la résolution de problèmes pratiques avec vos mains. Votre calme et votre ingéniosité vous rendent adaptable.",
    mainTraits: ["Pragmatique", "Indépendant", "Pratique"],
    color: "bg-amber-600",
    icon: "heroicons:wrench-screwdriver",
    fullDescription: "Les ISTP sont des virtuoses pratiques qui excellent dans le travail manuel et la résolution de problèmes concrets. Ils aiment comprendre comment les choses fonctionnent.",
    strengths: ["Pragmatisme", "Ingéniosité", "Calme sous pression", "Indépendance", "Adaptabilité"],
    challenges: ["Difficulté avec les émotions", "Impulsivité", "Réticence à s'engager", "Communication limitée"],
    psychologicalNeeds: ["Liberté", "Action", "Défis pratiques", "Autonomie"],
    underStress: "Se replie dans l'isolement et peut avoir des explosions émotionnelles"
  },

  ISFP: {
    code: 'ISFP',
    name: 'L\'Aventurier',
    family: 'Explorateurs',
    familyDescription: 'Pragmatiques, spontanés, centrés sur l\'action immédiate et l\'expérimentation',
    shortDescription: "Artiste sensible et spontané. Vous vivez dans le moment présent avec une appréciation esthétique unique. Votre créativité et votre douceur inspirent par l'exemple.",
    mainTraits: ["Artiste", "Spontané", "Sensible"],
    color: "bg-amber-600",
    icon: "heroicons:camera",
    fullDescription: "Les ISFP sont des artistes sensibles qui vivent pleinement le moment présent. Ils expriment leur créativité à travers l'art et la beauté.",
    strengths: ["Créativité artistique", "Sensibilité", "Flexibilité", "Authenticité", "Appréciation esthétique"],
    challenges: ["Hypersensibilité", "Difficulté à planifier", "Évitement des conflits", "Passivité"],
    psychologicalNeeds: ["Liberté d'expression", "Beauté", "Harmonie", "Moment présent"],
    underStress: "Devient anxieux et peut se replier dans l'isolement"
  },

  ESTP: {
    code: 'ESTP',
    name: 'L\'Entrepreneur',
    family: 'Explorateurs',
    familyDescription: 'Pragmatiques, spontanés, centrés sur l\'action immédiate et l\'expérimentation',
    shortDescription: "Fonceur énergique et audacieux. Vous vivez pour l'action immédiate et les défis excitants. Votre charisme et votre adaptabilité font de vous un excellent négociateur.",
    mainTraits: ["Audacieux", "Énergique", "Adaptable"],
    color: "bg-amber-600",
    icon: "heroicons:bolt",
    fullDescription: "Les ESTP sont des entrepreneurs énergiques qui vivent dans l'action immédiate. Ils excellent dans les situations qui demandent réflexes et adaptabilité.",
    strengths: ["Énergie", "Charisme", "Pragmatisme", "Adaptabilité", "Courage"],
    challenges: ["Impulsivité", "Prise de risques excessive", "Difficulté à planifier", "Insensibilité"],
    psychologicalNeeds: ["Action", "Adrénaline", "Liberté", "Défis"],
    underStress: "Devient encore plus impulsif et peut prendre des risques dangereux"
  },

  ESFP: {
    code: 'ESFP',
    name: 'L\'Amuseur',
    family: 'Explorateurs',
    familyDescription: 'Pragmatiques, spontanés, centrés sur l\'action immédiate et l\'expérimentation',
    shortDescription: "Performeur joyeux et spontané. L'âme de la fête, vous vivez pour le plaisir et partagez votre joie contagieuse. Votre enthousiasme et votre générosité illuminent chaque moment.",
    mainTraits: ["Joyeux", "Spontané", "Généreux"],
    color: "bg-amber-600",
    icon: "heroicons:face-smile",
    fullDescription: "Les ESFP sont des performeurs joyeux qui vivent pour le moment présent. Ils partagent leur enthousiasme contagieux et créent une atmosphère festive.",
    strengths: ["Enthousiasme", "Générosité", "Sens pratique", "Charisme", "Optimisme"],
    challenges: ["Difficulté à planifier", "Évitement des problèmes", "Besoin d'attention", "Impulsivité"],
    psychologicalNeeds: ["Plaisir", "Attention", "Liberté", "Nouveauté"],
    underStress: "Devient impulsif et peut fuir les responsabilités dans le divertissement"
  }
};

// Helper pour obtenir les types par famille
export const getTypesByFamily = (family: MBTIFamily): MBTITypeInfo[] => {
  return Object.values(mbtiTypes).filter(type => type.family === family);
};

// Helper pour obtenir la description de la famille
export const familyDescriptions: Record<MBTIFamily, string> = {
  'Analystes': 'Les Analystes sont des penseurs rationnels qui valorisent la logique, la stratégie et l\'innovation. Ils excellent dans la résolution de problèmes complexes et la vision à long terme.',
  'Diplomates': 'Les Diplomates sont des idéalistes empathiques qui valorisent l\'authenticité, l\'harmonie et le développement personnel. Ils excellent dans les relations humaines et l\'inspiration.',
  'Sentinelles': 'Les Sentinelles sont des gardiens fiables qui valorisent la stabilité, le devoir et la tradition. Ils excellent dans l\'organisation et la création d\'environnements sécurisants.',
  'Explorateurs': 'Les Explorateurs sont des pragmatiques spontanés qui valorisent l\'action, l\'expérimentation et le moment présent. Ils excellent dans l\'adaptation et la résolution pratique.'
};
