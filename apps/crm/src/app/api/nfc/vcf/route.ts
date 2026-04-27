import { NextResponse } from "next/server";

export async function GET() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Ekiz;Funda;;;",
    "FN:Funda Ekiz",
    "ORG:Ajans Köln",
    "TITLE:Fair Organisation",
    "TEL;TYPE=CELL:+491727532501",
    "EMAIL;TYPE=INTERNET:ajanskoeln@gmail.com",
    "X-SOCIALPROFILE;type=instagram;x-user=ajanskoeln:https://instagram.com/ajanskoeln",
    "URL:https://ajanskoeln.de",
    "END:VCARD",
  ].join("\r\n");

  return new NextResponse(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="ajans-koeln.vcf"',
      "Cache-Control": "no-store",
    },
  });
}
