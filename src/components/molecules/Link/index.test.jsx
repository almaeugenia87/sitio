// SD
// Componentes
// Link (Etiqueta) - Pruebas
// José Esteva <josesteva@soft4pilot.net>
// 

import { render } from '@testing-library/react';
import Link from './index';

test('Componente <Link role="h1"/>', () => {
  render(<Link>Etiqueta</Link>);
});
