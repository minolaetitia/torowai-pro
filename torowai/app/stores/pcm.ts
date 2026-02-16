import { defineStore } from 'pinia'
import { pcmQuestions, type PcmQuestion } from '../data/pcmQuestions'

export interface PcmResults {
  base: string;
  phase: string;
  scores: Record<string, number>;
  percentages: Record<string, number>;
  towerLevels: string[];
}

export const usePcmStore = defineStore('pcm', {
  state: () => ({
    answers: {} as Record<number, number>,
    currentQuestionIndex: 0,
    results: null as null | PcmResults,
  }),

  getters: {
    currentQuestion(): PcmQuestion | undefined {
      return pcmQuestions[this.currentQuestionIndex];
    },
    progress(): number {
      return ((this.currentQuestionIndex) / pcmQuestions.length) * 100;
    },
    isLastQuestion(): boolean {
      return this.currentQuestionIndex === pcmQuestions.length - 1;
    },
    isFirstQuestion(): boolean {
      return this.currentQuestionIndex === 0;
    },
    isComplete(): boolean {
      return Object.keys(this.answers).length === pcmQuestions.length;
    }
  },

  actions: {
    setAnswer(questionId: number, value: number) {
      this.answers[questionId] = value;
    },
    nextQuestion() {
      if (this.currentQuestionIndex < pcmQuestions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    calculateResults() {
      // Initialize scores for all 6 PCM types
      const scores = {
        travaillomane: 0,
        perseverant: 0,
        empathique: 0,
        reveur: 0,
        rebelle: 0,
        promoteur: 0,
      };

      // Sum scores by category
      pcmQuestions.forEach(q => {
        const answer = this.answers[q.id] || 3; // default to middle if not answered
        scores[q.category] += answer;
      });

      // Calculate total points
      const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);

      // Calculate percentages
      const percentages: Record<string, number> = {};
      Object.entries(scores).forEach(([type, score]) => {
        percentages[type] = (score / totalPoints) * 100;
      });

      // Sort categories by score (descending)
      const sortedCategories = Object.entries(scores)
        .sort(([, a], [, b]) => b - a);

      // Base = highest score, Phase = second highest
      const base = sortedCategories[0][0];
      const phase = sortedCategories[1][0];

      // Tower levels = all types ordered by score (for visualization)
      const towerLevels = sortedCategories.map(([type]) => type);

      this.results = {
        base,
        phase,
        scores,
        percentages,
        towerLevels,
      };
    },
    resetTest() {
      this.answers = {};
      this.currentQuestionIndex = 0;
      this.results = null;
    }
  }
})
