/*
  SD
  Guía de estilo
  Textarea (Área de texto) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Textarea from './index';

export default {
  component: Textarea,
  title: 'Átomos/Textarea',
  argTypes: {
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color del área de texto',
      control: 'select',
      options: ['black','primary','secondary','neutral']
    },
    border: {
      name: 'border',
      type: { name: 'bool', required: false },
      description: 'Mostrar el borde del área de texto',
      control: 'boolean'
    }
  }
};

export const Componente = {
  args: {
    color: 'primary',
    border: true,
    placeholder: 'Ingresar texto...',
    disabled: false
  },
  render: (args) => <Textarea {...args}/>
};
