/*
  SD
  Guía de estilo
  a (Enlace) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Image from '../Image';

export default {
  title: 'Átomos/a',
  argTypes: {
    className: {
      name: 'className',
      type: { name: 'string', required: false },
      description: 'Clases aplicadas al elemento; por ejemplo "primary light"',
      control: 'text',
    }
  }
};

export const Componente = {
  args: {
    className: 'primary'
  },
  render: (args) => 
    <>
      <a {...args}>Texto</a>
      <a {...args}><Image src="https://via.placeholder.com/360x240/8C9199/F6F7FA/?text=Soft4pilot.net" style={{width:'50%',height:'50%'}}/></a>
    </>
};
