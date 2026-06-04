# MoodBuddy 🧸 — Emotional Intelligence App for Kids

MoodBuddy is a production-grade, Go-To-Market (GTM) ready cross-platform application designed to educate children (ages 4-10) about emotional intelligence and equip them with healthy, science-backed coping mechanisms for big feelings like anger. 

Developed with a single, highly optimized codebase using **Expo (React Native) + Expo Router + TypeScript**, MoodBuddy compiles natively on **iOS and Android** and serves pre-rendered static routes on **Web** for high-performance SEO discoverability.

---

## 🎨 Premium Visual Aesthetics (No Gradients)

MoodBuddy utilizes a custom **Modern Playful Flat / Neo-Brutalist** design system designed to engage children while retaining a premium, GTM-ready appearance. To adhere strictly to your branding rules, **no gradients are used**.

### Color Palette (Theme Tokens)
- 🌌 **Warm Sand Background** (`#FAF8F5`): A gentle cream canvas that reduces blue light strain.
- 🎨 **Deep Ink Accents** (`#1E293B`): Thick 3px borders, dark bold text, and solid drop shadows.
- 🦄 **Soft Lavender** (`#A78BFA`): Primary brand color for buttons and controls.
- 😡 **Fiery Coral Red** (`#FB7185`): Emotion token representing anger.
- 😌 **Mint Teal** (`#2DD4BF`): Calming token representing peace and deep breathing.
- 😊 **Butter Yellow** (`#FCD34D`): Energetic token representing happiness.
- 😢 **Sky Blue** (`#60A5FA`): Cool token representing sadness.

### Core Visual Elements
- **Tactile Depth**: 3px solid borders paired with offset flat shadows (e.g., `4px 4px` translation) that physically compress when pressed to simulate real-world interactive toy buttons.
- **Child-Friendly Typo**: Generous border roundings (`16px` to `24px`) and friendly, legible sans-serif typography.

---

## 🚀 Key Features

### 1. Daily Mood Check-In (`Home`)
- **Interactive Carousel**: Renders 5 expressive emotion characters (Happy, Angry, Sad, Scared, Calm).
- **Personalized Affirmations**: Dynamically greets the child by name and displays coping affirmations based on their selected mood.
- **Summary Boards**: Showcases current points score and completed detective cases to encourage engagement.

### 2. The Calming Corner (`Coping`)
- **Balloon Breathing**: A visual deep breathing coach (4s Inhale, 4s Hold, 4s Exhale) that expands and contracts a flat balloon using the React Native `Animated` API.
- **Anger Volcano**: A safe venting exercise where kids tap the screen to release steam. Tapping shakes the volcano and decreases the "Anger Meter" from 100% (erupting red) to 0% (cooling down to a green mountain covered in flowers).

