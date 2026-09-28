import Image from "next/image";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center justify-center px-5 pb-6 pt-3 sm:max-w-lg lg:max-w-5xl lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:px-10 lg:py-10">
      <div className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
        <Image
          src="/logo.png"
          alt="Sushi Fhais"
          width={420}
          height={210}
          className="w-28 sm:w-36 lg:w-64"
          priority
        />

        <span className="mt-3 inline-block rounded-full bg-brand-50 px-4 py-1 text-sm font-semibold text-brand-600">
          Próximamente
        </span>

        <h1 className="mt-2 text-center text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-left lg:text-4xl">
          Recibe tu <span className="text-brand-600">sorpresa</span> de
          lanzamiento
        </h1>

        <p className="mt-2 text-center text-base text-neutral-500 lg:text-left lg:text-lg">
          Regístrate y llévate un regalo en tu primer pedido online.
        </p>
      </div>

      <div className="mt-4 w-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 lg:mt-0 lg:max-w-md lg:flex-1">
        <RegisterForm />
      </div>
    </main>
  );
}
