export default function Header() {
  <header className="flex items-center justify-between p-4">
    <div className=" mx-auto flex maw-w-6x1 items-center justify-between px-6 py-4">
      <h1 className=" text-2x1 font-bold text-yellow-400">
        &lt;/&gt; Desvendando o código
      </h1>

      <nav className="hidden gap-6 md:flex">
        <a href="#inicio" className="transition hover:text-yellow-400">
          Início
        </a>

        <a href="#recursos" className="transition hover:text-yellow-400">
          Recursos
        </a>

        <a href="#recursos" className="transition hover:text-yellow-400">
          Sobre
        </a>
      </nav>

      <button
        className="
        rounded-1g
        bg-yellow-400
        px-4 py-2
        font-semibold
        text black
        transition
        hover:bg-yellow-300"
      >
        Começar
      </button>
    </div>
  </header>;
}
