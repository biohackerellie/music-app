#!/bin/bash

cd /apps/music-app

# Get the name of the service that has changes
if git diff --quiet HEAD..HEAD~ -- ./server; then
  service=server
elif git diff --quiet HEAD..HEAD~ -- ./front-end; then
  service=frontend
else
  service=all
fi

# Update the repository to the latest changes
git fetch origin main
git checkout main
git pull origin main

# Rebuild the Docker container for the specified service
if [ "$service" == "all" ]; then
  docker-compose build
else
  docker-compose build $service
fi

# Restart the Docker containers
docker-compose down
docker-compose up -d
