// Soft4pilot
// ¿A quién está dirigido?
// José Esteva <josesteva@soft4pilot.net>

import React, { useContext } from 'react';
import gql from 'graphql-tag';

// Estilos
import style from './style.module.css';

// Componentes
import { Heading } from '@soft4pilot/sd';
// import { Grid } from '@soft4pilot/sd';
import { Image } from '@soft4pilot/sd';
import { Text } from '@soft4pilot/sd';
import { Title } from '@soft4pilot/sd';

// Configuración
import { Context } from '../../index';

// Mecanismos
import useQuery from '../../hooks/query';

// Componente
const Quien = props => {

  // Utilizar el contexto de la aplicación
  const { context } = useContext(Context);

  // Consulta de datos
  const query = gql`{

    recursos_by_id(id: "${props.id}") {
      nombre
      descripcion
    }

    manuales(sort: "orden", filter: {tipo: {_eq: "persona"}}) {
      titulo
      descripcion
      imagen {
        id
      }
    }

  }`;

  // Datos
  const [ data ] = useQuery(query);

  // Interfaz gráfica
  return (
    <main className={style.main}>

      <Heading space="large" hue="default">
        <Title size="medium" color="white" align="center">{data && data.recursos_by_id.nombre}</Title>
      </Heading>

      <Heading color="primary" hue="light" space="large">
        <Text size="medium" align="center" style={{fontSize:'20px'}}><strong>{data && data.recursos_by_id.descripcion}</strong></Text>
      </Heading>

      <div className={style.grid}>

        { data && data.manuales.map((persona, i) => {

          return (
            <section className={style.section} key={i}>
              <Heading space="small" color="secondary" hue="light"><Title size="small">{persona.titulo}</Title></Heading>
              <div className={style.paragraph}>
                <Image className={style.image} src={`${context.api}/assets/${persona.imagen.id}`}/>
                <Text size="medium" align="justify">{persona.descripcion}</Text>
              </div>
            </section>)
          })
        }

      </div>

    </main>
  );
}

export default Quien;
