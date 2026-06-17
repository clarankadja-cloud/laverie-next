# Laverie Pro

**Laverie Pro** est une plateforme web moderne et intuitive de réservation et de gestion de lavage de poids lourds à Douala, Cameroun. Elle permet aux entreprises de transport et conducteurs de planifier leurs lavages, et aux administrateurs de superviser l'ensemble de l'activité en temps réel.

---

## 🚀 Fonctionnalités principales

### 💻 Espace Public
- **Page d'accueil dynamique :** Présentation des services, statistiques clés (lavages effectués, stations actives, taux de satisfaction) et avis clients.
- **Carte des stations :** Visualisation interactive des stations de lavage réparties dans la ville de Douala.
- **Formulaires fluides :** Inscription et connexion avec design moderne et adapté.

### 👤 Espace Client
- **Gestion des véhicules :** Ajout et suivi des camions et poids lourds.
- **Réservation en temps réel :** Planification d'un lavage en choisissant un service et une station disponible.
- **Programme de fidélité :** Suivi des points accumulés et génération automatique de codes promo/lavages gratuits selon des paliers (Bronze, Argent, Or).

### 🛠️ Espace Administrateur (Dashboard indépendant)
- **Supervision globale :** Visualisation des statistiques mensuelles, chiffre d'affaires et taux d'occupation.
- **Gestion des réservations :** Validation ou rejet des demandes clients.
- **Régulation des capacités :**
  - Validation chronologique ("premier arrivé, premier servi").
  - Blocage automatique en cas de station complète (capacité maximale atteinte).
  - Proposition et modal de réaffectation vers une autre station active avec places libres.
- **Rapports et analyses :** Visualisation détaillée des performances par service et par station.

---

## 🛠️ Stack Technique

- **Frontend & Backend :** [Next.js](https://nextjs.org/) (App Router, API Routes)
- **Base de données :** [PostgreSQL](https://www.postgresql.org/)
- **ORM :** [Prisma](https://www.prisma.io/)
- **Stylisation :** [Tailwind CSS](https://tailwindcss.com/)
- **Icônes :** [Lucide React](https://lucide.dev/)

---

## ⚙️ Démarrage local

### 1. Prérequis
Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) et une base de données PostgreSQL active.

### 2. Configuration
Créez un fichier `.env` à la racine du projet (ou complétez le fichier existant) avec les variables suivantes :
```env
DATABASE_URL="postgresql://user:password@localhost:5433/laverie_pro?schema=public"
JWT_SECRET="votre_secret_jwt"
```

### 3. Installation et Lancement
Installez les dépendances et lancez le serveur de développement :
```bash
# Installer les dépendances
npm install

# Appliquer les migrations de base de données et le seed
npx prisma db push
npx prisma db seed

# Lancer en mode developpement
npm run dev
```

L'application est maintenant disponible sur [http://localhost:3000](http://localhost:3000).
