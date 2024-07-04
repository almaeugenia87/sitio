/*
  SD
  Guía de estilo
  Checkbox (Casilla de verificación) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import Checkbox from './index';

export default {
  component: Checkbox,
  title: 'Átomos/Checkbox',
  argTypes: {
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color de la casilla de verificación',
      control: 'select',
      options: ['primary','secondary','neutral']
    }
  }
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?type=design&node-id=1201%3A1490&mode=design&t=LxSPC0XfJ5BIPT6C-1",
    }
  },
  args: {
    color: 'primary',
    disabled: false,
    // onChange: (e) => console.log(e.target.checked)
  },
  render: (args) => <Checkbox defaultChecked={true} {...args}>Etiqueta</Checkbox>
};
