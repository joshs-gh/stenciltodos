import { newE2EPage } from '@stencil/core/testing';

describe('todo-microapp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-microapp></todo-microapp>');

    const element = await page.find('todo-microapp');
    expect(element).toHaveClass('hydrated');
  });
});
