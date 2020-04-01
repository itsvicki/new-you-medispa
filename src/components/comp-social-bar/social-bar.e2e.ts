import { newE2EPage } from '@stencil/core/testing';

describe('social-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<social-bar></social-bar>');

    const element = await page.find('social-bar');
    expect(element).toHaveClass('hydrated');
  });
});
