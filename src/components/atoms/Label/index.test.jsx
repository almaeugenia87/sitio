// SD
// Componentes
// Label (Etiqueta) - Pruebas
// José Esteva <josesteva@soft4pilot.net>
// 

import { render } from '@testing-library/react';
import Label from './index';

test('Componente <Label role="h1"/>', () => {
  render(<Label>Etiqueta</Label>);
});
