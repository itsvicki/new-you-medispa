import { newE2EPage } from '@stencil/core/testing';

describe('aside-sector', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aside-sector></aside-sector>');

    const element = await page.find('aside-sector');
    expect(element).toHaveClass('hydrated');
  });
});
