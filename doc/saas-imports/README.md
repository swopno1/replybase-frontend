# SaaS Integration Reference

This folder contains documentation imported from the ReplyBase SaaS app repository. These files provide reference information for integrating the marketing site with the backend SaaS application.

## 📁 Files in This Folder

### 🔑 API Integration Guides

**[MARKETING_SITE_API_INTEGRATION.md](./MARKETING_SITE_API_INTEGRATION.md)** - **START HERE**

- Complete API endpoint reference for marketing site developers
- 4 main endpoints: subscribe, unsubscribe, deletion-request, deletion-status
- Request/response examples with actual payloads
- Error codes and troubleshooting
- **Essential for**: Implementing newsletter and GDPR features

**[API_SETUP_QUICKSTART.md](./API_SETUP_QUICKSTART.md)**

- Step-by-step guide for API key generation
- Environment variable setup on both sides (marketing site + SaaS app)
- cURL testing examples for each endpoint
- Security checklist and common issues
- **Use for**: Initial API setup and testing

### 📋 SaaS App Reference

**[MARKETING_API_SUMMARY.md](./MARKETING_API_SUMMARY.md)**

- SaaS-side API implementation details
- How authentication library validates requests
- Dual authentication support (API key + session)
- Source tracking for analytics
- **Reference for**: Understanding SaaS implementation

**[IMPLEMENTATION_SUMMARY_SAAS.md](./IMPLEMENTATION_SUMMARY_SAAS.md)**

- SaaS app billing and settings features
- Account settings page architecture
- Billing page with invoice history
- Subscription plan matrix
- **Reference for**: SaaS app feature set

**[SUBSCRIPTION_AND_SETTINGS_IMPLEMENTATION.md](./SUBSCRIPTION_AND_SETTINGS_IMPLEMENTATION.md)**

- Detailed settings UI implementation
- Account tabs (profile, security, notifications, privacy)
- Billing page structure with payment methods
- Middleware subscription redirect logic
- **Reference for**: SaaS app UI patterns

## 🚀 Quick Start - Integrate Marketing Site with API

### 1. Read the API Reference

Start with [MARKETING_SITE_API_INTEGRATION.md](./MARKETING_SITE_API_INTEGRATION.md) to understand:

- Required endpoints
- Authentication method (Bearer token)
- Response formats
- Error handling

### 2. Generate API Key

Use [API_SETUP_QUICKSTART.md](./API_SETUP_QUICKSTART.md) to:

- Generate a new API key with openssl
- Configure environment variables
- Test endpoints with cURL

### 3. Create Server Actions

In your marketing site, create `/app/actions/replybase-api.ts` with functions:

- `subscribeToNewsletter(email)`
- `unsubscribeFromNewsletter(email)`
- `requestDataDeletion(email)`

### 4. Build Client Components

Create client components that use the server actions:

- `NewsletterForm.tsx` (subscribe/unsubscribe)
- `DataDeletionForm.tsx` (GDPR data deletion)

## 🔐 Security Notes

- **API Secret**: Store `REPLYBASE_API_SECRET` only in `.env.local` (server-side only)
- **Dual Auth**: SaaS API supports both API key (for marketing site) and session auth (for logged-in users)
- **Bearer Token**: All requests use `Authorization: Bearer <API_SECRET>`
- **Rate Limiting**: Consider implementing rate limiting on marketing site (5 requests per 10 minutes per email)

## 📊 API Endpoints Summary

| Endpoint                      | Method | Auth    | Purpose                        |
| ----------------------------- | ------ | ------- | ------------------------------ |
| `/api/newsletter/subscribe`   | POST   | API Key | Subscribe to newsletter        |
| `/api/newsletter/unsubscribe` | POST   | API Key | Unsubscribe from newsletter    |
| `/api/data-deletion/request`  | POST   | API Key | Request GDPR data deletion     |
| `/api/data-deletion/status`   | GET    | None    | Check deletion status (public) |

## ✅ Checklist for Full Integration

- [ ] Read MARKETING_SITE_API_INTEGRATION.md completely
- [ ] Generate API key following API_SETUP_QUICKSTART.md
- [ ] Configure `REPLYBASE_API_SECRET` in `.env.local`
- [ ] Create server actions file (`app/actions/replybase-api.ts`)
- [ ] Create `NewsletterForm.tsx` component
- [ ] Create `DataDeletionForm.tsx` component
- [ ] Update LandingFooter to use new NewsletterForm
- [ ] Update privacy page with DataDeletionForm
- [ ] Test all endpoints with cURL or Postman
- [ ] Verify error handling works correctly
- [ ] Add rate limiting (optional but recommended)
- [ ] Deploy and test in production

## 📞 Support

For questions about marketing site API integration:

1. Check [MARKETING_SITE_API_INTEGRATION.md](./MARKETING_SITE_API_INTEGRATION.md) troubleshooting section
2. Review [API_SETUP_QUICKSTART.md](./API_SETUP_QUICKSTART.md) for setup issues
3. Check environment variables and API key configuration
4. Verify Bearer token in Authorization header

---

**Last Updated**: January 30, 2026
**Source**: ReplyBase SaaS App Repository
