// Soft4pilot
// Plantilla de la aplicación
// José Esteva <josesteva@soft4pilot.net>

import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Contexto
import { Context } from '../index';

// Componentes
import Label from '../components/atoms/Label';
import Link from '../components/atoms/Link';
import { Item } from '../components/organisms/Menu';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';

// Plantilla
const Template = () => {

  // Navegación
  const navigate = useNavigate();

  // Ruta al navegador
  const location = useLocation();

  // Utilizar el contexto de la aplicación
  const { context, setContext } = useContext(Context);

  // Estado de la plantilla
  const [icons, setIcons] = useState([]);

  // Actualizar el índice de la página seleccionada (currentPage) cuando cambie la ruta
  useEffect(() => {

    // Obtener el índice de la página actual
    const currentIndex = context.pages.findIndex(e => e.route === location.pathname);

    // Guardar el filtro y desplazamiento de la página actual
    setContext({ key: `pages[${currentIndex}].filter`, value: context.currentPage.filter });
    setContext({ key: `pages[${currentIndex}].offset`, value: context.currentPage.offset });

    // Registrar los datos la página seleccionada
    setContext({ key: 'currentPage', value: currentIndex ? context.pages[currentIndex] : context.pages[0] });

  }, [ location ]);  // eslint-disable-line

    // Cargar los iconos de los módulos
  useEffect(() => {

    // NO BORRAR: Este código funciona perfectamente bien pero quiero explorar otras opciones  
    // Promise.all(context.pages.map(async (page) => (await import(`../assets/icons/${page.icon}.svg?react`)).default)).then((svgs) => setIcons(svgs));

    (async () => {

      let newIcons = [];

      for (const page of context.pages) {

        let { default:svg } = await import(`../assets/icons/${page.icon}.svg?react`);
        
        newIcons.push(svg);
      
      }

      setIcons(newIcons);
    
    })();

  }, []);  // eslint-disable-line

  // Interfaz gráfica
  return (
    <>
      {/*<Notification/>*/}
      <Header onLogoClick={() => navigate('/', { replace: true })}>
        { context.pages.map((page, i) => (
          <Item key={i} icon={icons[i]} aside={page.aside} onClick={() => navigate(page.route, { replace: true })}>{page.label}</Item>
        ))}
      </Header>
      <main style={{ zIndex:'-1' }}>
        <Routes>
          { context.pages.map((page, i) => {
            // Crear un componente dinámico  
            // NOTA: Si hay más de un submódulo se deben crear más componentes dinámicos (posiblemente con un búcle anidado).
            let DynComponent = lazy(() => import(`./${page.module}/index.jsx`));
            return <Route key={i} path={`${page.route}`} element={<Suspense><DynComponent id={i} /></Suspense>}/>
          })}
        </Routes>
        <Footer color="secondary" hue="dark" style={{marginTop:'auto'}}>
          <Link href={`mailto:${context.email}`} color="primary" variant="light"><Label size="medium" color="white">{context.email}</Label></Link>
        </Footer>
      </main>
    </>
  )
}

export default Template;

// [lock-all/]
