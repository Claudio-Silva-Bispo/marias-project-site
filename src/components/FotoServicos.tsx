

export default function FotoServicos() {
  return (
    <section
      className="p-4 lg:p-8 bg-gray-100 text-gray-800"
      id="sobre-servicos"
    >

        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                
                <h2 className="text-2xl font-bold text-start md:text-center leading-tight uppercase">Conheça os servicos que criamos <br /> <span className="uppercase text-quinta">especialmente para você</span></h2>
                
                <p className="text-start md:text-center">Queremos facilitar o seu dia com as melhores soluções</p>
        </div>

      <div className="container mx-auto space-y-12">
        {/* Limpeza Residencial */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/featured/?home,cleaning"
            alt="Limpeza Residencial"
            className="h-80 bg-gray-500 aspect-video"
          />

          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase">Serviço Personalizado</span>

            <h3 className="text-3xl font-bold">Limpeza Residencial</h3>

            <p className="my-1 text-md">
              Oferecemos um serviço completo de limpeza residencial, garantindo
              que sua casa esteja sempre limpa e organizada.
            </p>

            <p className="text-md">
              Nosso serviço abrange todas as áreas da casa, desde salas e
              quartos até cozinhas e banheiros, sempre com foco em detalhes e
              higiene.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-1"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Solicitar
            </button>
          </div>
        </div>

        {/* Limpeza Comercial */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/featured/?office,cleaning"
            alt="Limpeza Comercial"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Serviço Personalizado
            </span>
            <h3 className="text-3xl font-bold">Limpeza Comercial</h3>

            <p className="my-1 text-md">
              Mantenha seu ambiente de trabalho limpo e profissional com nossos
              serviços de limpeza comercial.
            </p>

            <p className="my-1 text-md">
              Oferecemos limpeza para escritórios, lojas e estabelecimentos
              comerciais, com horários flexíveis para não atrapalhar o
              funcionamento do seu negócio.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Solicitar
            </button>
          </div>
        </div>

        {/* Limpeza Pós-Obra */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/featured/?construction,cleaning"
            alt="Limpeza Pós-Obra"
            className="h-80 bg-gray-500 aspect-video"
          />

          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Serviço Personalizado
            </span>

            <h3 className="text-3xl font-bold">Limpeza Pós-Obra</h3>

            <p className="my-1 text-md">
              Transforme seu espaço recém-construído em um ambiente habitável
              com nossa limpeza pós-obra.
            </p>

            <p className="my-1 text-md">
              Removemos sujeiras, resíduos e poeiras, garantindo um ambiente
              limpo e seguro.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Solicitar
            </button>
          </div>
        </div>

        {/* Limpeza de Janelas */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/featured/?window,cleaning"
            alt="Limpeza de Janelas"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Serviço Personalizado
            </span>
            <h3 className="text-3xl font-bold">Limpeza de Janelas</h3>

            <p className="my-1 text-md">
              Mantenha suas janelas impecáveis com nosso serviço de limpeza
              especializada.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Solicitar
            </button>
          </div>
        </div>

        {/* Higienização de Estofados */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/featured/?furniture,cleaning"
            alt="Higienização de Estofados"
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <span className="text-xs uppercase text-gray-600">
              Serviço Personalizado
            </span>

            <h3 className="text-3xl font-bold">Higienização de Estofados</h3>

            <p className="my-6 text-gray-600">
              Cuide dos seus estofados com nossa higienização especializada,
              garantindo limpeza e conservação.
            </p>

            <p className="my-6 text-md text-gray-600">
              Utilizamos produtos ecológicos e técnicas avançadas para limpar e
              desinfetar seus estofados.
            </p>

            <button
              type="button"
              className="self-start py-2 px-4 font-semibold rounded-md text-white mt-5"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
