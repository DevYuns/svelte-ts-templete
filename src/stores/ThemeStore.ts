import {Themes, dark, light} from './../theme';

import {theme as _theme} from '../theme';
import {writable} from 'svelte/store';

export const themeStore = writable<Themes>(_theme[0]);

export function toggleTheme(): void {
  themeStore.update((value) => (value.type === 'light' ? dark : light));
}
