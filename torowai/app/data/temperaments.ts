export interface TemperamentInfo {
  id: string;
  name: string;
  description: string;
  strengths: string[];
  challenges: string[];
  needs: string[];
  icon: string;
  color: string;
}

export const temperaments: Record<string, TemperamentInfo> = {
  melancolique: {
    id: 'melancolique',
    name: 'Mélancolique',
    description: "Sensible et introspectif, tu ressens les émotions profondément. Perfectionniste anxieux, tu es créatif mais porté à la tristesse et à la rumination.",
    strengths: ["Profondeur émotionnelle", "Créativité artistique", "Perfectionnisme", "Sensibilité", "Capacité d'introspection"],
    challenges: ["Tendance à la tristesse", "Autocritique excessive", "Anxiété", "Difficulté à lâcher prise", "Hypersensibilité aux critiques"],
    needs: ["Temps de solitude", "Expression créative", "Compréhension émotionnelle", "Beauté et harmonie", "Validation affective"],
    icon: "heroicons:clipboard-document-check",
    color: "bg-blue-500"
  },
  flegmatique: {
    id: 'flegmatique',
    name: 'Flegmatique',
    description: "Calme et imperturbable, tu gardes ton sang-froid en toutes circonstances. Patient et stable, tu évites les conflits et préfères la tranquillité.",
    strengths: ["Calme émotionnel", "Patience remarquable", "Stabilité", "Capacité d'écoute", "Diplomatie naturelle"],
    challenges: ["Lenteur d'action", "Procrastination", "Difficulté à s'affirmer", "Tendance à l'inertie", "Manque de motivation"],
    needs: ["Paix et tranquillité", "Routine stable", "Évitement des conflits", "Temps pour agir", "Environnement harmonieux"],
    icon: "heroicons:heart",
    color: "bg-purple-500"
  },
  sanguin: {
    id: 'sanguin',
    name: 'Sanguin',
    description: "Joyeux et sociable, tu es l'âme de la fête. Optimiste et spontané, tu recherches activement le plaisir et tu communiques ton enthousiasme contagieux.",
    strengths: ["Sociabilité extravertie", "Optimisme naturel", "Enthousiasme communicatif", "Énergie débordante", "Spontanéité joyeuse"],
    challenges: ["Impulsivité excessive", "Superficialité", "Difficulté de concentration", "Manque de sérieux", "Recherche constante de stimulation"],
    needs: ["Interactions sociales fréquentes", "Plaisirs et divertissements", "Nouveauté constante", "Reconnaissance sociale", "Liberté d'expression"],
    icon: "heroicons:rocket-launch",
    color: "bg-amber-500"
  },
  colerique: {
    id: 'colerique',
    name: 'Colérique',
    description: "Passionné et intense, tu es un leader dominant qui agit avec force. Ambitieux et déterminé, tu te mets rapidement en colère quand on te contrarie.",
    strengths: ["Leadership autoritaire", "Ambition intense", "Décisions rapides", "Passion", "Détermination sans faille"],
    challenges: ["Colère rapide", "Autoritarisme", "Impatience extrême", "Domination excessive", "Intolérance à la frustration"],
    needs: ["Contrôle et pouvoir", "Action immédiate", "Défis stimulants", "Respect et obéissance", "Accomplissement de buts"],
    icon: "heroicons:bolt",
    color: "bg-indigo-600"
  }
};
