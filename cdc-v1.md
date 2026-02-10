Tu es un expert produit, UX designer et développeur frontend senior.
Tu dois concevoir une application web moderne, pédagogique et bienveillante
de connaissance de soi, orientée psychologie et développement personnel.

### CONTEXTE DU PROJET
L’application aide les utilisateurs à identifier leur tempérament
(primaire et secondaire) via un questionnaire psychologique accessible,
puis leur restitue un résultat clair, utile et motivant.

Cette version est la PARTIE FREEMIUM (MVP).

Nom de l'appli : Torowai : "Le guide intelligent pour trouver ton chemin"


Le projet est basé sur :
- Nuxt.js 4

- TypeScript
- Tailwind CSS
- Pinia (state management)
- Mobile-first, responsive
- Ton sérieux, humain, non médical

---

## OBJECTIF DU MVP (FREEMIUM)

1. Permettre à un utilisateur de :
   - comprendre l’intérêt du test
   - répondre à un questionnaire
   - obtenir son tempérament primaire + secondaire
   - comprendre ses forces et points de vigilance

2. Donner envie de continuer vers les modules premium
   (PCM, identité, mission de vie, Kaizen)

---

## PAGES À CONSTRUIRE

### 1. Landing Page

Objectif : convaincre et rassurer.

Sections :
- Hero section :
  - Titre fort : “Mieux te comprendre pour mieux avancer”
  - Sous-titre : “Découvre ton tempérament et ton mode de fonctionnement naturel”
  - CTA principal : “Découvrir mon tempérament”

- Section bénéfices :
  - Comprendre son fonctionnement
  - Mieux décider
  - Trouver sa direction

- Section pédagogie :
  - Ce test n’est pas un diagnostic médical
  - Approche bienveillante et évolutive

- CTA secondaire :
  - “Commencer le test gratuitement”

---

### 2. Page Questionnaire – Tempérament

Objectif : expérience fluide et engageante.

Fonctionnalités :
- Questionnaire progressif (1 question par écran)
- 20 à 30 questions maximum
- Types de réponses :
  - choix multiples
  - échelle de 1 à 5 (pas du tout → tout à fait)

UX :
- Barre de progression
- Boutons “Suivant / Précédent”
- Sauvegarde automatique des réponses (store Pinia)

Exemples de thématiques de questions :
- Rapport à l’action
- Gestion des émotions
- Réactivité
- Rapport au temps
- Besoin de sécurité / nouveauté

---

### 3. Logique de calcul (côté frontend)

Mettre en place une logique simple et lisible :

- Chaque réponse attribue des points à plusieurs axes
- À la fin :
  - tempérament dominant = score le plus élevé
  - tempérament secondaire = second score

Stocker :
- réponses utilisateur
- scores
- résultat final

---

### 4. Page Résultats – Freemium

Objectif : clarté + valeur immédiate + curiosité.

Afficher :
- Tempérament primaire (nom + description)
- Tempérament secondaire
- Graphique simple (barres ou radar)
- Sections pédagogiques :
  - Forces naturelles
  - Points de vigilance
  - Besoins psychologiques clés

Ton :
- bienveillant
- motivant
- non enfermant

---

### 5. Teasing Premium (upsell soft)

À la fin des résultats :

Afficher des cartes verrouillées :
- “Découvrir ton profil de communication (PCM)”
- “Clarifier ta mission de vie”
- “Trouver ton job aligné”
- “Plan Kaizen personnalisé”

CTA :
- “Débloquer mon profil complet”

---

## COMPOSANTS UI À CRÉER

- Button CTA (primary / secondary)
- Card résultat tempérament
- Progress bar questionnaire
- Question block
- Résultat graphique simple
- Premium locked card

Tous les composants doivent être :
- réutilisables
- propres
- accessibles
- cohérents visuellement

---

## DESIGN & STYLE

- Style moderne, épuré, premium accessible
- Beaucoup d’espace blanc
- Typographie lisible et humaine
- Icônes simples
- Animations légères (transitions)

Palette suggérée : Royal Violet &  Ocean Blue

- couleurs douces et rassurantes
- éviter les couleurs agressives
- contraste suffisant pour l’accessibilité

---

## CONTRAINTES IMPORTANTES

- Ne jamais parler de diagnostic ou de pathologie
- Toujours utiliser un vocabulaire neutre et positif
- Aucun jugement ou étiquette rigide
- Préparer l’architecture pour des modules futurs

---

## LIVRABLE ATTENDU

- Pages Builder.io prêtes à être intégrées dans Nuxt 4

- Composants modulaires
- UX fluide et engageante
- Base solide pour évolution Premium

Tu construis le produit comme un MVP sérieux,
centré sur l’humain, la clarté et la progression personnelle.
