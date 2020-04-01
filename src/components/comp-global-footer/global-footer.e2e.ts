import { newE2EPage } from '@stencil/core/testing';

describe('nyms-global-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nyms-global-footer></nyms-global-footer>');

    const element = await page.find('nyms-global-footer');
    expect(element).toHaveClass('hydrated');
  });
});
