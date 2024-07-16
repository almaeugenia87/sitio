/*
  SD
  Componentes
  Form (Formulario) - Guía de estilo
  José Esteva (josesteva@soft4pilot.net)
*/

// NOTA: Sustituir la molécula <Link> por una etiqueta HTML <label>.

import Input from '../../atoms/Input';
import Link from '../../atoms/Link';
import { Select, Option } from '../../atoms/Select';

import { Form, Field } from './index';

export default {
  component: Form,
  title: 'Organismos/Form'
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?node-id=1264%3A1952&t=1sHhyFqJ8uiK82si-1",
    }
  },
  render: () =>
    <Form>
      <Field>
        <Link bold>Caja de texto</Link>
        <Input color="primary" placeholder="Ingresar texto..." style={{width:'100%'}}/>
      </Field>
      <Field>
        <Link bold>Lista de selección</Link>
        <Select color="primary" placeholder="Seleccionar..." style={{width:'100%'}}>
          <Option value="1">Uno</Option>
          <Option value="2">Dos</Option>
          <Option value="3">Tres</Option>
        </Select>
      </Field>
    </Form>
};
