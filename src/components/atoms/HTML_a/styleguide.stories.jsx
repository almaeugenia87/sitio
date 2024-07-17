/*
  SD
  Guía de estilo
  HTML <a> (Enlace) - Historias
  José Esteva (josesteva@soft4pilot.net)
*/

import './style.css';

import Label from '../Label';

export default {
  title: 'Átomos/HTML a',
  argTypes: {
    className: {
      name: 'className',
      type: { name: 'string', required: false },
      description: 'Clases aplicadas al enlace',
      control: 'text'
    }
  }
};

export const Componente = {
  args: {
    className: 'primary'
  },
  render: (args) => <a {...args}><Label>Etiqueta</Label></a>
};
