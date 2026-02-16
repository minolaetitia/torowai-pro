export interface Question {
  id: number;
  text: string;
  category: 'melancolique' | 'flegmatique' | 'sanguin' | 'colerique';
}

export const questions: Question[] = [
  // Mélancolique (Sensibilité émotionnelle, tristesse, perfectionnisme anxieux, introspection)
  { id: 1, text: "Je ressens souvent une certaine tristesse ou mélancolie sans raison apparente.", category: 'melancolique' },
  { id: 2, text: "Je suis très perfectionniste et je me critique sévèrement quand je fais des erreurs.", category: 'melancolique' },
  { id: 3, text: "J'ai tendance à ruminer mes pensées et à analyser profondément mes émotions.", category: 'melancolique' },
  { id: 4, text: "Je suis hypersensible aux critiques et j'ai du mal à les oublier.", category: 'melancolique' },
  { id: 5, text: "Je préfère la solitude et les moments d'introspection aux grandes fêtes bruyantes.", category: 'melancolique' },

  // Flegmatique (Calme émotionnel, lenteur, patience, stabilité, évitement)
  { id: 6, text: "Je reste calme et imperturbable même dans des situations stressantes.", category: 'flegmatique' },
  { id: 7, text: "Je prends mon temps pour agir et on me dit souvent que je suis trop lent.", category: 'flegmatique' },
  { id: 8, text: "J'évite les conflits à tout prix et je préfère ne pas m'impliquer dans les disputes.", category: 'flegmatique' },
  { id: 9, text: "J'ai une patience remarquable et je peux attendre longtemps sans m'énerver.", category: 'flegmatique' },
  { id: 10, text: "Je suis stable et prévisible, j'aime ma routine confortable.", category: 'flegmatique' },

  // Sanguin (Sociabilité extravertie, optimisme, recherche de plaisir, légèreté, impulsivité joyeuse)
  { id: 11, text: "Je suis l'âme de la fête et j'adore être entouré de beaucoup de monde.", category: 'sanguin' },
  { id: 12, text: "Je suis naturellement optimiste et je vois toujours le bon côté des choses.", category: 'sanguin' },
  { id: 13, text: "Je recherche activement les plaisirs et les divertissements dans ma vie.", category: 'sanguin' },
  { id: 14, text: "Je suis spontané et j'agis souvent par impulsion sans trop réfléchir aux conséquences.", category: 'sanguin' },
  { id: 15, text: "J'ai beaucoup d'énergie et d'enthousiasme que je communique facilement aux autres.", category: 'sanguin' },

  // Colérique (Colère rapide, domination, ambition intense, décisions brutales, passion)
  { id: 16, text: "Je me mets facilement en colère quand les choses ne vont pas comme je veux.", category: 'colerique' },
  { id: 17, text: "J'aime avoir le contrôle et j'ai tendance à dominer dans mes relations.", category: 'colerique' },
  { id: 18, text: "Je suis extrêmement ambitieux et je ferai tout pour atteindre mes objectifs.", category: 'colerique' },
  { id: 19, text: "Je prends des décisions rapides et je n'aime pas qu'on me contredise.", category: 'colerique' },
  { id: 20, text: "Je suis passionné et intense dans tout ce que je fais, sans demi-mesure.", category: 'colerique' },
];
