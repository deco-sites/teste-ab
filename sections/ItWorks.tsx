import { useScript } from "@deco/deco/hooks";

const goPurchase = () => {
  window.dataLayer?.push({ event: "purchase" });
};

export default function Section() {
  return (
    <div className="bg-black w-dvw h-dvh">
      <div className="bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed max-w-96 text-black p-8 rounded-lg flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl">Bem vindo ao Teste</h1>
        <p>Esse é um teste de GTM, GA e Teste A/B. Esse site é em Deco.cx e você está na Infra da Deco</p>
        <button className="btn btn-primary" hx-on:click={useScript(goPurchase)}>
          Simular Compra
        </button>
      </div>
    </div>
  );
}
