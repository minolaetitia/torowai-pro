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

### 4.1 Module 1 – Identification du tempérament

#### Description

Questionnaire permettant d’identifier le tempérament dominant de l’utilisateur (primaire / secondaire), basé sur des dimensions telles que :

* Réactivité émotionnelle
* Rapport à l’action
* Gestion du temps
* Mode de décision
* Rapport aux autres

#### Fonctionnalités

* Questionnaire progressif (20–40 questions)
* Questions à choix multiples ou échelles (Likert)
* Calcul automatique du tempérament dominant
* Résultat visuel et pédagogique

#### Résultats affichés

* Tempérament primaire
* Tempérament secondaire
* Forces naturelles
* Points de vigilance
* Besoins psychologiques clés

---

### 4.2 Module 2 – Profils de personnalité (type PCM)

#### Description

Module avancé basé sur le Process Communication Model (ou modèle équivalent inspiré), visant à identifier :

* Le type de personnalité dominant
* Les modes de communication préférés
* Les sources de motivation
* Les comportements sous stress

#### Fonctionnalités

* Questionnaire spécifique PCM
* Visualisation du profil (base + étages)
* Recommandations de communication
* Conseils de gestion du stress

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
