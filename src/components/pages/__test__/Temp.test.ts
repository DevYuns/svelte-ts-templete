import "@testing-library/jest-dom"

import {render, screen} from '@testing-library/svelte'

import Temp from '../Temp.svelte';

it('has sign up header', () => {
    render(Temp);
    const header = screen.getByRole('heading', {name: 'This is Temp'});
    expect(header).toBeInTheDocument();
})