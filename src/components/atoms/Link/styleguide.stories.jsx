/*
  SD
  Guía de estilo
  Link (Enlace) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Link from './index';

import Image from '../Image';
import Label from '../Label';

export default {
  component: Link,
  title: 'Átomos/Link',
  argTypes: {
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color del enlace',
      control: 'select',
      options: ['black','primary','secondary','neutral','white']
    },
    hue: {
      name: 'hue',
      type: { name: 'string', required: false },
      description: 'Matiz de color',
      control: 'select',
      options: ['default','dark','light']
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      description: 'Tipo de elemento (sólo para probar el componente)',
      control: 'select',
      options: ['text','icon','image']
    }
  }
};

export const Componente = {
  args: {
    color: 'neutral',
    hue: 'default',
    type: 'text'
  },
  render: (args) =>
    <Link {...args}>
      { args.type === 'text' && <Label>Etiqueta</Label> }
      { args.type === 'image' && <Image src="https://via.placeholder.com/360x240/8C9199/F6F7FA/?text=Soft4pilot.net" style={{width:'50%',height:'50%'}}/> }
    </Link>
};
