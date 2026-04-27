# Ajans Köln CRM

Ajans Köln CRM ist eine interne, mehrsprachige Vertriebs- und Angebotsplattform für eine Event-, Hostess- und Catering-Agentur.  
Die Anwendung deckt den kompletten Ablauf von der Kundenerfassung bis zum Versand professioneller Angebote als PDF per E-Mail ab.

## Produktüberblick

Die Plattform ist auf einen schnellen, strukturierten Sales- und Angebotsprozess ausgerichtet:

- Zentrale Kundenverwaltung mit Firmenprofilen, Ansprechpartnern und Sprachpräferenzen
- Angebotsverwaltung mit Statusfluss, Summenberechnung und Nachverfolgung
- Sprachspezifischer Versand von Angeboten (TR/DE/EN) inklusive PDF-Anhang
- Persistente, revisionssichere Angebotssprache für erneute PDF-Ansicht
- NFC-Landingpage für Neukundenkontakt mit VCF-Download
- Rollen- und Session-basierte Zugriffskontrolle für interne Nutzung

## Funktionsumfang

### 1) Dashboard und Steuerung

- KPI-Übersicht zu Kunden und Angeboten
- Direkte Navigation in operative Bereiche
- Verlinkte Schnellzugriffe auf aktuelle Angebote

### 2) Kundenmanagement

- Erfassen, Bearbeiten und Löschen von Kunden
- Sprachpräferenz je Kunde (TR/DE/EN)
- Schutzlogik für abhängige Angebotsdaten bei Kundendeletion

### 3) Angebotsmanagement

- Erstellung über strukturierten Angebots-Wizard
- Leistungszeilen mit Mengen-, Tages- und Preislogik
- Statusverwaltung (Entwurf, Gesendet, Angenommen, Abgelehnt)
- Bearbeitungssperre bei finalen Status mit klarer UX-Rückmeldung

### 4) PDF-Engine und Versand

- Professionelles Angebots-PDF mit CI-Farbschema und Logo
- Sprachabhängige PDF-Inhalte (TR/DE/EN)
- Versand über Gmail SMTP mit konfigurierbarer Absenderidentität
- PDF-Ansicht und Download auf Angebotsdetailseite

### 5) Einstellungen

- SMTP-Konfiguration (Gmail-Adresse + App-Passwort)
- SMTP-Testfunktion
- Sichere Zurücksetzen-Funktion für SMTP-Daten
- Erweiterbare Firmeneinstellungen im Key-Value-Modell

## Sicherheitsposition (Stand aktuell)

Die Anwendung enthält sicherheitsrelevante Basiskontrollen auf Applikations- und Datenebene:

- Supabase Auth + Row Level Security (RLS) für zentrale Tabellen
- Serverseitige Verschlüsselung sensibler SMTP-Werte
- Validierung kritischer API-Payloads (Kunden, Angebote, SMTP, Mailversand)
- Reduzierte Fehlerexposition in API-Antworten
- Sicherheitsheader im Request-Flow (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `COOP`)
- Öffentliche Endpunkte bewusst auf NFC-Use-Case begrenzt

## Technologieprofil

- Next.js (App Router)
- TypeScript
- Supabase (Auth, DB, RLS)
- Tailwind CSS + Component Library
- `@react-pdf/renderer` für Angebotsdokumente
- Nodemailer für SMTP-Mailversand

## Zielbild

Ajans Köln CRM ist als interne Business-Anwendung konzipiert, die eine konsistente Angebotsqualität, nachvollziehbare Kommunikation und hohe operative Effizienz im Tagesgeschäft sicherstellt.
