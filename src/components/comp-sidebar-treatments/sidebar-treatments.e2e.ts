import { newE2EPage } from '@stencil/core/testing';

describe('nyms-sidebar-treatments', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nyms-sidebar-treatments></nyms-sidebar-treatments>');

    const element = await page.find('nyms-sidebar-treatments');
    expect(element).toHaveClass('hydrated');
  });
});
