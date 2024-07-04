// APW
// Página interna
// José Esteva <josesteva@soft4pilot.net>

import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

// Contexto de la aplicación
// import { Context } from '../../index';

// // Mecanismos
// import omitDeep from '../../hooks/utils/omitDeep';

// Recursos
import Icon from '../../assets/icons/command.svg?react';

// Contenedores
import Box  from '../../containers/Box';
import Text from '../../containers/Text';

// Componentes
import  Heading from '../../components/atoms/Button';
import  Image from '../../components/atoms/Image';
import  Title from '../../components/atoms/Title';
import { Actions, Command } from '../../components/organisms/Actions';

// Estilos
import style from './style.module.css';

// Consulta de datos
const Query = gql`query {
  manuales (filters: {servicio: { siglas: {eq: "S4P" }}}) {
    titulo
    resumen
    contenido
  }
}`;

// Definición del componente
const Manual = props => {

  // Parámetros de búsqueda de la URL
  const [ search ] = useSearchParams();

  // Utilizar el contexto de la aplicación
  // const { context } = useContext(Context);

  // Obtener los datos de la página
  const { data }  = useQuery(Query, { variables: { documentId: search.get('id') }});

  // NOTA: Poner el siguiente código dentro de un mecanismo (hook)
  // Desde aquí -->
  const [open, setOpen] = useState(false);    // Estado del botón de acciones

  const applyCommand = (e, i) => {
      setOpen(false);
      e.stopPropagation();
  }
  // <-- Hasta aquí

  // Interfaz gráfica
  return (

    <article>

      <Heading hue="light" space="large">
        <Text size="small" align="center" style={{fontSize:'20px'}}><strong>Manual del usuario</strong></Text>
      </Heading>

      { data && 
      <section className={style.section}>
        <Heading color="secondary" space="small" hue="light"><Title size="small">{data.servicio.nombre}</Title></Heading>
        <div className={style.paragraph}>
          <Image className={style.image} src={`${import.meta.env.LPDM_API_URL}${data.servicio.imagen.url}`}/>
          <Text align="center">{data.servicio.descripcion}</Text>
        </div>
      </section> }

      <Actions open={open} onClick={() => setOpen(!open)} style={{ position:'fixed', right:'2em', bottom:'2em', zIndex:'50' }}>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 1)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 2)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 3)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 4)}/>
      </Actions>

    </article>

  );
}

export default Manual;
