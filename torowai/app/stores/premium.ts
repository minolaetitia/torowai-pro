import { defineStore } from 'pinia'

interface PremiumState {
  isPremium: boolean;
  unlockedModules: string[];
  unlockDate: string | null;
}

const STORAGE_KEY = 'torowai_premium_status';

export const usePremiumStore = defineStore('premium', {
  state: (): PremiumState => ({
    isPremium: false,
    unlockedModules: [],
    unlockDate: null,
  }),

  getters: {
    isPcmUnlocked(): boolean {
      return this.isPremium && this.unlockedModules.includes('pcm');
    },
    hasAnyPremium(): boolean {
      return this.isPremium;
    },
  },

  actions: {
    checkPremiumStatus() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const data = JSON.parse(stored);
          this.isPremium = data.isPremium || false;
          this.unlockedModules = data.unlockedModules || [];
          this.unlockDate = data.unlockDate || null;
        }
      } catch (error) {
        // Fallback to sessionStorage if localStorage fails
        try {
          const stored = sessionStorage.getItem(STORAGE_KEY);
          if (stored) {
            const data = JSON.parse(stored);
            this.isPremium = data.isPremium || false;
            this.unlockedModules = data.unlockedModules || [];
            this.unlockDate = data.unlockDate || null;
          }
        } catch {
          console.warn('Storage not available. Premium features will not persist.');
        }
      }
    },

    unlockPremium(modules: string[] = ['pcm', 'mission', 'job', 'kaizen']) {
      this.isPremium = true;
      this.unlockedModules = modules;
      this.unlockDate = new Date().toISOString();

      const data = {
        isPremium: this.isPremium,
        unlockedModules: this.unlockedModules,
        unlockDate: this.unlockDate,
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        // Try sessionStorage as fallback
        try {
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch {
          console.warn('Unable to save premium status. Features will be lost on page reload.');
        }
      }
    },

    resetPremium() {
      this.isPremium = false;
      this.unlockedModules = [];
      this.unlockDate = null;

      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        try {
          sessionStorage.removeItem(STORAGE_KEY);
        } catch {
          // Silent fail
        }
      }
    }
  }
})
