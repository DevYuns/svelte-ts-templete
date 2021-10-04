import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/svelte';

import Temp from '../Temp.svelte';

describe('Temp', () => {
  describe('Layout', () => {
    it('has Sign up header', () => {
      render(Temp);
    });
  });
});
