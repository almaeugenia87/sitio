// Soft4pilot
// Registro de pilotos
// José Esteva <josesteva@soft4pilot.net>

import React, { useRef } from 'react';

import gql from 'graphql-tag';

// Estilos
import style from './style.module.css';

// Componentes
import {
  Box,
  Button,
  Checkbox,
  Column,
  Form, Field,
  Heading,
  Input,
  Label,
  Select, Option,
  Text,
  Textarea,
  Title
} from '@soft4pilot/sd';

// Mecanismos
import useQuery from '../../hooks/query';
import useSubmit from '../../hooks/submit';

// Componente
const Registro = props => {

  // Referencia al formulario
  const ref = useRef(null);

  // Consulta de datos
  const query = gql`{

    recursos_by_id(id: "${props.id}") {
      nombre
      descripcion
    }

  }`;

  // Datos
  const [ data ] = useQuery(query);

  // Estructura de datos dl formulario
  const structure = {
    tipo: '?',
    nombre: '',
    correo: '',
    arbitraje: false,
    redaccion: false,
    dibujo: false,
    comentario: ''
  }

  // Envío de formulario
  const { values, submitForm, handleChange } = useSubmit('pilotos', structure);

  const validateForm =  () => {

    // Validar todos los campos del formulario
    for (let element of ref.current.elements) if (!element.validity.valid) return;

    submitForm();

  }

  // Interfaz gráfica
  return (

    <main className={style.main}>

      <Heading space="large" hue="default">
        <Title size="medium" color="white" align="center">{data && data.recursos_by_id.nombre}</Title>
      </Heading>

      <Heading hue="light" space="large">
        <Text align="center"><strong>{data && data.recursos_by_id.descripcion}</strong></Text>
      </Heading>

      <Box space="large" color="white">
        <Column gap="large" align="center">
          <Form ref={ref} style={{maxWidth:'960px'}}>
            <Field>
              <Label bold>Nombre</Label>
              <Input required name="nombre" value={values.nombre} onChange={handleChange} color="primary" style={{width:'100%'}}/>
            </Field>
            <Field>
              <Label bold>Correo electrónico</Label>
              <Input required type="email" name="correo" value={values.correo} onChange={handleChange} color="primary" style={{width:'100%'}}/>
            </Field>
            <Field>
              <Label bold>Actividad principal</Label>
              <Select name="tipo" value={values.tipo} onChange={handleChange} color="primary" style={{width:'100%'}}>
                <Option value="?"></Option>
                <Option value="A">Alumno de piloto</Option>
                <Option value="P">Piloto activo</Option>
                <Option value="I">Instructor de vuelo</Option>
              </Select>
            </Field>
            <Field>
              <Label bold style={{marginBottom:'4px'}}>¿Cómo te gustaría ayudar?</Label>
              <Column gap="small" style={{paddingLeft:'8px'}}>
                <Checkbox name="arbitraje" value={values.arbitraje} color="primary" onChange={handleChange}><div style={{marginLeft:'12px'}}><Label>Tengo experiencia en la aviación, puedo ayudar a decidir qué información incluir.</Label></div></Checkbox>
                <Checkbox name="redaccion" value={values.redaccion} color="primary" onChange={handleChange}><div style={{marginLeft:'12px'}}><Label>Me gusta escribir, puedo ayudar a redactar los contenidos.</Label></div></Checkbox>
                <Checkbox name="dibujo" value={values.dibujo} color="primary" onChange={handleChange}><div style={{marginLeft:'12px'}}><Label>Sé dibujar, puedo ayudar a elaborar ilustraciones.</Label></div></Checkbox>
              </Column>
            </Field>
            <Field>
              <Label bold>¿Quieres hacernos algún comentario?</Label>
              <Textarea name="comentario" value={values.comentario} onChange={handleChange} color="primary" style={{width:'100%'}}/>
            </Field>
          </Form>
          <div className={style.dynamic}><Button onClick={ validateForm } color="secondary">Enviar</Button></div>
        </Column>
      </Box>

      <Box space="medium large" color="secondary" hue="light">
        <Text size="small" align="center">No te preocupes, haremos hasta lo imposible para mantener tus datos seguros.</Text>
      </Box>

    </main>

  );
}

export default Registro;
