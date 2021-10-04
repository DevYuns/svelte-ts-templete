import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/svelte';

import Temp from '../Temp.svelte';

describe('Temp', () => {
  describe('Layout', () => {
    it('has header', () => {
      render(Temp);
      const page = screen.getByRole('heading', {name: 'This is test'});

      expect(page).toBeInTheDocument();
    });
  });
});
