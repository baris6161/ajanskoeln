import { useEffect } from "react";
import LegalLayout from "@/layouts/LegalLayout";
import { getSiteOrigin } from "@/config/site";
import { applyDocumentSeo } from "@/lib/documentSeo";
import { TR_SEO, buildMainJsonLd, buildBreadcrumbJsonLd, mergeSchemaGraph } from "@/seo/turkishSeo";

export default function Impressum() {
  useEffect(() => {
    const origin = getSiteOrigin();
    applyDocumentSeo(origin, {
      title: TR_SEO.impressum.title,
      description: TR_SEO.impressum.description,
      path: "/impressum",
      jsonLd: mergeSchemaGraph(
        buildMainJsonLd(origin),
        buildBreadcrumbJsonLd(origin, [
          { name: "Ana sayfa", path: "/" },
          { name: "Künye", path: "/impressum" },
        ]),
      ),
    });
  }, []);

  return (
    <LegalLayout title="Künye ve yasal bilgiler">
      <p>
        Aşağıdaki bilgiler, Almanya’da genel bilgilendirme pratiği ve ilgili düzenlemelere uygun olarak
        sunulmuştur. Sorularınız için yukarıdaki iletişim kanallarını kullanabilirsiniz.
      </p>

      <h2>Hizmet sağlayıcı</h2>
      <p>
        Ajans Köln
        <br />
        Dieselweg 1
        <br />
        30926 Seelze
        <br />
        Almanya (Deutschland)
      </p>

      <h2>İletişim</h2>
      <p>
        Telefon:{" "}
        <a href="tel:+491727532501" className="text-accent underline">
          +49 172 7532501
        </a>
        <br />
        E-posta:{" "}
        <a href="mailto:ajanskoeln@gmail.com" className="text-accent underline">
          ajanskoeln@gmail.com
        </a>
      </p>

      <h2>İçerikten sorumlu kişi</h2>
      <p>
        Bu web sitesindeki metinlerden, yasal çerçevede mümkün olduğu ölçüde, yukarıda adresi
        bulunan hizmet sağlayıcı sorumludur.
      </p>

      <h2>İçeriklerin doğruluğu</h2>
      <p>
        İçerikleri güncel ve doğru tutmak için çaba gösteriyoruz. Yine de yazım hataları veya
        güncellenmemiş bilgiler oluşabilir. Yasal olarak bağlayıcı bilgi için lütfen doğrudan
        bizimle iletişime geçin.
      </p>

      <h2>Dış bağlantılar</h2>
      <p>
        Sitemizde üçüncü taraf sitelere bağlantılar bulunabilir. Bu sitelerin içeriğini kontrol
        etmiyoruz ve içeriklerinden yalnızca ilgili site operatörleri sorumludur.
      </p>

      <h2>Online uyuşmazlık çözümü (AB)</h2>
      <p>
        Avrupa Komisyonu çevrimiçi uyuşmazlık çözümü için bir platform sunmaktadır:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . E-posta adresimiz yukarıda yer almaktadır. Tüketici hakem heyeti önünde bir sürece
        katılma yükümlülüğümüz yalnızca yasal olarak zorunlu olduğu ölçüdedir.
      </p>

      <p className="text-xs opacity-80">Son güncelleme: Nisan 2026</p>
    </LegalLayout>
  );
}
