/*
  SD
  Guía de estilo
  Label (Etiqueta) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Label from './index';

import icon from '../../../assets/icons/command.svg?react';

export default {
  component: Label,
  title: 'Átomos/Label',
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'string', required: true },
      description: 'Icono que acompaña a la etiqueta',
      control: 'none'
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Tamaño de la etiqueta',
      control: 'select',
      options: ['large','medium','small']
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color de la etiqueta',
      control: 'select',
      options: ['black','neutral','white']
    },
    bold: {
      name: 'bold',
      type: { name: 'string', required: false },
      description: 'Etiqueta gruesa',
      control: 'boolean'
    }
  }
};

export const Componente = {
  args: {
    icon,
    size: 'medium',
    color: 'black',
    bold: true
  },
  render: (args) => <Label {...args}>Etiqueta</Label>
};
