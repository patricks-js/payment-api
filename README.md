<h1 align="center" style="font-weight: bold;">Simplified Payment API - Back-End challenge
</h1>

![JAVASCRIPT__BADGE](https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)
![Bun](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff&style=for-the-badge)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<p align="center">
  <a href="#started">Getting Started</a> •
  <a href="#routes">API Endpoints</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <b>Simple solution for <a href="https://github.com/PicPay/picpay-desafio-backend">this challenger</a> using Bun.</b>
</p>

<h2 id="started">🚀 Getting started</h2>

The goal of this project is implement a simplified version of a payment service. It should be possible to make transfers between ordinary customers and merchants, and the **merchant only receive transfers**. Ordinary customers can make and receive transfers from any other customer.

### Installation

You need to have this two main global dependencies installed:

- Bun Latest (or NVM, but ensure that bun is installed as a node global dependency)
- Docker/Docker Engine with Docker Compose (both latest)

1. Clone the repository:

   ```bash
   git clone https://github.com/patricks-js/simplified-payment-api.git
   ```

2. Install dependencies running `bun install`

3. Up containers with `docker-compose up`

4. (Optional) For contributing, run `bun run prepare` to sync git hooks

### Usage

1. Start the application running `bun start # or start:dev for development mode`
2. The API will be accessible at http://localhost:3333

### Running Tests

To run tests, run the following command

```bash
bun run test
```

To run tests with **watch mode**, run the following command

```bash
bun run test:dev
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.

**GET CUSTOMERS**

```markdown
GET /api/customers - Retrieve a list of all customers.
```

```json
[
  {
    "customerId": "ab40cb90-21df-46f2-8eff-7f4fe41f823",
    "fullName": "Bernado Silva",
    "document": "123456787",
    "email": "bernado@example.com",
    "balance": 20.0,
    "type": "MERCHANT"
  },
  {
    "customerId": "821216ac-d2ac-4907-afe1-47f8a91e0dc6",
    "fullName": "Phill Foden",
    "document": "123456783",
    "email": "foden@example.com",
    "balance": 0.0,
    "type": "COMMON"
  }
]
```

**POST CUSTOMER**

```markdown
POST /api/CUSTOMERS - Register a new customer into the App
```

```http request
POST /api/transactions
Content-Type: application/json

{
    "fullName": "Phill Foden",
    "password": "senha",
    "document": "123456783",
    "email": "foden@example.com",
    "type": "CUSTOMER",
    "balance": 10
}
```

**POST TRANSACTIONS**

```markdown
POST /api/transactions - Register a new Transaction between customers (CUSTOMER to CUSTOMER or CUSTOMER to MERCHANT)
```

```http request
POST /api/transactions
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "senderId": "821216ac-d2ac-4907-afe1-47f8a91e0dc6",
  "receiverId": "ab40cb90-21df-46f2-8eff-7f4fe41f823",
  "amount": 2000
}
```

```md
Payload
```

```json
{
  "transactionId": "1234",
  "amount": 100.0,
  "sender": {
    "id": "821216ac-d2ac-4907-afe1-47f8a91e0dc6",
    "fullName": "Phill Foden"
  },
  "receiver": {
    "id": "ab40cb90-21df-46f2-8eff-7f4fe41f823",
    "fullName": "Bernado Silva"
  }
}
```

<h2 id="requirements">📝 Requirements</h2>

Main specification about this challenger.

### Business Rules

- Customers can receive and make transfers
- Merchant only receive transfers
- Email and CPF/CNPJ must be uniques
- Customers must have sufficient balance to make transfers
- Transfers must be authorized with an [external service](https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc)
- All transfers are transactions, if any error occurs, the operations is reverted
- Customers should receive a message when a transfer is completed. Check this [mock](https://run.mocky.io/v3/54dc2cf1-3add-45b5-b5a9-6bf7e7f1f4a6)

### Functional Requirements

- CUstomer can create an account
- CUstomer can login to their own account
- CUstomer can be a customer or a merchant
- CUstomer can view transaction history
- CUstomer can update account information
- Customers can make a transfer to other customers
- Customers can receive transfers from other customers

### Non-functional Requirements

- Login with email & password
- Login with third-part service
- Notification service with email
- Customer's password must be encrypted
- Only refresh tokens must be stored in the database
- Request must have an access token

### Authentication

The API uses Spring Security for authentication control. The following roles are available:

```
COMMON -> Standard role for logged-in customers.
MERCHANT -> Standard role for receive transfers (registering new partners).
```

To access protected endpoints as an ADMIN customer, provide the appropriate authentication credentials in the request header.

<h2 id="contribute">📫 Contribute</h2>

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to the repository.

### Steps

1. `git clone https://github.com/patricks-js/payment-api.git`
2. `git checkout -b feature/NAME`
3. Follow commit conventions
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

### Documentations that might help

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit conventions](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
