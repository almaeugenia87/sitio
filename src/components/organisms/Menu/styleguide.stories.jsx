/*
  SD
  Componentes
  Menu (Menú) - Guía de estilo
  José Esteva (josesteva@soft4pilot.net)
*/

import { Menu, Item } from './index';

import Icon from '../../../assets/icons/command.svg?react';

const changeRoute = (e) => {
  console.log("Click: " + e.target.dataset.route);
}

export default {
  component: Menu,
  title: 'Organismos/Menu'
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?type=design&node-id=106%3A58&t=QTKRl6ukDFjn8yld-1",
    },
  },
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      description: 'Dirección del men los elementos',
      control: 'select',
      options: ['column','row']
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Tamaño del texto',
      control: 'select',
      options: ['large','medium']
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color del menú',
      control: 'select',
      options: ['black','neutral','white']
    },
    aside: {
      name: 'aside (Item)',
      type: { name: 'boolean', required: false },
      description: 'Se puede aplica a un elemento `<Item>` de un menú vertical para moverlo hasta abajo.'
    }
  },
  args: {
    direction: 'row',
    size: 'medium',
    color: 'black',
    aside: true
  },
  render: (args) =>
    <div style={{ height:'60vh' }}>
      <Menu {...args}>
        <Item icon={Icon} data-route="/1" onClick={changeRoute}>Etiqueta</Item>
        <Item icon={Icon} data-route="/2" onClick={changeRoute}>Etiqueta</Item>
        <Item icon={Icon} data-route="/3" onClick={changeRoute}>Etiqueta</Item>
        <Item icon={Icon} aside={args.aside} data-route="/4" onClick={changeRoute}>Etiqueta</Item>
      </Menu>
    </div>
};
