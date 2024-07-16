/*
  SD
  Componentes
  Ribbon (Cinta) - Guía de estilo
  José Esteva (josesteva@soft4pilot.net)
*/

import Link from '../../molecules/Link';

import Ribbon from './index';

export default {
  component: Ribbon,
  title: 'Moléculas/Ribbon'
};

export const Componente = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/noVTMrxmP0sx8f9Ll0vNBQ/Reticulas?node-id=0%3A1",
    },
  },
  argTypes: {
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color del marco',
      control: 'select',
      options: ['accent','primary','secondary','neutral']
    }
  },
  args: {
    color: 'accent'
  },
  render: (args) =>
    <div style={{position:'relative',left:'0',top:'0',height:'50vh',width:'100%',background:'lightgrey',overflow:'hidden'}}>
      <Ribbon {...args}><Link size="medium" color="white" accent="bold">PROXIMAMENTE</Link></Ribbon>
    </div>
};
