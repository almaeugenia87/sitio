/*
  SD
  Retículas
  Guía de estilo - Box (Caja) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

/* NOTA: Sustituir la molécula <Link> por una etiqueta HTML <label>. */

import Box from './index';

import Link from '../../components/molecules/Link';

export default {
  component: Box,
  title: 'Retículas/Box',
  argTypes: {
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
      options: ['default','dark','light']
    }
  },
  args: {
    space: 'medium medium',
    color: 'neutral',
    hue: 'default'
  }
};

export const Componente = {
  render: (args) => <Box {...args} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Link size="medium" color={args.hue === 'light' ? 'black' : 'white'}>CONTENIDO</Link>
    </Box>
};
