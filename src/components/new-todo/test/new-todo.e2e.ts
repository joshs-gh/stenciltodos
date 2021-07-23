import { newE2EPage } from '@stencil/core/testing';

describe('new-todo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-todo></new-todo>');

    const element = await page.find('new-todo');
    expect(element).toHaveClass('hydrated');
  });
});
