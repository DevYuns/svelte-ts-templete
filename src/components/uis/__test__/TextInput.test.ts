import TextInput from '../TextInput.svelte';
import {render} from '@testing-library/svelte';

it('renders without crush', () => {
  const {container} = render(TextInput);
  const div = container.querySelector('div');

  expect(div).toBeTruthy();
});
