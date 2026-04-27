"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { Offer } from "@/lib/types";
import { OfferDocument } from "@/lib/pdf/offer-document";

export function PdfPreview({ offer }: { offer: Offer }) {
  return (
    <div className="hidden h-[700px] overflow-hidden rounded-xl border border-border md:block">
      <PDFViewer width="100%" height="100%">
        <OfferDocument offer={offer} />
      </PDFViewer>
    </div>
  );
}
