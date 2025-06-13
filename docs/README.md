# ShadowMail

Welcome to ShadowMail, a secure and modern email solution with your own domain (@shadow.com).

## Features

- Professional-grade mail server stack (Mailcow)
- Custom webmail client (Next.js/React)
- REST API for user management
- Admin portal
- 2FA, spam filtering, DKIM/DMARC/SPF
- Dockerized and ready for cloud deployment

## Getting Started

1. Clone the repo and edit `compose/mailcow-prod.yml` for your environment.
2. Set up your domain's DNS records (MX, SPF, DKIM).
3. Deploy using Ansible or Docker Compose.
4. Access the admin portal to create users.
5. Users can log in at https://mail.shadow.com

## Security

See [SECURITY.md](../SECURITY.md) for hardening and best practices.
