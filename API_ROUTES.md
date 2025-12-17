# API Routes

This document lists all the available API routes in the application.

## User Authentication

- `POST /auth/register` - Registers a new user.
  - **Request Body:** `{ "email": "user@example.com", "password": "userpassword" }`
  - **Response (Success):** `201 Created`
  - **Response (Error):** `{ "message": "Error message" }`

- `POST /auth/login` - Logs in a user.
  - **Request Body:** `{ "email": "user@example.com", "password": "userpassword" }`
  - **Response (Success):** `{ "token": "jwt_token", "tenant_id": "optional_tenant_id" }`
  - **Response (Error):** `{ "message": "Error message" }`

## Social Authentication

- `GET /auth/google/login` - Initiates the Google login process.
  - **Response (Success):** `{ "url": "google_oauth_url" }` - The frontend will redirect the user to this URL.

- `GET /auth/google/callback` - Handles the Google login callback.
  - **Note for Backend:** This is the redirect URI for Google OAuth. It should handle the code exchange and user authentication, then redirect the user to `/auth-callback?token=...`.

- `GET /auth/facebook/login` - Initiates the Facebook login process.
- `GET /auth/facebook/callback_login` - Handles the Facebook login callback.
- `GET /auth/facebook/connect` - Connects a Facebook account to an existing user.
- `GET /auth/facebook/callback_connect` - Handles the Facebook connect callback.
- `POST /auth/facebook/deauthorize` - Handles the Facebook deauthorization callback.
- `POST /auth/facebook/delete-data` - Handles the Facebook data deletion request.

## Webhooks

- `GET /webhooks/meta` - Verifies the Meta webhook.
- `POST /webhooks/meta` - Handles incoming messages from Meta.

## Tenant

- `GET /tenant/status` - Returns the connected platforms for a tenant.
- `POST /tenant/whatsapp` - Connects a WhatsApp account to a tenant.

## Health

- `GET /health` - Checks the health of the application.
