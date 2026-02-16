# Cahier des charges

## Application d’identification du tempérament, de l’identité et de la mission de vie (Kaizen)

---

## 1. Contexte et vision du projet

De nombreuses personnes cherchent à mieux se comprendre afin de prendre des décisions plus alignées avec leur personnalité, leur énergie et leurs valeurs (orientation professionnelle, sens de la vie, équilibre personnel).

Cette application a pour vocation d’accompagner l’utilisateur dans une **démarche progressive de connaissance de soi**, en partant d’un premier socle simple (le tempérament primaire / secondaire), puis en intégrant des modèles plus avancés (ex : PCM), pour aboutir à une **clarification de sa mission de vie (approche Kaizen)** et de son job de rêve.

L’application doit être :

* Accessible
* Pédagogique
* Non jugeante
* Évolutive
* Orientée action et amélioration continue

---

## 2. Objectifs du projet

### Objectifs principaux

* Aider l’utilisateur à identifier son **tempérament dominant** (primaire / secondaire)
* Lui fournir une **lecture claire et concrète** de son fonctionnement psychologique
* Lui proposer des **pistes d’orientation personnelle et professionnelle**
* L’accompagner vers une **mission de vie alignée**, via une démarche Kaizen (petits pas)

### Objectifs secondaires

* Centraliser plusieurs modèles psychologiques dans une seule plateforme
* Créer une base de données comportementale anonymisée (à terme)
* Permettre un suivi de l’évolution personnelle dans le temps

---

## 3. Public cible

* Étudiants et jeunes actifs
* Personnes en reconversion professionnelle
* Entrepreneurs / freelances
* Personnes en quête de sens ou de développement personnel

---

## 4. Périmètre fonctionnel

### 4.1 Module 1 – Tempéraments classiques (Hippocrate)

#### Fondement théorique

Ce module est basé sur la théorie des quatre tempéraments attribuée à Hippocrate :

* Colérique
* Sanguin
* Mélancolique
* Flegmatique

L’objectif est d’identifier le tempérament dominant et le tempérament secondaire de l’utilisateur.

#### Description

Ce module constitue la base freemium de l’application.
Il permet à l’utilisateur de comprendre son énergie naturelle, sa dynamique comportementale et sa manière spontanée d’interagir avec le monde.

#### Axes d’évaluation

* Niveau d’énergie
* Réactivité émotionnelle
* Rapport à l’action
* Rapport aux autres
* Gestion du stress
* Organisation vs spontanéité

#### Fonctionnalités

* Questionnaire progressif (20–30 questions)
* Échelles de réponse (type Likert)
* Calcul de score sur les 4 tempéraments
* Identification :

  * Tempérament dominant
  * Tempérament secondaire

#### Restitution

Pour chaque tempérament :

* Description claire et pédagogique
* Forces naturelles
* Points de vigilance
* Besoins psychologiques
* Comportement sous stress

---

### 4.2 Module 2 – Profil de personnalité (inspiré MBTI)

#### Clarification conceptuelle

Ce module est distinct des tempéraments d’Hippocrate.

Il s’inspire du modèle MBTI (Myers-Briggs Type Indicator) et de ses déclinaisons modernes.

Dans certaines plateformes populaires (ex : regroupement en 4 grandes familles), les profils sont classés en :

* **Diplomates (NF)** : Empathiques, idéalistes, centrés sur les relations humaines et les valeurs
* **Analystes (NT)** : Rationnels, stratégiques, centrés sur la logique et la vision
* **Explorateurs (SP)** : Pragmatiques, spontanés, centrés sur l'action immédiate et l'expérimentation
* **Sentinelles (SJ)** : Organisés, fiables, centrés sur la stabilité et le devoir

Important :

* “Commandant” n’est pas une famille mais un type spécifique (ex : ENTJ dans les classifications courantes).
* L’application ToroWai doit éviter les confusions entre famille de profils et type précis.

#### Positionnement dans ToroWai

