/*
  SD
  Guía de estilo
  Button (Botón) - Historias
  José Esteva <josesteva@soft4pilot.net>
*/

import Button from './index';

import icon from '../../../assets/icons/command.svg?react';

export default {
  component: Button,
  title: 'Átomos/Button',
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'element', required: false },
      description: 'Icono que acompaña al texto',
      control: 'none'
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Tamaño del botón',
      control: 'select',
      options: ['large','medium']
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color del botón',
      control: 'select',
      options: ['accent','primary','secondary','neutral']
    }
  }
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?type=design&node-id=1523%3A899&mode=design&t=PRaGy5JSVzMeVxHL-1",
    }
  },
  args: {
    icon,
    size: 'medium',
    color: 'primary',
    children: 'Etiqueta'
  },
  render: (args) => <Button {...args}></Button>
};
