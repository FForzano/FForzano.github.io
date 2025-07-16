# Guida Docker per il Portfolio

## Comandi utili per Docker

### Avvio rapido con Docker Compose
```bash
# Costruisci e avvia il container
docker-compose up --build

# Avvia in background
docker-compose up -d

# Ferma i container
docker-compose down

# Visualizza i log
docker-compose logs -f
```

### Comandi Docker diretti
```bash
# Costruisci l'immagine
docker build -t portfolio .

# Avvia il container
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules portfolio

# Avvia in background
docker run -d -p 3000:3000 -v $(pwd):/app -v /app/node_modules --name portfolio-dev portfolio

# Ferma il container
docker stop portfolio-dev

# Rimuovi il container
docker rm portfolio-dev
```

### Debug
```bash
# Accedi al container
docker exec -it portfolio-dev sh

# Visualizza i log del container
docker logs portfolio-dev
```

## Vantaggi dell'uso di Docker

1. **Ambiente consistente**: Stesso ambiente su tutti i sistemi
2. **Isolamento**: Nessun conflitto con altre installazioni
3. **Condivisione facile**: Altri sviluppatori possono avviare il progetto immediatamente
4. **Produzione**: Stesso container utilizzabile per il deploy
