"use client";

import { Button } from "@/components/Button";

export default function HomePage() {
  function handleBuy() {
    alert("Comprado!");
  }

  return (
    <main className="min-h-dvh flex items-center justify-center p-6 bg-gray-50">
      <section className="w-full max-w-md space-y-4 rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Aperta no botão de "Comprar", ai...</h1>

        <div className="flex gap-3">
          <Button label="Comprar" onClick={handleBuy} />
          <Button label="Processando..." disabled />
        </div>

        <p className="text-sm text-gray-600">
          Aê! Comprou.
        </p>
      </section>
    </main>
  );
}