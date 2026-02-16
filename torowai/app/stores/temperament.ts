import { defineStore } from 'pinia'
import { questions, type Question } from '../data/questions'

export const useTemperamentStore = defineStore('temperament', {
  state: () => ({
    answers: {} as Record<number, number>,
    currentQuestionIndex: 0,
    results: null as null | {
      primary: string;
      secondary: string;
      scores: Record<string, number>;
    },
  }),

  getters: {
    currentQuestion(): Question | undefined {
      return questions[this.currentQuestionIndex];
    },
    progress(): number {
      return ((this.currentQuestionIndex) / questions.length) * 100;
    },
    isLastQuestion(): boolean {
      return this.currentQuestionIndex === questions.length - 1;
    },
    isFirstQuestion(): boolean {
      return this.currentQuestionIndex === 0;
    },
    isComplete(): boolean {
      return Object.keys(this.answers).length === questions.length;
    }
  },

  actions: {
    setAnswer(questionId: number, value: number) {
      this.answers[questionId] = value;
    },
    nextQuestion() {
      if (this.currentQuestionIndex < questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    calculateResults() {
      const scores = {
        melancolique: 0,
        flegmatique: 0,
        sanguin: 0,
        colerique: 0,
      };

      questions.forEach(q => {
        const answer = this.answers[q.id] || 3; // default to middle if not answered
        scores[q.category] += answer;
      });

      const sortedCategories = Object.entries(scores)
        .sort(([, a], [, b]) => b - a);

      this.results = {
        primary: sortedCategories[0][0],
        secondary: sortedCategories[1][0],
        scores,
      };
    },
    resetTest() {
      this.answers = {};
      this.currentQuestionIndex = 0;
      this.results = null;
    }
  }
})
