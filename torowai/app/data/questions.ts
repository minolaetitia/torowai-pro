export interface Question {
  id: number;
  text: string;
  category: 'analyste' | 'diplomate' | 'explorateur' | 'commandant';
}

export const questions: Question[] = [
  // Analyste (Logique, Structure, Détails)
  { id: 1, text: "J'aime que les choses soient organisées et planifiées à l'avance.", category: 'analyste' },
  { id: 2, text: "Je prends mes décisions en me basant sur des faits et des données logiques.", category: 'analyste' },
  { id: 3, text: "Je suis attentif aux détails que les autres ont tendance à ignorer.", category: 'analyste' },
  { id: 4, text: "J'ai besoin de comprendre le 'pourquoi' technique des choses.", category: 'analyste' },
  { id: 5, text: "Le désordre ou l'improvisation me stressent facilement.", category: 'analyste' },

  // Diplomate (Empathie, Harmonie, Relations)
  { id: 6, text: "Je suis très sensible aux émotions des personnes qui m'entourent.", category: 'diplomate' },
  { id: 7, text: "L'harmonie du groupe est plus importante pour moi que d'avoir raison.", category: 'diplomate' },
  { id: 8, text: "On dit souvent de moi que je suis une personne à l'écoute et bienveillante.", category: 'diplomate' },
  { id: 9, text: "Je ferais tout pour éviter un conflit direct avec un proche.", category: 'diplomate' },
  { id: 10, text: "J'ai besoin de me sentir entouré et soutenu pour m'épanouir.", category: 'diplomate' },

  // Explorateur (Créativité, Spontanéité, Enthousiasme)
  { id: 11, text: "J'aime essayer de nouvelles expériences, même si elles sont risquées.", category: 'explorateur' },
  { id: 12, text: "Je m'ennuie rapidement si je dois faire la même tâche tous les jours.", category: 'explorateur' },
  { id: 13, text: "Je suis souvent celui qui apporte de nouvelles idées originales dans un groupe.", category: 'explorateur' },
  { id: 14, text: "J'agis souvent sur un coup de tête, suivant mon intuition du moment.", category: 'explorateur' },
  { id: 15, text: "Le changement est pour moi une source d'excitation plutôt que de peur.", category: 'explorateur' },

  // Commandant (Action, Résultats, Influence)
  { id: 16, text: "Je me sens à l'aise lorsqu'il s'agit de prendre des décisions pour un groupe.", category: 'commandant' },
  { id: 17, text: "Mon principal moteur est d'atteindre mes objectifs et de voir des résultats concrets.", category: 'commandant' },
  { id: 18, text: "Je n'hésite pas à dire ce que je pense, même si cela peut déplaire.", category: 'commandant' },
  { id: 19, text: "En situation de crise, je garde mon sang-froid et je prends les commandes.", category: 'commandant' },
  { id: 20, text: "Je préfère diriger plutôt que de suivre les directives des autres.", category: 'commandant' },
];
