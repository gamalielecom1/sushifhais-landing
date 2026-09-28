"use client";

export default function ThankYouScreen({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 px-5 backdrop-blur-sm animate-fade-in">
      <div className="relative flex w-full max-w-sm flex-col items-center rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-xl animate-expand-in sm:p-10">
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-600"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative mb-5 flex h-28 w-28 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-bamboo-400 animate-ring-out" />
          <span
            className="absolute inset-0 rounded-full border-2 border-brand-400 animate-ring-out"
            style={{ animationDelay: "0.2s" }}
          />
          <GiftIllustration />
        </div>

        <span className="inline-block rounded-full bg-bamboo-500/10 px-4 py-1 text-sm font-semibold text-bamboo-600">
          ¡Registro exitoso!
        </span>

        <h1 className="mt-3 text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
          Gracias por unirte,{" "}
          <span className="text-brand-600">te esperamos</span>
        </h1>

        <p className="mt-3 text-base text-neutral-500">
          Guardamos tus datos. Apenas Sushi Fhais abra sus puertas te
          avisaremos y tendrás tu regalo listo para tu primer pedido online.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-neutral-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.98]"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

function GiftIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="relative h-24 w-24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="58" fill="#FDEDEC" />
      <rect x="30" y="52" width="60" height="42" rx="6" fill="#d7010c" />
      <rect x="30" y="52" width="60" height="14" rx="4" fill="#8f0008" />
      <rect x="54" y="52" width="12" height="42" fill="#fac6c6" />
      <path
        d="M60 52c-8-10-24-10-24-2s16 2 24 2z"
        fill="#86bb2d"
      />
      <path
        d="M60 52c8-10 24-10 24-2s-16 2-24 2z"
        fill="#699423"
      />
    </svg>
  );
}
