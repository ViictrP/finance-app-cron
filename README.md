# Finance App cron job
![GitHub Actions](https://github.com/viictrp/finance-app-cron/actions/workflows/node.js.yml/badge.svg)

## Building the application

    docker build --tag finance-app-cron -f ./Dockerfile .

## Running the application

You can run the docker image you have built

    docker run -e ADMIN_EMAIL='admin@email.com' -e ADMIN_PASSWORD=ADMIN_PASSWORD -e API_HOST='http://localhost:3333' finance-app-cron
