/*
  SD
  Guía de estilo
  Select (Lista de selección) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import { Select, Option } from './index';

export default {
  component: Select,
  title: 'Átomos/Select',
  argTypes: {
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color de la lista de selección',
      control: 'select',
      options: ['primary','secondary','neutral']
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      description: 'Texto de ayuda',
      control: 'text'
    }
  }
};


export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?type=design&node-id=1201%3A1351&mode=design&t=LxSPC0XfJ5BIPT6C-1",
    }
  },
  args: {
    placeholder: 'Seleccionar...',
    color: 'primary',
    onChange: (e) => console.log("Se seleccionó el valor " + e.target.value),
    disabled: false
  },
  render: (args) =>
    <Select {...args}>
      <Option value="1">Uno</Option>
      <Option value="2">Dos</Option>
      <Option value="3">Tres</Option>
      <Option value="4">Cuatro</Option>
      <Option value="5">Cinco</Option>
    </Select>
};

/*

# Select (Lista de selección)

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui ut
beatae nam molestiae cum doloremque fugit nihil, vitae modi recusandae culpa
odit facere eum vel reiciendis eius repellat, totam aperiam. Molestiae error
voluptatibus et neque vel libero, harum nam quibusdam mollitia, sapiente rerum
iste modi sit deserunt? Officiis, quaerat!

<Canvas>
  <Story
    name="Componente"
    parameters={{ design: { type: 'figma', url: 'https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?node-id=1201%3A1351&t=nMV6bj6Yli4ZrdOs-1' }}}
    argTypes={{
      color: {
        name: 'color',
        type: { name: 'string', required: false },
        description: 'Color de la lista de selección',
        control: 'select',
        options: ['primary','secondary','neutral']
      },
      placeholder: {
        name: 'placeholder',
        type: { name: 'string', required: false },
        description: 'Texto de ayuda',
        control: 'text'
      }
    }}
    args={{
      placeholder: 'Seleccionar...',
      color: 'neutral',
      onChange: (e) => console.log("Se seleccionó el valor " + e.target.value),
      disabled: false
    }}
  >
      {(args) =>
        <Select {...args}>
          <Option value="1">Uno</Option>
          <Option value="2">Dos</Option>
          <Option value="3">Tres</Option>
          <Option value="4">Cuatro</Option>
          <Option value="5">Cinco</Option>
        </Select>
      }
  </Story>
</Canvas>

<ArgsTable story='Componente' />
*/
