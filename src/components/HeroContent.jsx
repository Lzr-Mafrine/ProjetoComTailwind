export default function HeroContent(){
    return(
        <div>

            <p
            className="mb-3
            font-semibold
            uppercase
            tracking-widest
            text-yellow-400">
                Programação Web
            </p>

            <h1 className="
            text-4x1
            font-bold
            leading-tight
            md:text-6x1">
                React + 
                <span className="text-yellow-400">{''}Tailwind CSS</span>
            </h1>
            
            <p
            className="
            mt-6
            max-w-xl
            text-lg
            text-slate-300">Crie interfaces modernas, responsivas e organizadas
                utilizando componentes React e classes utilitárias
                do Tailwind CSS
            </p>

            <div className="
            mt-8
            flex
            flex-col
            gap-4
            sm:flex-row"
            >
                <button 
                className="rounded-lg
                bg-yellow-400
                px-6
                py-3
                font-bold
                text-black
                transition
                hover:bg-yellow-300">Começar agora</button>

                <button className="
                rounded-lg
                border
                border-slate-600
                px-6
                py-3
                font-semibold
                transition
                hover:border-yellow-400
                hover:text-yellow-400">Ver projeto</button>
            </div>
        </div>
    )
}