Ce module explore les préférences cognitives selon **4 dimensions** :

1. **Orientation de l'énergie** : Extraversion (E) vs Introversion (I)
   * D'où tirez-vous votre énergie ?

2. **Traitement de l'information** : Sensation (S) vs Intuition (N)
   * Comment percevez-vous le monde ?

3. **Prise de décision** : Pensée/Thinking (T) vs Sentiment/Feeling (F)
   * Comment prenez-vous vos décisions ?

4. **Rapport à l'organisation** : Jugement (J) vs Perception (P)
   * Comment structurez-vous votre vie ?

Ces 4 dimensions combininées forment l'un des **16 types de personnalité** (ex : INFP, ENTJ, ISTP, etc.).

Il sera intégré comme **module séparé** (menu dédié), distinct du module Tempéraments.

---

#### Axes d'évaluation détaillés

##### 1. Extraversion (E) vs Introversion (I)

**Définition** :
* **E** : Tire son énergie des interactions sociales et du monde extérieur
* **I** : Tire son énergie de son monde intérieur et de la réflexion

**Questions** :

1. **Dans une soirée, vous êtes plutôt :**
   * A. Énergisé(e), je rencontre de nouvelles personnes facilement
   * B. Entre les deux, dépend de mon humeur
   * C. Je me fatigue rapidement et préfère des conversations en petit comité

2. **Après une longue journée de travail, vous préférez :**
   * A. Sortir avec des amis pour décompresser
   * B. Selon les jours, tantôt sortir, tantôt rester seul(e)
   * C. Rester seul(e) pour vous ressourcer

3. **Vous apprenez mieux :**
   * A. En discutant avec d'autres, en travaillant en groupe
   * B. Les deux approches me conviennent
   * C. Seul(e), en réfléchissant par vous-même

4. **Face à un problème, vous avez tendance à :**
   * A. En parler immédiatement avec quelqu'un
   * B. Réfléchir un peu, puis en discuter
   * C. Analyser le problème seul(e) avant d'en parler

5. **Votre cercle social idéal est :**
   * A. Large et diversifié
   * B. Quelques groupes différents
   * C. Restreint avec des relations profondes

---

##### 2. Sensation (S) vs Intuition (N)

**Définition** :
* **S** : Préfère les faits concrets, les détails, le présent
* **N** : Préfère les concepts abstraits, les possibilités, le futur

**Questions** :

6. **Quand on vous explique quelque chose, vous préférez :**
   * A. Des exemples concrets et des étapes précises
   * B. Un mélange des deux
   * C. Une vue d'ensemble et les concepts généraux

7. **Vous êtes plutôt :**
   * A. Pragmatique, ancré(e) dans la réalité
   * B. Équilibré(e) entre les deux
   * C. Imaginatif(ve), tourné(e) vers les possibilités

8. **Dans un projet, vous vous concentrez sur :**
   * A. Les détails pratiques et la mise en œuvre
   * B. Les deux aspects
   * C. La vision globale et l'innovation

9. **Vous préférez :**
   * A. Améliorer ce qui existe déjà
   * B. Les deux approches
   * C. Créer quelque chose de complètement nouveau

10. **À votre travail, vous êtes plus intéressé(e) par :**
    * A. Les procédures établies et les méthodes éprouvées
    * B. Un équilibre entre stabilité et innovation
    * C. Explorer de nouvelles idées et possibilités

---

##### 3. Pensée/Thinking (T) vs Sentiment/Feeling (F)

**Définition** :
* **T** : Prend des décisions basées sur la logique et l'analyse objective
* **F** : Prend des décisions basées sur les valeurs et l'impact humain

**Questions** :

11. **Quand vous prenez une décision importante, vous vous basez sur :**
    * A. L'analyse logique et les faits objectifs
    * B. Un mélange de logique et d'émotions
    * C. Vos valeurs et l'impact sur les personnes concernées

