/*
  SD
  Guía de estilo - Historias
  Flexbox (Caja flexible)
  José Esteva (josesteva@soft4pilot.net)
*/

import Flexbox from './index';

export default {
  component: Flexbox,
  title: 'Retículas/Flexbox',
  argTypes: {
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      description: 'Dirección de la caja flexible',
      control: 'select',
      options: ['column','row']
    },
    justify: {
      name: 'justify',
      type: { name: 'string', required: false },
      description: 'Justificación de los elementos',
      control: 'select',
      options: ['start','center','end','between','around','evenly']
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      description: 'Alineación de los elementos',
      control: 'select',
      options: ['start','center','end','stretch','baseline']
    },
    gap: {
      name: 'gap',
      type: { name: 'string', required: false },
      description: 'Distancia entre los elementos (sintaxis CSS)',
      control: 'select',
      options: ['huge','large','medium','small','tiny']
    },
    wrap: {
      name: 'wrap',
      type: { name: 'string', required: false },
      description: 'Envolver el contenido.',
      control: 'boolean'
    }
  },
  args: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    gap: 'small',
    wrap: false
  }
};

// export const Column = {
//   // component: Column,
//   name: 'Retículas/Column',
// };

// export const Row = {
//   component: Row,
//   name: 'Retículas/Row'
// };

export const Componente = {
  render: (args) => <Flexbox style={{width:'100%', height:'90vh', padding:'8px'}} {...args}>
      <div style={{width:'64px', height:'64px', background:'grey'}}></div>
      <div style={{width:'64px', height:'64px', background:'grey'}}></div>
      <div style={{width:'64px', height:'64px', background:'grey'}}></div>
    </Flexbox>
};
