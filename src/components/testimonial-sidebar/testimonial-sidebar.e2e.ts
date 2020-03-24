import { newE2EPage } from '@stencil/core/testing';

describe('client-testimonial', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<client-testimonial></client-testimonial>');

    const element = await page.find('client-testimonial');
    expect(element).toHaveClass('hydrated');
  });
});
