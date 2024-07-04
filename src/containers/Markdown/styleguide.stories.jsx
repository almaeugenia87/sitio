/*
  SD
  Guía de estilo - Historias
  Markdown (Contenido dinámico)
  José Esteva (josesteva@soft4pilot.net)
*/

import Markdown from './index';

// import markdown from './styleguide.example.md';

const Code = `

  # Titulo
  ## Subtitulo

  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui ut
  beatae nam molestiae cum doloremque fugit nihil, vitae modi recusandae culpa
  odit facere eum vel reiciendis eius repellat, totam aperiam. Molestiae error
  voluptatibus et neque vel libero, harum nam quibusdam mollitia, sapiente rerum
  iste modi sit deserunt? Officiis, quaerat!

  ![](https://placehold.co/320x240?text=Imagen)

  <a href="#">Enlace</a>

`;

export default {
  component: Markdown,
  title: 'Retículas/Markdown'
};

export const Componente = {
  render: (args) => <Markdown>{ Code }</Markdown>
};
