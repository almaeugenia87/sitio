/*
  SD
  Componentes
  Actions (Acciones) - Guía de estilo
  José Esteva (josesteva@soft4pilot.net)
*/

import { Actions, Command } from './index';

import Icon from '../../../assets/icons/command.svg?react';

export default {
  component: Actions,
  title: 'Organismos/Actions'
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uZxd7Me9GgGYD9bOfhpS9O/Componentes?type=design&node-id=1529%3A860&t=4dZ0bn0Ucnh2H8xx-1",
    },
  },
  argTypes: {
    open: {
      name: 'open',
      type: { name: 'bool', required: false },
      description: 'Mostrar los comandos',
      control: 'boolean'
    }
  },
  args: {
    open: false,
    onClick: () => { console.log("Se oprime el botón principal"); },
    style: { position:'fixed', right:'2em', bottom:'2em' }
  },
  render: (args) =>
    <Actions {...args}>
      <Command icon={Icon} onClick={(e) => { console.log("Se ejecuta comando 1"); e.stopPropagation(); }}/>
      <Command icon={Icon} onClick={(e) => { console.log("Se ejecuta comando 2"); e.stopPropagation(); }}/>
      <Command icon={Icon} onClick={(e) => { console.log("Se ejecuta comando 3"); e.stopPropagation(); }}/>
      <Command icon={Icon} onClick={(e) => { console.log("Se ejecuta comando 4"); e.stopPropagation(); }}/>
    </Actions>
};
