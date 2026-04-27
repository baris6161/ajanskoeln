# Security Policy

## Security Contact

If you discover a security vulnerability, please report it responsibly and privately.

- Contact: `security@ajanskoeln.de`
- Subject: `Security Report - Ajans Köln CRM`
- Preferred language: German or English

Please do **not** open public issues for security findings.

## Supported Scope

This policy applies to:

- The Ajans Köln CRM application code in this repository
- Server-side API routes and business logic
- Authentication, authorization, and data access control logic
- PDF/mail generation and sensitive data handling

Out of scope:

- Third-party service outages
- Vulnerabilities in external dependencies without a practical exploit path in this project
- Social engineering, phishing, or physical access attacks

## Responsible Disclosure Guidelines

When reporting, please include:

1. A clear description of the issue and affected component
2. Reproduction steps (minimal and deterministic)
3. Impact assessment (confidentiality/integrity/availability)
4. Proof of concept (if available)
5. Suggested remediation (optional)

Please avoid accessing, modifying, or deleting data that is not your own.

## Response Targets

We aim to provide:

- Initial acknowledgement: within **2 business days**
- Triage and severity classification: within **5 business days**
- Remediation plan for valid critical/high issues: as soon as possible

Timelines can vary depending on complexity and operational constraints.

## Severity Model

Findings are prioritized by practical risk:

- **Critical**: Unauthorized access to sensitive data, auth bypass, RCE
- **High**: Privilege escalation, broad data exposure, strong integrity impact
- **Medium**: Scoped data leaks, workflow bypasses, security misconfigurations
- **Low**: Hardening gaps with low exploitability

## Security Principles

This project follows these baseline principles:

- Least-privilege access and authenticated-by-default routes
- Input validation on security-relevant API boundaries
- Encryption for sensitive configuration values at rest
- Avoidance of secret exposure in logs and API responses
- Defense-in-depth via transport and browser security headers

## Disclosure and Credit

After a fix is deployed, we may coordinate disclosure timing with the reporter.
We can acknowledge reporters by name (or anonymously) upon request.
