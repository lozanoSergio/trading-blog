import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

export default function Footer() {
    return (
        <footer className='bg-accent-1 border-t border-accent-2'>
            <Container>
                <div className='py-28 flex flex-col lg:flex-row items-center'>
                    <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
                        SER - HACER - TENER
                    </h3>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
                        <p>
                            Aviso legal: Este blog no ha de ser considerado como un consejo de inversión, compra o
                            venta. El contenido proporcionado dentro de esta página web es de carácter educativo, basado
                            en mi propia experiencia personal. El único responsable de manejar tu dinero eres tú.
                            Realiza tu propia investigación.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
