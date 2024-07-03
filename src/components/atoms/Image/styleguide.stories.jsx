/*
  SD
  Guía de estilo
  Image (Imagen) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Image from './index';

export default {
  component: Image,
  title: 'Átomos/Image',
  argTypes: {
    src: {
      name: 'src',
      type: { name: 'string', required: true },
      description: 'Origen de la imagen',
      control: { disable: true }
    },
    fit: {
      name: 'fit',
      type: { name: 'string', required: false },
      description: 'Ajuste de la imagen',
      control: 'select',
      options: ['fill','contain','cover']
    },
    filter: {
      name: 'filter',
      type: { name: 'string', required: false },
      description: 'Filtro aplicado a la imagen',
      control: 'select',
      options: ['','blur','bright','contrast','grayscale','huerotate','invert','transparent','saturate','sepia']
    },
    alt: {
      name: 'alt',
      type: { name: 'string', required: false },
      description: 'Texto alternativo si no es encuentra la imagen',
      control: 'text'
    }
  }
};

export const Componente = {
  args: {
    src: 'https://picsum.photos/320/240',
    text: 'Imagen',
    fit: 'contain'
  },
  render: (args) => <Image {...args} style={{ height:'50vh' }}/>
};
