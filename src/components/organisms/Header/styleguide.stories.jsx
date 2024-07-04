/*
  SD
  Componentes
  Header (Encabezado) - Guía de estilo
  José Esteva (josesteva@soft4pilot.net)
*/

import Header from './index';
import Command from '../../../assets/icons/command.svg?react';
import Heading from '../../molecules/Heading'
import { Item } from '../../organisms/Menu';

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  console.log(`El campo ${name} cambiaría al valor ${value}.`);
}

export default {
  component: Header,
  title: 'Organismos/Header'
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?type=design&node-id=601%3A315&mode=design&t=mC3jeBT4JirGI5Gz-1",
    }
  },
  argTypes: {
    // onLogoClick: {
    //   name: 'onLogoClick',
    //   type: { name: 'function', required: false },
    //   description: 'Función que se ejecuta al hacer click en el logotipo de Soft4pilot.',
    //   control: null
    // }
  },
  args: {
    // onLogoClick: () => console.log('Click en el logotipo'),
    style: { zIndex:'1000' }
  },
  render: (args) =>
    <div style={{ position:'absolute', top:'0', left:'0', right:'0', height:'100vh' }}>
      <Header {...args}>
        <Item icon={Command}>Etiqueta</Item>
        <Item icon={Command}>Etiqueta</Item>
        <Item icon={Command}>Etiqueta</Item>
        <Item icon={Command} aside>Etiqueta</Item>
      </Header>
      <Heading style={{position:'sticky', top:'0', height:'60px'}}></Heading>
      <Heading color="white" style={{height:'200vh'}}></Heading>
    </div>
};
