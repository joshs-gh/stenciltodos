import { newSpecPage } from '@stencil/core/testing';
import { NewTodo } from '../new-todo';

describe('new-todo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewTodo],
      html: `<new-todo></new-todo>`,
    });
    expect(page.root).toEqualHtml(`
      <new-todo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-todo>
    `);
  });
});
