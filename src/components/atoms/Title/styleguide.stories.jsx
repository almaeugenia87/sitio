/*
  SD
  Guía de estilo
  Title (Titulo) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Title from './index';

export default {
  component: Title,
  title: 'Átomos/Title',
  argTypes: {
    role: {
      name: 'role',
      type: { name: 'string', required: true },
      description: 'Semántica del elemento',
      control: 'select',
      options: ['h1','h2','h3','h4','h5','h6']
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Tamaño del titulo',
      control: 'select',
      options: ['huge','large','medium','small','tiny']
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color del titulo',
      control: 'select',
      options: ['black','neutral','white']
    }
  }
};

export const Componente = {
  args: {
    role: 'h1',
    color: 'black',
    size: 'medium'
  },
  render: (args) => <Title {...args}>Titulo</Title>
};
