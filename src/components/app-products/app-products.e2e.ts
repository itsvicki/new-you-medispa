import { newE2EPage } from '@stencil/core/testing';

describe('app-products', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-products></app-products>');

    const element = await page.find('app-products');
    expect(element).toHaveClass('hydrated');
  });
});
