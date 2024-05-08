## API Endpoints

The API provides the following endpoints:

**GET USERS**

```markdown
GET /api/users - Retrieve a list of all users.
```

```json
[
  {
    "id": "ab40cb90-21df-46f2-8eff-7f4fe41f823",
    "fullName": "Bernado Silva",
    "document": "123456787",
    "email": "bernado@example.com",
    "password": "senha",
    "balance": 20.0,
    "userType": "MERCHANT"
  },
  {
    "id": "821216ac-d2ac-4907-afe1-47f8a91e0dc6",
    "fullName": "Phill Foden",
    "document": "123456783",
    "email": "foden@example.com",
    "password": "password",
    "balance": 0.0,
    "userType": "COMMON"
  }
]
```

**POST USERS**

```markdown
POST /api/users - Register a new user into the App
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
POST /api/transactions - Register a new Transaction between users (CUSTOMER to CUSTOMER or CUSTOMER to MERCHANT)
```

```http request
POST /api/transactions
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "status": "ok",
  "transactionId": "1234",
  "amount": 100.0,
  "currency": "USD",
  "timestamp": "2023-11-09T12:34:56Z",
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
