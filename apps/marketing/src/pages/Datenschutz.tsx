import LegalLayout from "@/layouts/LegalLayout";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Mit der folgenden Information erfüllen wir unsere Informationspflichten nach Art. 13
        DSGVO für die Nutzung dieser Website (ohne separates Nutzerkonto).
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        <br />
        Ajans Köln, Dieselweg 1, 30926 Seelze, Deutschland
        <br />
        E-Mail:{" "}
        <a href="mailto:ajanskoeln@gmail.com" className="text-accent underline">
          ajanskoeln@gmail.com
        </a>
        , Telefon:{" "}
        <a href="tel:+491727532501" className="text-accent underline">
          +49 172 7532501
        </a>
      </p>

      <h2>2. Hosting und technische Bereitstellung</h2>
      <p>
        Diese Website wird über einen Hosting-Anbieter (z.&nbsp;B. Vercel Inc. oder vergleichbar)
        ausgeliefert. Beim Aufruf der Seiten werden durch den Hosting-Anbieter in der Regel
        automatisch Informationen in sogenannten Server-Logfiles gespeichert, z.&nbsp;B. IP-Adresse,
        Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Browsertyp und ggf. Referrer-URL.
        Die Verarbeitung erfolgt zur technischen Bereitstellung und Sicherheit des Angebots auf
        Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
        stabilen Betrieb). Logdaten werden nach Wegfall des Zwecks bzw. nach Ablauf gesetzlicher
        Aufbewahrungsfristen gelöscht, soweit der Anbieter nicht längere Speicherung gesetzlich
        benötigt.
      </p>

      <h2>3. Kontaktformular</h2>
      <p>
        Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten
        (in der Regel: Name, E-Mail-Adresse, Betreff, Nachricht). Zweck ist ausschließlich die
        Bearbeitung Ihrer Anfrage und die Kommunikation mit Ihnen.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Anbahnung oder
        Durchführung eines Vertrags zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an der Beantwortung von Kontaktanfragen).
      </p>
      <p>
        Sofern die Übermittlung über einen Drittanbieter (z.&nbsp;B. Formular-Dienst wie Formspree
        oder eine eigene API) erfolgt, werden die Daten dort nur zur Zustellung der Nachricht an
        uns verarbeitet. Bitte beachten Sie ggf. die Datenschutzerklärung des jeweiligen
        Dienstes; die konkrete Anbindung ergibt sich aus der technischen Konfiguration der
        Website.
      </p>
      <p>
        Solange kein Formular-Endpunkt (z.&nbsp;B. API oder Drittanbieter) technisch angebunden
        ist, wird Ihre Nachricht nicht dauerhaft auf unseren Servern gespeichert; mit aktivem
        Endpunkt gelten die vorstehenden Zwecke und Speicherfristen entsprechend.
      </p>
      <p>
        Wir löschen die Daten, sobald die Speicherung nicht mehr erforderlich ist, oder
        schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
      </p>

      <h2>4. Spracheinstellung (lokale Speicherung)</h2>
      <p>
        Ihre gewählte Sprache (Türkisch, Deutsch oder Englisch) wird im Browser mittels
        LocalStorage gespeichert (Schlüssel <code className="rounded bg-muted px-1 text-foreground">ajans-koeln-lang</code>),
        damit die Auswahl bei einem erneuten Besuch erhalten bleibt. Es werden keine
        personenbezogenen Profile erstellt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (komfortable Darstellung der Website). Sie können die Daten jederzeit löschen, indem Sie
        die Website-Daten in Ihren Browsereinstellungen entfernen.
      </p>

      <h2>5. Links zu Drittanbietern (WhatsApp, Instagram, Telefon, E-Mail)</h2>
      <p>
        Auf dieser Website finden sich Verlinkungen zu Diensten Dritter (z.&nbsp;B. WhatsApp,
        Instagram). Erst wenn Sie einen solchen Link anklicken, können Daten an den jeweiligen
        Anbieter übermittelt werden. Für die Datenverarbeitung dort sind allein die Anbieter
        verantwortlich. Bitte informieren Sie sich in deren Datenschutzhinweisen.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Diese Website setzt keine eigenen Tracking-Cookies für Werbezwecke ein. Technisch
        notwendige Cookies können durch den Hosting- oder Formular-Dienst gesetzt werden,
        soweit für den Betrieb erforderlich.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben — soweit die gesetzlichen Voraussetzungen erfüllt sind — insbesondere:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>
          Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3
          DSGVO)
        </li>
        <li>
          Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen
          eine Verarbeitung einzulegen, die auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21 DSGVO)
        </li>
      </ul>
      <p>
        Außerdem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (Art.
        77 DSGVO). Zuständig ist die Behörde Ihres gewöhnlichen Aufenthaltsorts oder unseres
        Standorts.
      </p>

      <h2>8. Aktualität</h2>
      <p className="text-xs opacity-80">Stand dieser Erklärung: April 2026</p>
    </LegalLayout>
  );
}
