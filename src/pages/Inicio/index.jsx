// APW
// Página principal
// José Esteva <josesteva@soft4pilot.net>

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

// Recursos
import Icon from '../../assets/icons/command.svg?react';

// Componentes del sistema de diseño
import {
  Actions,
  Box,
  Button,
  Command,
  Heading,
  Image,
  Label,
  Ribbon,
  Text,
  Title
} from '@soft4pilot/sd';

// Contexto de la aplicación
// import { Context } from '../../index';

// // Mecanismos
// import omitDeep from '../../hooks/utils/omitDeep';

// Plantillas
import Hero from '../../templates/Hero';

// Estilos específicos
import style from './style.module.css';

// Consulta de datos
const Query = gql`query {
  servicios (filters: { siglas: { ne: "S4P" }}) {
    data {
      id
      attributes {
        siglas
        nombre
        descripcion
        imagen {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`;

// Definición del componente
const Inicio = props => {

  // Enrutador
  const navigate = useNavigate(); 

  // Utilizar el contexto de la aplicación
  // const { context } = useContext(Context);

  // Obtener los datos de la página
  const { data }  = useQuery(Query);

  // NOTA: Poner el siguiente código dentro de un mecanismo (hook)
  // Desde aquí -->
  const [open, setOpen] = useState(false);    // Estado del botón de acciones

  const applyCommand = (e, i) => {
      setOpen(false);
      e.stopPropagation();
  }
  // <-- Hasta aquí

  const CodeAction = <Button color="accent">Código</Button>; // [lock-ignore/]

  // Interfaz gráfica
  return (

    <>

      <Hero callToAction={CodeAction} />

      <Box color="primary" hue="light" space="large">
          <Text size="medium" align="justify">Lista de servicios</Text>
      </Box>

      <div className={style.grid}>

        { data && data.servicios && data.servicios.data.map((servicio, i) => (
            <section className={style.section} key={i} onClick={() => navigate(`/pagina?id=${servicio.id}`, { replace: true }) } style={{ cursor:'pointer' }}>
              { servicio.id === 2 && <Ribbon color="accent"><Label size="medium" color="white" accent="bold">NUEVO</Label></Ribbon> }
              <Heading color="secondary" space="small" hue="light"><Title size="small">{servicio.attributes.nombre}</Title></Heading>
              <div className={style.paragraph}>
                { servicio.attributes.imagen && <Image className={style.image} src={`${import.meta.env.S4P_API_URL}${servicio.attributes.imagen.data.attributes.url}`}/> }
                <Text align="center">{servicio.attributes.descripcion}</Text>
              </div>
            </section>
          )
        )}

      </div>

      <Actions open={open} onClick={() => setOpen(!open)} style={{ position:'fixed', right:'2em', bottom:'2em', zIndex:'50' }}>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 1)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 2)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 3)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 4)}/>
      </Actions>

    </>

  );
}

export default Inicio;