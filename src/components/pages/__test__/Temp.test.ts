import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/svelte';

import Temp from '../Temp.svelte';
import userEvent from '@testing-library/user-event';

describe('Temp', () => {
  describe('Layout', () => {
    beforeEach(() => {
      render(Temp);
    });

    it('has header', () => {
      const comp = screen.getByRole('heading', {name: 'This is test'});

      expect(comp).toBeInTheDocument();
    });

    it('has username input', () => {
      const input = screen.getByLabelText('username');

      expect(input).toBeInTheDocument();
    });

    it('has email input', () => {
      const input = screen.getByLabelText('email');

      expect(input).toBeInTheDocument();
    });

    it('has password input', () => {
      const input = screen.getByLabelText('password');

      expect(input).toBeInTheDocument();
    });

    it('has password type for password input', () => {
      const input = screen.getByLabelText('password') as HTMLInputElement;

      expect(input.type).toBe('password');
    });

    it('has password confirm input', () => {
      const input = screen.getByLabelText('password confirm');

      expect(input).toBeInTheDocument();
    });

    it('has password type for password confirm input', () => {
      const input = screen.getByLabelText(
        'password confirm',
      ) as HTMLInputElement;

      expect(input.type).toBe('password');
    });

    it('has sign up button', () => {
      const button = screen.getByRole('button', {name: 'Sign up'});

      expect(button).toBeInTheDocument();
    });

    it('disables the button initially', () => {
      const button = screen.getByRole('button', {name: 'Sign up'});

      expect(button).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    beforeEach(() => {
      render(Temp);
    });

    it('enables the button when the password and password confirm fields have same value', async () => {
      const password = screen.getByLabelText('password');
      const passwordConfirm = screen.getByLabelText('password confirm');

      const button = screen.getByRole('button', {name: 'Sign up'});

      await userEvent.type(password, 'password', {delay: 100});
      await userEvent.type(passwordConfirm, 'password', {delay: 100});

      expect(button).not.toBeDisabled();
    });

    it('sends a request to a server after clicking the button', async () => {
      const username = screen.getByLabelText('username');
      const email = screen.getByLabelText('email');
      const password = screen.getByLabelText('password');
      const passwordConfirm = screen.getByLabelText('password confirm');

      const button = screen.getByRole('button', {name: 'Sign up'});

      await userEvent.type(username, 'dean', {delay: 10});
      await userEvent.type(email, 'test@email.com', {delay: 10});
      await userEvent.type(password, 'password', {delay: 10});
      await userEvent.type(passwordConfirm, 'password', {delay: 10});

      userEvent.click(button);
    });
  });
});
