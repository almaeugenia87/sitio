// SD
// Componentes
// Actions (Acciones) - Pruebas
// José Esteva <josesteva@soft4pilot.net>

import { render } from '@testing-library/react';
import { Actions, Command } from './index';

test('Componente <Actions/>', () => {
  render(<Actions><Command></Command></Actions>);
});
