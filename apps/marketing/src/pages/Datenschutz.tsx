import { useEffect } from "react";
import LegalLayout from "@/layouts/LegalLayout";
import { getSiteOrigin } from "@/config/site";
import { applyDocumentSeo } from "@/lib/documentSeo";
import { TR_SEO, buildMainJsonLd, buildBreadcrumbJsonLd, mergeSchemaGraph } from "@/seo/turkishSeo";

export default function Datenschutz() {
  useEffect(() => {
    const origin = getSiteOrigin();
    applyDocumentSeo(origin, {
      title: TR_SEO.datenschutz.title,
      description: TR_SEO.datenschutz.description,
      path: "/datenschutz",
      jsonLd: mergeSchemaGraph(
        buildMainJsonLd(origin),
        buildBreadcrumbJsonLd(origin, [
          { name: "Ana sayfa", path: "/" },
          { name: "Gizlilik", path: "/datenschutz" },
        ]),
      ),
    });
  }, []);

  return (
    <LegalLayout title="Gizlilik bildirimi">
      <p>
        Bu metin, bu web sitesini hesap veya üyelik olmadan kullandığınızda GDPR (Genel Veri
        Koruma Tüzüğü) kapsamındaki bilgilendirme yükümlülüğümüzü karşılamak içindir.
      </p>

      <h2>1. Veri sorumlusu</h2>
      <p>
        GDPR anlamında veri sorumlusu:
        <br />
        Ajans Köln, Dieselweg 1, 30926 Seelze, Almanya
        <br />
        E-posta:{" "}
        <a href="mailto:ajanskoeln@gmail.com" className="text-accent underline">
          ajanskoeln@gmail.com
        </a>
        , telefon:{" "}
        <a href="tel:+491727532501" className="text-accent underline">
          +49 172 7532501
        </a>
      </p>

      <h2>2. Barındırma ve teknik sunum</h2>
      <p>
        Site bir barındırma sağlayıcısı üzerinden yayınlanır (örneğin Vercel veya benzeri).
        Sayfa çağrılarında sunucu tarafında genellikle günlük kayıtları oluşur: IP adresi, tarih
        ve saat, aktarılan veri miktarı, tarayıcı türü ve mümkünse yönlendiren adres. İşleme
        amacı, sitenin güvenli ve stabil çalışmasıdır. Hukuki dayanak, GDPR madde 6 fıra 1 bent f
        (meşru menfaat). Saklama süreleri sağlayıcının teknik ve yasal düzenlemelerine tabidir.
      </p>

      <h2>3. İletişim formu</h2>
      <p>
        Formu kullandığınızda gönderdiğiniz verileri (ad, e-posta, konu, mesaj) yalnızca talebinizi
        yanıtlamak ve sizinle iletişim kurmak için işleriz.
      </p>
      <p>
        Hukuki dayanak, talebinizin sözleşmeye hazırlık veya sözleşmeyle bağlantılı olmasına
        bağlı olarak GDPR madde 6 fıra 1 bent b veya bent f (iletişim taleplerini yanıtlama
        menfaati) olabilir.
      </p>
      <p>
        Veri iletimi bir üçüncü taraf form servisi veya kendi API uç noktamız üzerinden yapılıyorsa,
        veriler yalnızca mesajı bize iletmek için o sağlayıcıda işlenir. O sağlayıcının gizlilik
        metnini de okumanız gerekir; teknik bağlantı projedeki gerçek uygulamaya göre belirlenir.
      </p>
      {/* TODO: VITE_CONTACT_ENDPOINT canlıda ise aşağıdaki paragrafı gerçek akışa göre güncelleyin. */}
      <p>
        Form uç noktası yapılandırılmamışsa mesaj tarayıcıdan çıkar ve sunucularımızda kalıcı
        saklanmaz; uç nokta aktif olduğunda yukarıdaki amaç ve saklama ilkeleri geçerlidir.
      </p>
      <p>
        Verileri artık gerekmediğinde siler veya yasal saklama yükümlülükleri varsa işlemeyi
        kısıtlarız.
      </p>

      <h2>4. Dil tercihi (yerel depolama)</h2>
      <p>
        Seçtiğiniz dil (Türkçe, Almanca, İngilizce) tarayıcıda{" "}
        <code className="rounded bg-muted px-1 text-foreground">ajans-koeln-lang</code> anahtarı
        ile LocalStorage üzerinden saklanır; profil oluşturmaz. Dayanak: GDPR madde 6 fıra 1 bent f
        (kullanılabilirlik). Tarayıcı ayarlarından site verilerini silerek kaldırabilirsiniz.
      </p>

      <h2>5. Üçüncü taraf bağlantıları (WhatsApp, Instagram, telefon, e-posta)</h2>
      <p>
        Sitede üçüncü taraf hizmetlere bağlantılar vardır. Bağlantıya tıkladığınızda veri aktarımı
        o sağlayıcıya geçebilir. İşleme yalnızca ilgili sağlayıcının sorumluluğundadır.
      </p>

      <h2>6. Çerezler</h2>
      <p>
        Kendi reklam amaçlı izleme çerezleri kullanmıyoruz. Barındırma veya form sağlayıcısı
        teknik olarak gerekli çerezleri ayarlayabilir.
      </p>

      <h2>7. Haklarınız</h2>
      <p>Yasal koşulların sağlandığı ölçüde özellikle şunlara sahipsiniz:</p>
      <ul>
        <li>Bilgi talebi (GDPR madde 15)</li>
        <li>Düzeltme (madde 16)</li>
        <li>Silme (madde 17)</li>
        <li>İşlemenin kısıtlanması (madde 18)</li>
        <li>Veri taşınabilirliği (madde 20)</li>
        <li>Varsa rızanın geri alınması (madde 7 fıra 3)</li>
        <li>Meşru menfaate dayalı işlemeye itiraz (madde 21, madde 6 fıra 1 bent f ile ilgili)</li>
      </ul>
      <p>
        Ayrıca bir veri koruma denetim otoritesine şikayette bulunma hakkınız vardır (madde 77).
      </p>

      <h2>8. Güncellik</h2>
      <p className="text-xs opacity-80">Bu bildirimin durumu: Nisan 2026</p>
    </LegalLayout>
  );
}
