export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-400">
          &lt;/&gt; Desvendando o código
        </h1>

        <nav className="hidden gap-6 md:flex">
          <a href="#inicio" className="transition hover:text-yellow-400">Início</a>
          <a href="#recursos" className="transition hover:text-yellow-400">Recursos</a>
          <a href="#sobre" className="transition hover:text-yellow-400">Sobre</a>
        </nav>

        <button className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black transition hover:bg-yellow-300">
          Começar
        </button>
      </div>
    </header>
  );
}