12. **Face à un conflit, vous êtes plutôt :**
    * A. Direct(e) et factuel(le), même si c'est inconfortable
    * B. Diplomatique, cherchant l'équilibre
    * C. Attentif(ve), cherchant à préserver l'harmonie

13. **Les gens disent de vous que vous êtes :**
    * A. Frank(he) et objectif(ve)
    * B. Équilibré(e)
    * C. Empathique et compréhensif(ve)

14. **Dans une critique constructive, vous valorisez :**
    * A. La clarté et la précision, même si c'est dur à entendre
    * B. Un équilibre entre honnêteté et tact
    * C. La bienveillance et la manière dont c'est formulé

15. **Selon vous, un bon leader doit être :**
    * A. Compétent et juste, prenant des décisions rationnelles
    * B. Équilibré entre efficacité et humanité
    * C. Inspirant et à l'écoute de son équipe

---

##### 4. Jugement (J) vs Perception (P)

**Définition** :
* **J** : Préfère la structure, la planification, les décisions prises
* **P** : Préfère la flexibilité, la spontanéité, garder les options ouvertes

**Questions** :

16. **Votre espace de travail est généralement :**
    * A. Organisé et rangé
    * B. Entre ordre et désordre créatif
    * C. Créatif, avec des piles de choses en cours

17. **Vous préférez :**
    * A. Planifier à l'avance et suivre votre plan
    * B. Avoir un plan général mais rester flexible
    * C. Improviser et vous adapter au fil de l'eau

18. **Face à une deadline, vous :**
    * A. Commencez tôt et finissez en avance
    * B. Vous y mettez progressivement
    * C. Travaillez mieux sous pression de dernière minute

19. **Le week-end, vous préférez :**
    * A. Avoir un programme défini
    * B. Quelques activités prévues, le reste spontané
    * C. Voir au jour le jour selon vos envies

20. **Dans un projet de groupe, vous aimez :**
    * A. Établir un plan clair avec des échéances
    * B. Un cadre souple avec de la flexibilité
    * C. Rester ouvert(e) aux opportunités qui se présentent

---

#### Système de calcul et restitution

##### Calcul des scores

Pour chaque dimension :
* Réponses A = +2 points vers le premier pôle (E, S, T, J)
* Réponses B = 0 point (neutre)
* Réponses C = +2 points vers le second pôle (I, N, F, P)

Score final par dimension :
* Si score net ≥ 3 : préférence marquée
* Si score net entre -2 et +2 : équilibré, mais on garde la lettre la plus haute

##### Les 16 types de profils

**Analystes (NT)** :
* **INTJ** - L'Architecte
* **INTP** - Le Logicien
* **ENTJ** - Le Commandant
* **ENTP** - L'Innovateur

**Diplomates (NF)** :
* **INFJ** - L'Avocat
* **INFP** - Le Médiateur
* **ENFJ** - Le Protagoniste
* **ENFP** - Le Campagneur

**Sentinelles (SJ)** :
* **ISTJ** - Le Logisticien
* **ISFJ** - Le Défenseur
* **ESTJ** - Le Directeur
* **ESFJ** - Le Consul

**Explorateurs (SP)** :
* **ISTP** - Le Virtuose
* **ISFP** - L'Aventurier
* **ESTP** - L'Entrepreneur
* **ESFP** - L'Amuseur

---

#### Restitution utilisateur

Pour chaque profil identifié, l'utilisateur reçoit :

**Version Freemium (gratuite)** :
* Identification du type de personnalité (ex : INFP)
* Famille d'appartenance (ex : Diplomate)
* Description courte (2-3 paragraphes)
* 3 traits principaux
* Aperçu limité des compatibilités

**Version Premium** :
* Description complète et détaillée du profil
* Forces et talents naturels
* Zones de vigilance et axes de développement
* Fonctionnement cognitif détaillé :
  * Fonction dominante
  * Fonction auxiliaire
  * Fonction tertiaire
  * Fonction inférieure
