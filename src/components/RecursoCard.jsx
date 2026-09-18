export default function RecursoCard({
    icone,
    titulo,
    descricao
}) {
    return (
        <article className="
        rounded-2x1
        bg-white
        p-6
        shadow-md
        transition
        hover:-translate-y-1
        hover:shadow-xl">
            <div className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-yellow-100
            text-2x1">
                {icone}
            </div>

            <h3 className="
            mt-4 
            text-xl
            font-bold
            ">{titulo}</h3>

            <p className="
            mt-2
            text-slate-500">{descricao}</p>
        </article>
    )
}