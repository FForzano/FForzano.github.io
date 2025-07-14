#!/bin/bash

# Script di utilità per il portfolio

case "$1" in
  "setup")
    echo "🚀 Setup del progetto..."
    npm install
    echo "✅ Setup completato!"
    ;;
  "dev")
    echo "🏃 Avvio server di sviluppo..."
    npm run dev
    ;;
  "build")
    echo "🔨 Build per produzione..."
    npm run build
    echo "✅ Build completato!"
    ;;
  "preview")
    echo "👀 Anteprima build di produzione..."
    npm run preview
    ;;
  "lint")
    echo "🔍 Linting del codice..."
    npm run lint
    ;;
  "docker-dev")
    echo "🐳 Avvio con Docker..."
    docker-compose up --build
    ;;
  "docker-prod")
    echo "🐳 Build Docker per produzione..."
    docker build -t portfolio:prod -f Dockerfile.prod .
    ;;
  "clean")
    echo "🧹 Pulizia cache e dipendenze..."
    rm -rf node_modules
    rm -rf dist
    npm cache clean --force
    echo "✅ Pulizia completata!"
    ;;
  *)
    echo "🛠️  Script Portfolio - Comandi disponibili:"
    echo ""
    echo "  setup       - Installa le dipendenze"
    echo "  dev         - Avvia server di sviluppo"
    echo "  build       - Build per produzione"
    echo "  preview     - Anteprima build"
    echo "  lint        - Controlla il codice"
    echo "  docker-dev  - Avvia con Docker"
    echo "  clean       - Pulisce cache e dipendenze"
    echo ""
    echo "Uso: ./scripts.sh [comando]"
    ;;
esac
