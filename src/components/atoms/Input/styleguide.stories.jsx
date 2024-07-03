/*
  SD
  Guía de estilo
  Input (Entrada de texto) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Input from './index';

export default {
  component: Input,
  title: 'Átomos/Input',
  argTypes: {
    type: {
      name: 'type',
      type: { name: 'string', required: true },
      description: 'Tipo de dato',
      control: 'select',
      options: ['color','date','email','number','password','search','tel','text','url']
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color de la caja de texto',
      control: 'select',
      options: ['black','primary','secondary','neutral']
    }
  }
};

export const Componente = {
  args: {
    color: 'primary',
    placeholder: 'Ingresar texto...',
    onChange: (e) => console.log(e.target.value)
  },
  render: (args) => <Input {...args}/>
};
