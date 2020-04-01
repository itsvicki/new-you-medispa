import { newE2EPage } from '@stencil/core/testing';

describe('nyms-global-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nyms-global-header></nyms-global-header>');

    const element = await page.find('nyms-global-header');
    expect(element).toHaveClass('hydrated');
  });
});
