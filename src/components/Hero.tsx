import { HiDownload } from 'react-icons/hi';
export default function Hero() {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white ">
      <div className="container mx-auto m-w-4xl p-4 py-4 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting text-3xl block my-1 text-center md:text-left">
              Olá, me chamo
            </span>
            <span className="font-headline text-5xl font-light">Francisco</span>
            <span className="font-headline text-5xl font-semibold text-blue-800">
              Etizel
            </span>
          </h1>

          <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
            <div className="h-1 w-12 rounded-full bg-blue-800" />
            Desenvolvedor React.js Front-End
          </h2>

          <p className="text-gray-600 my-6 text-center md:text-left">
            Transformando designs em experiências dinâmicas por meio de
            componentes eficientes e colaborando com as mais avançadas
            tecnologias do mercado.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 ">
            <a href="#" className="underline font-bold text-white">
              Entre em Contato
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              href="#"
              className="button hover:text-gray-900 flex items-center gap-2"
            >
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>
        <div className="basis-2/2"></div>
      </div>
    </section>
  );
}
