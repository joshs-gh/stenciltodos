import { newSpecPage } from '@stencil/core/testing';
import { TodoMicroapp } from '../todo-microapp';

describe('todo-microapp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoMicroapp],
      html: `<todo-microapp></todo-microapp>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-microapp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-microapp>
    `);
  });
});
