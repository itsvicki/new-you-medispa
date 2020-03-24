import { newE2EPage } from '@stencil/core/testing';

describe('global-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<global-header></global-header>');

    const element = await page.find('global-header');
    expect(element).toHaveClass('hydrated');
  });
});
