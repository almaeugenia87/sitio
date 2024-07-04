// APW
// Página interna
// José Esteva <josesteva@soft4pilot.net>

// Dependencias
import React, { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

// Contexto
import { Context } from '../../index';

// Mecanismos
import omitDeep from '../../hooks/utils/omitDeep';

// Recursos
import Icon from '../../assets/icons/command.svg?react';

// Contenedores
import Markdown  from '../../containers/Markdown';
import Text from '../../containers/Text';

// Componentes
import  Title from '../../components/atoms/Title';
import  Heading from '../../components/molecules/Heading';
import { Actions, Command } from '../../components/organisms/Actions';

// Estilos
import style from './style.module.css';

// Consulta de datos
const Query = gql`query ($id: ID!) {
  servicio (id: $id ) {
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
        documentos {
          data {
            attributes {
              titulo
              presentacion
              contenido
            }
          }
        }
      }
    }
  }
}`;

// Definición del componente
const Pagina = props => {

  // Parámetros de búsqueda de la URL
  const [ search ] = useSearchParams();

  // Utilizar el contexto de la aplicación
  const { context } = useContext(Context);

  // Obtener los datos de la página
  const { data }  = useQuery(Query, { variables: { id: search.get('id') }});

  // NOTA: Poner el siguiente código dentro de un mecanismo (hook)
  // Desde aquí -->
  const [open, setOpen] = useState(false);    // Estado del botón de acciones

  const applyCommand = (e, i) => {
      setOpen(false);
      e.stopPropagation();
  }
  // <-- Hasta aquí

  // NOTA: Poner aquí un componente <Loading /> o similar.

  // Interfaz gráfica
  return (

    <article>

      { data &&  <>

      <Heading space="medium large" color="primary" style={{ position:'sticky', top:'0', zIndex:'100' }}>
        <Title color="white">{data.servicio.data.attributes.nombre}</Title>
      </Heading> 
      
      <Heading hue="light" space="large">
        <Text size="medium" align="center">{data.servicio.data.attributes.descripcion}</Text>
      </Heading> 
      
      { data.servicio.data.attributes.documentos.data.map((documento, i) => (
      
        <section className={style.section}>
          <Heading color="secondary" space="small" hue="light"><Title size="small">{documento.attributes.titulo}</Title></Heading>
          <div className={style.paragraph}>
            <Markdown>{documento.attributes.contenido}</Markdown>
          </div>
        </section>

      ))}
      
      <Actions open={open} onClick={() => setOpen(!open)} style={{ position:'fixed', right:'2em', bottom:'2em', zIndex:'50' }}>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 1)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 2)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 3)}/>
        <Command icon={Icon} onClick={(e) => applyCommand(e, 4)}/>
      </Actions>

      </> }

    </article> 
    
  );
}

export default Pagina;
