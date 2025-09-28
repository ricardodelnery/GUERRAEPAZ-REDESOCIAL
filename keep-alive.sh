#!/bin/bash
while true; do
    echo "Iniciando servidor Next.js..."
    npm start
    echo "Server caiu, reiniciando em 3 segundos..."
    sleep 3
done
