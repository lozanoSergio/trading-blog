export default function Footer() {
    return (
        <footer className='flex justify-center bg-white tracking-tight md:tracking-tighter leading-tight bottom-0 shadow-sm border-t border-accent-2'>
            <div className='container flex w-full max-w-screen-xl px-5'>
                <div className='py-28 flex flex-col lg:flex-row items-center'>
                    <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
                        SER - HACER - TENER
                    </h3>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
                        <p className='text-justify'>
                            Aviso legal: Este blog no ha de ser considerado como un consejo de inversión, compra o venta
                            de activos. El contenido proporcionado dentro de esta página web es de carácter educativo,
                            basado en mi propia experiencia personal. El único responsable de manejar tu dinero eres tú.
                            Aprende y realiza tu propia investigación.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
