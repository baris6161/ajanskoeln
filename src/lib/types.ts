export type CustomerLanguage = "tr" | "de" | "en";
export type OfferStatus = "entwurf" | "gesendet" | "angenommen" | "abgelehnt";

export type Customer = {
  id: string;
  firma: string;
  yetkili: string;
  adres: string;
  tel: string;
  email: string;
  language: CustomerLanguage;
  notizen?: string | null;
  created_at: string;
};

export type ServiceLine = {
  hizmet: string;
  gun: number;
  adet: number;
  fiyat: number;
};

export type Offer = {
  id: string;
  offer_number: string;
  customer_id: string | null;
  projekt: string;
  etkinlik: string;
  tarih_von: string;
  tarih_bis: string;
  konum: string;
  angebotstext: string;
  leistungen: ServiceLine[];
  gesamt: number;
  status: OfferStatus;
  sent_at?: string | null;
  sent_language?: "tr" | "en" | "de" | null;
  created_at: string;
};
