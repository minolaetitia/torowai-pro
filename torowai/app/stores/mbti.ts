import { defineStore } from 'pinia'
import { mbtiQuestions, type MBTIQuestion } from '../data/mbtiQuestions'
import { mbtiTypes, type MBTIType, type MBTIFamily } from '../data/mbtiTypes'

type Answer = 'A' | 'B' | 'C';

export const useMBTIStore = defineStore('mbti', {
  state: () => ({
    answers: {} as Record<number, Answer>,
    currentQuestionIndex: 0,
    results: null as null | {
      type: MBTIType;
      family: MBTIFamily;
      scores: {
        EI: number; // Positif = E, Négatif = I
        SN: number; // Positif = S, Négatif = N
        TF: number; // Positif = T, Négatif = F
        JP: number; // Positif = J, Négatif = P
      };
      preferences: {
        E_or_I: 'E' | 'I';
        S_or_N: 'S' | 'N';
        T_or_F: 'T' | 'F';
        J_or_P: 'J' | 'P';
      };
    },
  }),

  getters: {
    currentQuestion(): MBTIQuestion | undefined {
      return mbtiQuestions[this.currentQuestionIndex];
    },
    
    progress(): number {
      return ((this.currentQuestionIndex) / mbtiQuestions.length) * 100;
    },
    
    isLastQuestion(): boolean {
      return this.currentQuestionIndex === mbtiQuestions.length - 1;
    },
    
    isFirstQuestion(): boolean {
      return this.currentQuestionIndex === 0;
    },
    
    isComplete(): boolean {
      return Object.keys(this.answers).length === mbtiQuestions.length;
    },

    // Progress par dimension (pour visualisation)
    dimensionProgress(): Record<string, number> {
      const dimensions = { EI: 0, SN: 0, TF: 0, JP: 0 };
      
      mbtiQuestions.forEach((question, index) => {
        if (index <= this.currentQuestionIndex) {
          dimensions[question.dimension]++;
        }
      });

      return {
        EI: (dimensions.EI / 5) * 100,
        SN: (dimensions.SN / 5) * 100,
        TF: (dimensions.TF / 5) * 100,
        JP: (dimensions.JP / 5) * 100,
      };
    }
  },

  actions: {
    setAnswer(questionId: number, value: Answer) {
      this.answers[questionId] = value;
    },

    nextQuestion() {
      if (this.currentQuestionIndex < mbtiQuestions.length - 1) {
        this.currentQuestionIndex++;
      }
    },

    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },

    calculateResults() {
      // Initialize scores
      const scores = {
        EI: 0, // Positif = E (extraversion), Négatif = I (introversion)
        SN: 0, // Positif = S (sensation), Négatif = N (intuition)
        TF: 0, // Positif = T (thinking), Négatif = F (feeling)
        JP: 0, // Positif = J (judging), Négatif = P (perceiving)
      };

      // Calculer les scores
      mbtiQuestions.forEach((question) => {
        const answer = this.answers[question.id];
        if (!answer) return;

        let points = 0;
        if (answer === 'A') points = 2;      // Premier pôle (E, S, T, J)
        else if (answer === 'B') points = 0; // Neutre
        else if (answer === 'C') points = -2; // Second pôle (I, N, F, P)

        scores[question.dimension] += points;
      });

      // Déterminer les préférences
      const preferences = {
        E_or_I: scores.EI >= 0 ? 'E' : 'I' as 'E' | 'I',
        S_or_N: scores.SN >= 0 ? 'S' : 'N' as 'S' | 'N',
        T_or_F: scores.TF >= 0 ? 'T' : 'F' as 'T' | 'F',
        J_or_P: scores.JP >= 0 ? 'J' : 'P' as 'J' | 'P',
      };

      // Construire le type MBTI (ex: INFP, ENTJ, etc.)
      const type = `${preferences.E_or_I}${preferences.S_or_N}${preferences.T_or_F}${preferences.J_or_P}` as MBTIType;

      // Obtenir la famille
      const typeInfo = mbtiTypes[type];
      const family = typeInfo.family;

      // Stocker les résultats
      this.results = {
        type,
        family,
        scores,
        preferences,
      };

      return this.results;
    },

    reset() {
      this.answers = {};
      this.currentQuestionIndex = 0;
      this.results = null;
    },

    // Helper pour obtenir la force d'une préférence (0-100%)
    getPreferenceStrength(dimension: 'EI' | 'SN' | 'TF' | 'JP'): number {
      if (!this.results) return 50;
      
      // Score maximum possible : 5 questions × 2 points = 10
      const maxScore = 10;
      const score = Math.abs(this.results.scores[dimension]);
      
      // Convertir en pourcentage (50% = neutre, 100% = préférence maximale)
      return 50 + (score / maxScore) * 50;
    },

    // Helper pour obtenir le label de la préférence
    getPreferenceLabel(dimension: 'EI' | 'SN' | 'TF' | 'JP'): string {
      if (!this.results) return '';
      
      const labels = {
        EI: this.results.preferences.E_or_I === 'E' ? 'Extraversion' : 'Introversion',
        SN: this.results.preferences.S_or_N === 'S' ? 'Sensation' : 'Intuition',
        TF: this.results.preferences.T_or_F === 'T' ? 'Pensée' : 'Sentiment',
        JP: this.results.preferences.J_or_P === 'J' ? 'Jugement' : 'Perception',
      };
      
      return labels[dimension];
    }
  }
})
