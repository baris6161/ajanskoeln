import { z } from "zod";

const uuidSchema = z.string().uuid();
const safeText = z.string().trim().max(5000);

export const customerPayloadSchema = z.object({
  firma: z.string().trim().min(1).max(200),
  yetkili: z.string().trim().min(1).max(200),
  adres: z.string().trim().min(1).max(1000),
  tel: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  language: z.enum(["tr", "de", "en"]),
  notizen: z.string().max(5000).optional().nullable(),
});

export const customerUpdatePayloadSchema = customerPayloadSchema.partial();

export const serviceLineSchema = z.object({
  hizmet: z.string().trim().min(1).max(500),
  gun: z.number().int().nonnegative().max(3650),
  adet: z.number().int().nonnegative().max(100000),
  fiyat: z.number().nonnegative().max(100000000),
});

export const offerCreatePayloadSchema = z.object({
  customer_id: uuidSchema.nullable().optional(),
  projekt: z.string().trim().min(1).max(300),
  etkinlik: z.string().trim().min(1).max(300),
  tarih_von: z.string().trim().min(1).max(50),
  tarih_bis: z.string().trim().min(1).max(50),
  konum: z.string().trim().min(1).max(300),
  angebotstext: safeText,
  leistungen: z.array(serviceLineSchema).min(1).max(200),
  gesamt: z.number().nonnegative().max(100000000),
  status: z.enum(["entwurf", "gesendet", "angenommen", "abgelehnt"]),
});

export const offerUpdatePayloadSchema = offerCreatePayloadSchema.partial();

export const offerStatusPayloadSchema = z.object({
  status: z.enum(["entwurf", "gesendet", "angenommen", "abgelehnt"]),
});

export const sendOfferPayloadSchema = z.object({
  to: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(10000),
  offerId: uuidSchema.optional(),
  mailLanguage: z.enum(["tr", "en", "de"]).optional(),
});

export const smtpPayloadSchema = z.object({
  smtpEmail: z.string().trim().email().max(254),
  smtpPassword: z.string().trim().min(8).max(200),
});

export const settingsItemsPayloadSchema = z.object({
  items: z
    .array(
      z.object({
        key: z.string().trim().min(1).max(100).regex(/^[a-z0-9_.-]+$/i),
        value: z.string().max(5000),
      }),
    )
    .max(200),
});