### 3. Emotion Detective Mini-Game (`Detective`)
- **6 Scenario Cases**: Challenges kids to solve real-world playground and home problems (e.g., Liam's knocked-down tower, Chloe's fear of storms, Zoe's sharing struggle).
- **Gamified Outcomes**: Offers multiple-choice buttons. Selecting the healthy co-regulation coping option awards ★15 points, while unhealthy choices provide neutral, educational feedback and allow them to try again.
- **Async Storage Persistence**: Progress is locally stored and loaded seamlessly.

### 4. Parent & Teacher Hub (`Parent`)
- **Personalization Editor**: Enables parents to input and save the child's name.
- **Mood History Timeline**: Displays a historical log tracking the child's check-ins, allowing parents to monitor emotional patterns.
- **Co-Regulation Tips**: High-fidelity article cards educating parents on co-regulation, emotional naming ("name it to tame it"), and energy redirection.
- **Danger Zone**: A secure button to wipe cache memory and restart the learning path.

---

## 🗺️ User Flow & Architecture Diagram

The flow of a child interacting with MoodBuddy is mapped out in the diagram below:

```mermaid
graph TD
    %% Define styles matching the Neo-brutalist theme
    classDef default fill:#FFFDF6,stroke:#1E293B,stroke-width:2px,color:#1E293B;
    classDef happy fill:#FCD34D,stroke:#1E293B,stroke-width:3px,color:#1E293B,font-weight:bold;
    classDef angry fill:#FB7185,stroke:#1E293B,stroke-width:3px,color:#1E293B,font-weight:bold;
    classDef calm fill:#2DD4BF,stroke:#1E293B,stroke-width:3px,color:#1E293B,font-weight:bold;
    classDef primary fill:#A78BFA,stroke:#1E293B,stroke-width:3px,color:#1E293B,font-weight:bold;
    
    A[Launch App / Splash Screen] --> B(Dashboard - Home)
    
    %% Dashboard Flow
    B --> C{Daily Check-In?}
    C -->|Choose Emotion| D[Expressive Mood Selector]
    D -->|Angry / Sad / Scared| E[Direct to Calming Corner]:::angry
    D -->|Happy / Calm| F[Direct to Emotion Detective]:::happy
    
    %% Calming Corner Flow
    E --> G(Coping Screen)
    G --> H[Balloon Breathing Guide]:::calm
    G --> I[Anger Volcano Cooler]:::angry
    H -->|Complete Cycle| J[Award Calm State Log]
    I -->|Tap Meter to 0%| K[Transform Volcano to Flower Garden]
    
    %% Detective Flow
    F --> L(Detective Screen)
    L --> M[Story Scenario Case Board]
    M --> N{Select Option}
    N -->|Unhealthy Response| O[Educational Hint / Try Again]
    N -->|Healthy Coping Response| P[Solve Case & Award 15 pts]:::happy
    P --> Q[Save Complete State & Badges]
    
    %% Parent Hub Flow
    B --> R(Parent Hub)
    R --> S[Personalize Profile Name]
    R --> T[View Historic Mood logs Timeline]
    R --> U[Read Co-Regulation Scientific Articles]:::primary
    
    %% Application Layout Styles
    class B,G,L,R primary;
```

---

## 📂 Project Structure

```text
src/
├── app/                        # Expo Router Navigation Routes
│   ├── (tabs)/                 # Bottom Tab Bar Navigation Setup
│   │   ├── _layout.tsx         # Custom Native Tabs layout config
│   │   ├── index.tsx           # Home Dashboard & Mood Selection screen
│   │   ├── coping.tsx          # Calming Corner (Breathing / Volcano tabs)
│   │   ├── detective.tsx       # Emotion Detective mini-game screen
│   │   └── parent.tsx          # Parent / Teacher Hub & settings
│   └── _layout.tsx             # Root Entrance config with AppProvider
├── components/                 # Reusable UI Custom Components
│   ├── Card.tsx                # Neo-Brutalist card wrapper with active press scaling
│   ├── Button.tsx              # Tactile translation-press button
│   ├── MoodSelector.tsx        # Daily mood slider character selection
│   ├── BreathingExercise.tsx   # React Native Animated visual breathing balloon
│   ├── VolcanoCooler.tsx       # Tapping volcano release game with shaking physics
│   └── ScenarioGame.tsx        # Detective multiple-choice stories and scoring board
├── constants/                  # Configuration & Constant Tokens
│   ├── Colors.ts               # Palette layout tokens and emotion configurations
│   └── Scenarios.ts            # Detailed database array of game scenarios
├── context/                    # React Context stores
│   └── AppContext.tsx          # Global child profile, scores, check-in history logs
└── declarations.d.ts           # Typescript declaration for Web CSS imports
```

---

## 🛠️ Getting Started & Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or v20 recommended).

### 2. Installation
Navigate to the root directory and install dependencies:
```bash
npm install
```

### 3. Run Locally
Execute the developer environment for your target build:

- **Web Browser (Recommended)**:
  ```bash
  npm run web
  ```
- **Android Simulator / Device**:
  ```bash
  npm run android
  ```
- **iOS Simulator / Device** (Requires macOS / Xcode):
  ```bash
  npm run ios
  ```

### 4. Build Production Bundle
To compile and build static distribution directories:
```bash
npx expo export --platform web
```
This outputs a fully optimized standalone compilation bundle under `dist/` ready to upload to hosting services like Vercel, Netlify, or AWS S3.

### 5. Deployment to Vercel (Web Platform)
MoodBuddy is fully configured to compile as a static web app. You can deploy it to **Vercel** in two ways:

#### Option A: Vercel CLI (Immediate Deploy)
Install Vercel CLI and run inside the project root:
```bash
# Install Vercel CLI globally
npm install -g vercel

# Run build export
npx expo export --platform web

# Deploy the output dist directory
vercel deploy dist --prod
```

#### Option B: GitHub Git Integration
1. Push your code to your GitHub repository (see section below).
2. Go to your [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Select your linked `ei` repository.
4. In the **Build and Development Settings** panel:
   - **Framework Preset**: Other (or None)
   - **Build Command**: `npx expo export --platform web`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will automatically build and publish your landing page, policy page, and dashboard on every commit!

---

## 📱 Mobile App Compilation (EAS Build for iOS & Android)

MoodBuddy uses Expo Application Services (EAS) to compile native binary packages (`.apk`/`.aab` for Android, `.ipa` for iOS) in the cloud.

### 1. Initialize EAS Project
Log in to your Expo account in the terminal and initialize the configuration:
```bash
# Log in to Expo CLI
npx eas login

# Configure builds
npx eas build:configure
```
This command auto-generates `eas.json` containing configuration profiles for development, preview (simulator/test flight), and production.

### 2. Trigger Cloud Builds
Run the commands below to compile packages on Expo servers:

- **Build for Android (.apk/.aab)**:
  ```bash
  npx eas build --platform android --profile preview
  ```
- **Build for iOS (.ipa)**:
  ```bash
  npx eas build --platform ios --profile preview
  ```
- **Build for All Platforms Simultaneously**:
  ```bash
  npx eas build --platform all
  ```

---

## 📄 Marketing & Policy Routes (Web Only)

Apart from the interactive dashboard routes, MoodBuddy packages marketing structures out of the box:
- **Landing Page** (`/landing`): Accessible via [src/app/landing.tsx](file:///home/brilworks/Desktop/dhaval/ei/src/app/landing.tsx), this serves as the GTM showcase explaining features, offering direct app store mock buttons, and outlining co-regulation statistics.
- **Privacy Policy** (`/privacy`): Accessible via [src/app/privacy.tsx](file:///home/brilworks/Desktop/dhaval/ei/src/app/privacy.tsx), this displays a COPPA-compliant privacy standard confirming that zero kid telemetry data is collected externally and storage stays locally on the parent's device.

---

## 📦 How to Create GitHub Repo & Push Code

Follow these commands to link and deploy this local codebase to your GitHub account:

### 1. Initialize Local Git
Ensure you are in the project folder and run:
```bash
git init
```

### 2. Stage and Commit All Files
Staging creates a snapshot. Commit the files to record it:
```bash
git add .
git commit -m "feat: initial commit of GTM-ready MoodBuddy app"
```

### 3. Link & Push Your Local Repo
Copy the Git URL from your new GitHub repository page, and run the following command in your terminal (replacing `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME`):
```bash
# Rename the default branch to main
git branch -M main

# Link local repository to remote GitHub repository
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# Push code to GitHub
git push -u origin main
```
Once executed, all code and generated graphics assets will be uploaded and accessible online!

