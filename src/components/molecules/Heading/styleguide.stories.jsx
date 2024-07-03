/*
  SD
  Componentes
  Heading (Encabezado de sección) - Guía de estilo
  José Esteva (josesteva@soft4pilot.net)
*/

import Heading from './index';

import Title from '../../atoms/Title';

export default {
  component: Heading,
  title: 'Moléculas/Heading'
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?node-id=1272%3A1380&t=h4xIggMVeUtPPhl9-1",
    },
  },
  argTypes: {
    justify: {
      name: 'justify',
      type: { name: 'string', required: false },
      description: 'Justificación de los elementos',
      control: 'select',
      options: ['start','center','end']
    },
    space: {
      name: 'space',
      type: { name: 'string', required: false },
      description: 'Espacio (huge, large, medium, small, tiny) entre el borde y el contenido. Si se indican dos valores el primero se utiliza como espacio vertical y el segundo como espacio horizontal.',
      control: 'text'
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color del marco',
      control: 'select',
      options: ['primary','secondary','neutral']
    },
    hue: {
      name: 'hue',
      type: { name: 'string', required: false },
      description: 'Matiz de color',
      control: 'select',
      options: ['none','dark','light']
    }
  },
  args: {
    justify: 'center',
    space: 'medium',
    color: 'primary',
    hue: 'none'
  },
  render: (args) =>
    <Heading {...args}>
      <Title size="medium" color={args.hue === 'light' ? 'black' : 'white'}>Titulo</Title>
    </Heading>
};
