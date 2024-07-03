// SD
// Pruebas
// Search (Búsqueda)

import { render } from '@testing-library/react';
import Search from './index';

const actions = [
  {
    icon: 'info',
    label: 'Comando',
    color: 'neutral',
    action: () => {
      alert('Se ejecuta el comando 1');
    }
  }
];

it('Componente <Search/>', () => {
  render(<Search />);
});
