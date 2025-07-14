# Utilizza l'immagine ufficiale di Node.js
FROM node:18-alpine

# Installa dumb-init per gestire meglio i processi
RUN apk add --no-cache dumb-init

# Crea un utente non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm ci --only=production && npm cache clean --force

# Cambia proprietario della directory
RUN chown -R nextjs:nodejs /app
USER nextjs

# Copia il resto del codice dell'applicazione
COPY --chown=nextjs:nodejs . .

# Espone la porta 3000
EXPOSE 3000

# Comando per avviare l'applicazione in modalità di sviluppo
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "dev"]
