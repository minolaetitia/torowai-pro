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
  analyste: {
    id: 'analyste',
    name: 'L\'Analyste',
    description: "Précis, logique et structuré, tu excelles dans l'organisation et la compréhension technique du monde.",
    strengths: ["Sens de l'organisation", "Rigueur logique", "Attention aux détails", "Fiabilité"],
    challenges: ["Besoin excessif de contrôle", "Difficulté face à l'imprévu", "Tendance au perfectionnisme"],
    needs: ["Structure et planification", "Faits concrets", "Reconnaissance du travail bien fait"],
    icon: "heroicons:clipboard-document-check",
    color: "bg-blue-500"
  },
  diplomate: {
    id: 'diplomate',
    name: 'Le Diplomate',
    description: "Chaleureux et empathique, tu es le ciment qui unit les gens et crée l'harmonie autour de toi.",
    strengths: ["Empathie naturelle", "Capacité d'écoute", "Sensibilité relationnelle", "Bienveillance"],
    challenges: ["Difficulté à dire non", "Peur du conflit", "Oubli de ses propres besoins"],
    needs: ["Harmonie relationnelle", "Sentiment d'appartenance", "Échanges authentiques"],
    icon: "heroicons:heart",
    color: "bg-purple-500"
  },
  explorateur: {
    id: 'explorateur',
    name: 'L\'Explorateur',
    description: "Créatif et plein d'enthousiasme, tu es toujours prêt pour une nouvelle aventure ou une idée originale.",
    strengths: ["Créativité débordante", "Adaptabilité", "Enthousiasme communicatif", "Optimisme"],
    challenges: ["Difficulté de concentration", "Impulsivité", "Éparpillement"],
    needs: ["Nouveauté et variété", "Liberté d'action", "Stimulation intellectuelle"],
    icon: "heroicons:rocket-launch",
    color: "bg-amber-500"
  },
  commandant: {
    id: 'commandant',
    name: 'Le Commandant',
    description: "Déterminé et orienté vers l'action, tu sais prendre des décisions et mener les projets à leur terme.",
    strengths: ["Leadership naturel", "Efficacité", "Capacité de décision", "Persévérance"],
    challenges: ["Impatience", "Exigence élevée envers autrui", "Tendance à l'autoritarisme"],
    needs: ["Résultats concrets", "Autonomie", "Défis à relever"],
    icon: "heroicons:bolt",
    color: "bg-indigo-600"
  }
};
