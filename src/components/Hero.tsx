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

        <h2 className="font-semibold flex items-center">
          <div className="h-1 w-12 rounded-full bg-blue-800" />
          Desenvolvedor React.js Front-End
        </h2>
      </div>
    </section>
  );
}