* Besoins psychologiques spécifiques
* Comportement sous stress
* Relations interpersonnelles :
  * Communication optimale
  * Compatibilités amoureuses
  * Dynamiques de groupe
* Recommandations professionnelles :
  * Environnements de travail favorables
  * Styles de management compatibles
  * Types de missions alignées
* Plan de développement personnel
* Comparaison avec d'autres profils
* Évolution du profil dans le temps (historique)

---

#### Fonctionnalités techniques

* **Menu dédié** : Accès depuis la navigation principale "Profil de personnalité"
* **Questionnaire progressif** : 20 questions (5 par dimension)
* **Barre de progression** : Visuelle, par dimension
* **Sauvegarde automatique** : Possibilité de reprendre plus tard
* **Résultats visuels** :
  * Graphique radar des 4 dimensions
  * Indicateur de force par préférence
  * Visualisation de la famille d'appartenance
* **Export PDF** (Premium) : Rapport complet personnalisé
* **Comparaison de profils** (Premium) : Comprendre la dynamique avec d'autres types

---

#### Distinction claire avec le Module 1

Un même utilisateur peut avoir :
* **Tempérament** : Sanguin (énergie naturelle, réactivité émotionnelle)
* **Profil MBTI** : ENFP (mode de pensée, préférences cognitives)

Ces deux modèles sont **complémentaires** :
* Le tempérament décrit **comment** vous êtes naturellement
* Le profil MBTI décrit **comment** vous fonctionnez mentalement

L'application doit expliciter cette complémentarité et offrir une synthèse croisée en version Premium.

---

### 4.3 Module 3 – Identité et valeurs

#### Description

Exploration des fondations identitaires de l’utilisateur.

#### Fonctionnalités

* Questionnaire sur les valeurs fondamentales
* Identification des talents naturels
* Analyse des motivations profondes
* Synthèse identité personnelle

---

### 4.4 Module 4 – Mission de vie (approche Kaizen)

#### Description

Module central visant à aider l’utilisateur à formuler une mission de vie réaliste, évolutive et alignée.

#### Fonctionnalités

* Croisement : tempérament + personnalité + valeurs
* Génération de pistes de mission de vie
* Définition d’objectifs à long terme
* Déclinaison en micro-actions (Kaizen)

#### Exemples de livrables

* Phrase de mission de vie personnalisée
* Axes de contribution (création, aide, leadership, etc.)
* Plan d’évolution personnel

---

### 4.5 Module 5 – Orientation professionnelle

#### Description

Aide à l’identification du job de rêve et des environnements professionnels adaptés.

#### Fonctionnalités

* Matching personnalité / métiers
* Types d’environnements favorables
* Styles de management compatibles
* Pistes de reconversion ou d’évolution

---

## 5. Parcours utilisateur (UX)

1. Landing page (vision, bénéfices)
2. Création de compte (optionnel au début)
3. Module tempérament
4. Restitution claire et visuelle
5. Déblocage progressif des autres modules
6. Tableau de bord personnel
7. Suivi de progression

---

## 6. Contraintes fonctionnelles et éthiques

* L’application **ne remplace pas un diagnostic psychologique**
* Ton bienveillant et non médical
* Aucune stigmatisation des profils
* Protection des données personnelles
* Consentement explicite de l’utilisateur

---

## 7. Architecture technique

### Frontend

* Framework : **Nuxt.js (v3)**
* TypeScript
* Tailwind CSS
* Gestion d’état : Pinia
* UI responsive (mobile first)

### Backend (évolutif)

* API REST ou GraphQL
* Authentification (JWT / OAuth)
* Base de données (PostgreSQL / MongoDB)

### Hébergement

* Vercel / Netlify (frontend)
* Cloud provider (backend)

---

## 8. Sécurité et conformité

* Chiffrement des données sensibles
* RGPD (export / suppression des données)
* Accès sécurisé aux résultats personnels

---

## 9. Évolutions possibles (Roadmap)

