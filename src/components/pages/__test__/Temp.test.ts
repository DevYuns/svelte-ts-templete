import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/svelte';

import Temp from '../Temp.svelte';
import userEvent from '@testing-library/user-event';

describe('Temp', () => {
  describe('Layout', () => {
    it('has header', () => {
      render(Temp);
      const comp = screen.getByRole('heading', {name: 'This is test'});

      expect(comp).toBeInTheDocument();
    });

    it('has username input', () => {
      render(Temp);
      const input = screen.getByLabelText('username');

      expect(input).toBeInTheDocument();
    });

    it('has email input', () => {
      render(Temp);
      const input = screen.getByLabelText('email');

      expect(input).toBeInTheDocument();
    });

    it('has password input', () => {
      render(Temp);
      const input = screen.getByLabelText('password');

      expect(input).toBeInTheDocument();
    });

    it('has password type for password input', () => {
      render(Temp);
      const input = screen.getByLabelText('password') as HTMLInputElement;

      expect(input.type).toBe('password');
    });

    it('has password confirm input', () => {
      render(Temp);
      const input = screen.getByLabelText('password confirm');

      expect(input).toBeInTheDocument();
    });

    it('has password type for password confirm input', () => {
      render(Temp);
      const input = screen.getByLabelText(
        'password confirm',
      ) as HTMLInputElement;

      expect(input.type).toBe('password');
    });

    it('has sign up button', () => {
      render(Temp);
      const button = screen.getByRole('button', {name: 'Sign up'});

      expect(button).toBeInTheDocument();
    });

    it('disables the button initially', () => {
      render(Temp);
      const button = screen.getByRole('button', {name: 'Sign up'});

      expect(button).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('enables the button when the password and password confirm fields have same value', async () => {
      render(Temp);
      const password = screen.getByLabelText('password');
      const passwordConfirm = screen.getByLabelText('password confirm');

      const button = screen.getByRole('button', {name: 'Sign up'});

      await userEvent.type(password, 'password', {delay: 100});
      await userEvent.type(passwordConfirm, 'password', {delay: 100});

      expect(button).not.toBeDisabled();
    });
  });
});
