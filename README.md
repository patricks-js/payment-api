# Simplified Payment API - Back-End challenge

![Bun](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

This repository contains my solution for [this back-end challenge](https://github.com/PicPay/picpay-desafio-backend) using Bun. The project was also built using the TDD methodology.

## About the challenge

The goal of this project is implement a simplified version of a payment service. It should be possible to make transfers between ordinary customers and merchants, and the **merchant only receive transfers**. Ordinary users can make and receive transfers from any other customer.

## Table of Contents

- [Roadmap](#roadmap)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Documentation](#documentation)
- [Authentication](#authentication)
- [Database](#database)
- [Contributing](#contributing)

## Roadmap

- [x] Initial setup
- [x] Project specifications (see more in [documentation](#documentation))
- [ ] Integration with main modules
- [ ] Integration with database
- [ ] Integration with notification service
- [ ] End-to-end tests
- [ ] Deploy

## Installation

Global dependencies
You need to have this two main dependencies installed:

- Bun Latest (or NVM, but ensure that bun is installed as a node global dependency)
- Docker/Docker Engine with Docker Compose (both latest)

1. Clone the repository:

```bash
git clone https://github.com/patricks-js/simplified-payment-api.git
```

2. Install dependencies running `bun install`

3. Up containers with `docker-compose up`

4. (Optional) For contributing, run `bun run prepare` to sync git hooks

## Usage

1. Start the application running `bun start:dev # or bun start for build version`
2. The API will be accessible at http://localhost:3333

## Running Tests

To run tests, run the following command

```bash
bun run test
```

To run tests with **watch mode**, run the following command

```bash
bun run test:dev
```

## Documentation

- [Business Rules](docs/domain.md)
- [Requirements](docs/requirements.md)
- [API Endpoints](docs/endpoints.md)
- [Open API](docs/openapi.json)

## Authentication

The API uses Spring Security for authentication control. The following roles are available:

```
CUSTOMER -> Standard user role for logged-in users.
MERCHANT -> Standard role for receive transfers (registering new partners).
```

To access protected endpoints as an ADMIN user, provide the appropriate authentication credentials in the request header.

## Database

The project utilizes [PostgresSQL](https://www.postgresql.org/) as the database.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to the repository.

When contributing to this project, please follow the existing code style, [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/), and submit your changes in a separate branch.
