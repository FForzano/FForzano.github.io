#!/bin/bash

# Script per il deploy manuale su GitHub Pages
# Esegui questo script per deployare il sito

echo "🚀 Deploying to GitHub Pages..."

# Verifica che siamo nel branch principale
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "main" && "$BRANCH" != "master" ]]; then
  echo "❌ Errore: Devi essere nel branch main o master per deployare"
  exit 1
fi

# Verifica che non ci siano modifiche non committate
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ Errore: Ci sono modifiche non committate. Committa le tue modifiche prima del deploy."
  exit 1
fi

# Build del progetto
echo "🔨 Building project..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed! Deploy aborted."
  exit 1
fi

# Deploy su GitHub Pages
echo "📦 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deploy completed successfully!"
echo "🌐 Il tuo sito sarà disponibile su: https://FForzano.github.io/"
echo "💡 Ricorda: il repository deve chiamarsi FForzano.github.io per questo URL"
