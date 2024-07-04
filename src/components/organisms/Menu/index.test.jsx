// SD
// Pruebas
// Menu (Menú)

import { render } from '@testing-library/react';
import { Menu, Item } from './index';

test('Componente <Menu/>', () => {
  render(<Menu><Item/></Menu>);
});
