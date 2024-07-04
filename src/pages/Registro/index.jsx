// Soft4pilot
// Registro de pilotos
// José Esteva <josesteva@soft4pilot.net>

// Dependencias
import React, { useContext, useRef } from 'react';
import { isEmpty } from 'lodash';

// Contexto
// import { Context } from '../../index';

// Mecanismos
import useForm from '../../hooks/form';

// Contenedores
import Box  from '../../containers/Box';
import Flexbox  from '../../containers/Flexbox';
import Text from '../../containers/Text';

// Componentes
import Button from '../../components/atoms/Button';
import  Checkbox from '../../components/atoms/Checkbox';
import  Input from '../../components/atoms/Input';
import  Label from '../../components/atoms/Label';
import  Title from '../../components/atoms/Title';
import { Select, Option } from '../../components/atoms/Select';
import  Heading from '../../components/molecules/Heading';
import { Form, Field } from '../../components/organisms/Form';

// Estilos
import style from './style.module.css';

// Definición del componente
const Registro = props => {

  // Utilizar el contexto de la aplicación
  // const { context } = useContext(Context);

  // Referencia al formulario
  // const ref = useRef(null);

  // // Estructura de datos dl formulario
  // const Structure = {
  //   tipo: '?',
  //   nombre: '',
  //   correo: '',
  //   arbitraje: false,
  //   elaboracion: false,
  //   codigo: false,
  //   comentario: ''
  // }

  // // Envío de formulario
  // const { values, submitForm, form.changeValue } = useSubmit('pilotos', Structure);

  // Gestion del formulario
  const form = useForm(0, 'Piloto');

  // const validateForm =  () => {

  //   // Validar todos los campos del formulario
  //   for (let element of ref.current.elements) if (!element.validity.valid) return;

  //   submitForm();

  // }

  const addItem = () => { 

    form.send.create().then(() => form.resetValues() ).catch(e => console.log(e));

  }

  // const actionForm = async () => {

  //   console.log("Se valida y se envían los datos");

  // }

  // Interfaz gráfica
  return (

    <main className={style.main}>

      <Heading space="medium large" color="primary" style={{ position:'sticky', top:'0', zIndex:'100' }}>
        <Title color="white">Registro</Title>
      </Heading> 

      <Heading hue="light" space="large">
        <Text size="medium" align="center">Registrate en la plataforma para tener acceso o los servicios.</Text>
      </Heading>

      <Box space="large" color="white">
        <Flexbox direction="column" gap="large" align="center">
          { !isEmpty(form.values) && 
            <Form style={{maxWidth:'960px'}}>
              <Field>
                <Label bold>Nombre</Label>
                <Input required type="text" name="nombre" value={form.values.nombre} onChange={form.changeValue} color="primary" style={{width:'100%'}}/>
              </Field>
              <Field>
                <Label bold>Correo electrónico</Label>
                <Input required type="email" name="correo" value={form.values.correo} onChange={form.changeValue} color="primary" style={{width:'100%'}}/>
              </Field>
              <Field>
                <Label bold>Pseudónimo</Label>
                <Input type="text" name="pseudonimo" value={form.values.pseudonimo} onChange={form.changeValue} color="primary" style={{width:'100%'}}/>
              </Field>
              <Field>
                <Label bold>Actividad principal</Label>
                <Select name="tipo" value={form.values.tipo} onChange={form.changeValue} color="primary" style={{width:'100%'}}>
                  <Option value="otro"></Option>
                  <Option value="alumno">Alumno de piloto</Option>
                  <Option value="piloto">Piloto activo</Option>
                  <Option value="instructor">Instructor de vuelo</Option>
                </Select>
              </Field>
              <Field>
                <Label bold style={{marginBottom:'4px'}}>¿Te gustaría participar?</Label>
                <Flexbox direction="column" gap="small" align="top">
                  <Checkbox name="arbitraje" checked={form.values.arbitraje} color="primary" onChange={form.changeValue}><Text size="medium" style={{marginLeft:'8px'}}>Tengo experiencia en la aviación, puedo ayudar a decidir qué información incluir.</Text></Checkbox>
                  <Checkbox name="elaboracion" checked={form.values.elaboracion} color="primary" onChange={form.changeValue}><Text size="medium" style={{marginLeft:'8px'}}>Soy artista, puedo ayudar a elaborar textos, ilustraciones y diagramas.</Text></Checkbox>
                  <Checkbox name="codigo" checked={form.values.codigo} color="primary" onChange={form.changeValue}><Text size="medium" style={{marginLeft:'8px'}}>Me gusta la tecnología, puedo ayudar a implementar los servicios.</Text></Checkbox>
                </Flexbox>
              </Field>
            </Form>
          }
          <div className={style.dynamic}><Button onClick={addItem} color="secondary">Enviar</Button></div>
        </Flexbox>
      </Box>

      <Box space="medium large" color="secondary" hue="light">
        <Text size="small" align="center">La información enviada a través de este formulario está protegida por las leyes vigentes del <strong>IFAI</strong>.</Text>
      </Box>

    </main>

  );
}

export default Registro;
