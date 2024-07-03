// SD
// Retículas
// Markdown (Contenido dinámico)
// José Esteva <josesteva@soft4pilot.net>

import { render } from '@testing-library/react';
import Markdown from './index';

test('Componente <Markdown/>', () => {
  render(<Markdown>{`# Titulo`}</Markdown>);
});