* Coaching IA personnalisé
* Journal de progression
* Comparaison de profils (équipe / couple)
* Version mobile (PWA / app)
* Version B2B (entreprises, RH)

---

## 10. Indicateurs de succès (KPI)

* Taux de complétion des questionnaires
* Temps passé par module
* Satisfaction utilisateur
* Taux de rétention

---

## 11. Vision business et modèle économique

### 11.1 Proposition de valeur

L’application se positionne comme une **plateforme de clarté personnelle et professionnelle**, à la croisée de :

* la psychologie accessible,
* le développement personnel pragmatique,
* et l’orientation professionnelle moderne.

La promesse centrale :

> *« Aider chaque personne à se comprendre, se positionner et avancer vers une vie alignée, étape par étape. »*

Contrairement aux tests de personnalité isolés, l’application offre :

* une **lecture progressive et contextualisée** de l’individu,
* une **traduction concrète en actions et choix de vie**,
* un **accompagnement dans le temps**, pas un simple résultat figé.

---

### 11.2 Positionnement marché

**Positionnement premium accessible** :

* sérieux (fondations psychologiques claires),
* humain (pédagogie, bienveillance),
* moderne (UX, IA, data),
* orienté résultats concrets.

Le produit se situe entre :

* les tests gratuits simplistes,
* et les accompagnements coûteux (coaching, bilans de compétences).

---

### 11.3 Cibles business

#### B2C (prioritaire au lancement)

* Étudiants (orientation)
* Jeunes actifs (quête de sens)
* Personnes en reconversion
* Freelances / entrepreneurs

#### B2B (phase 2)

* PME / startups (cohésion d’équipe)
* RH / cabinets de recrutement
* Écoles et centres de formation
* Coachs et accompagnants

---

### 11.4 Modèle économique

#### Freemium (socle)

* Accès gratuit au module **Tempérament**
* Résultat simplifié
* Aperçu des autres modules

Objectif : acquisition et confiance

---

#### Abonnement Premium (B2C)

**Mensuel / Annuel**

Accès à :

* Profils avancés (PCM, identité, valeurs)
* Mission de vie personnalisée
* Plan Kaizen (objectifs + micro-actions)
* Historique et évolution personnelle
* Recommandations IA

---

#### Produits à l’unité

* Bilan de mission de vie (PDF exportable)
* Orientation professionnelle approfondie
* Rapport complet personnalisé

---

#### B2B / Licences

* Accès plateforme par utilisateur
* Tableaux de bord équipes (anonymisés)
* Profils de communication
* Modules onboarding / cohésion

---

### 11.5 Stratégie de différenciation

* Approche **progressive et non brutale**
* Résultats contextualisés (pas d’étiquettes rigides)
* Kaizen comme fil conducteur
* UX claire, narrative et motivante
* Possibilité d’évolution personnelle dans le temps

---

### 11.6 Stratégie d’acquisition

* Contenu éducatif (LinkedIn, TikTok, YouTube)
* Mini-tests gratuits partageables
* Partenariats (écoles, coachs, créateurs)
* Version gratuite virale (résultats partageables)

---

### 11.7 Roadmap business

**Phase 1 – MVP**

* Module tempérament
* Landing page
* Freemium

**Phase 2 – Premium B2C**

* Abonnements
* Mission de vie + Kaizen

**Phase 3 – IA & personnalisation**

* Coach IA
* Recommandations dynamiques

**Phase 4 – B2B**

* Offres entreprises
* Dashboards RH

---

### 11.8 Vision long terme

Créer une **référence francophone (puis internationale)** en matière de clarté identitaire et professionnelle.

À terme, la plateforme devient :

* un compagnon de vie professionnelle,
* un outil d’orientation continue,
* une boussole personnelle durable.

---

## 12. Conclusion

Ce projet combine **sens, technologie et impact humain**, avec un modèle économique viable et scalable, capable de grandir avec ses utilisateurs.

*Document évolutif – version 1.1*
