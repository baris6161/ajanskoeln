import LegalLayout from "@/layouts/LegalLayout";

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p>
        Angaben gemäß § 5 TMG und Art. 13 EU-Verordnung 2021/784 (Medienstaatsvertrag) soweit
        einschlägig:
      </p>

      <h2>Anbieter</h2>
      <p>
        Ajans Köln
        <br />
        Dieselweg 1
        <br />
        30926 Seelze
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon:{" "}
        <a href="tel:+491727532501" className="text-accent underline">
          +49 172 7532501
        </a>
        <br />
        E-Mail:{" "}
        <a href="mailto:ajanskoeln@gmail.com" className="text-accent underline">
          ajanskoeln@gmail.com
        </a>
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV ist der Anbieter unter der oben
        genannten Anschrift.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich.
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht verpflichtet und nicht
        bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen,
        sofern nicht gesetzlich anders vorgeschrieben.
      </p>

      <p className="text-xs opacity-80">Stand: April 2026</p>
    </LegalLayout>
  );
}
