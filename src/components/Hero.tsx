export function Hero() {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white ">
      <div className="container mx-auto m-w-4xl">
        <h1 className="mb-6">
          <span className="font-handwriting text-3xl block">Olá, me chamo</span>
          <span className="font-headline text-5xl font-light">Francisco</span>
          <span className="font-headline text-5xl font-semibold text-blue-800">
            Etizel
          </span>
        </h1>

        <h2 className="font-semibold flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-blue-800" />
          Desenvolvedor React.js Front-End
        </h2>

        <p className="text-gray-600 my-6">
          Transformando designs em experiências dinâmicas por meio de
          componentes eficientes e colaborando com a maiores tecnologias do
          mercado.
        </p>

        <div className="flex items-center gap-2">
          <a href="#" className="underline font-bold text-white">
            Entre em Contato
          </a>
          <span className="italic text-gray-500">ou</span>
          <a
            href="#"
            className="cursor-pointer rounded-md bg-orange-600 px-4 py-2 font-headline text-sm font-semibold transition"
          >
            Baixe meu CV
          </a>
        </div>
      </div>
    </section>
  );
}
