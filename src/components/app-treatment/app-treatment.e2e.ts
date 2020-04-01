import { newE2EPage } from '@stencil/core/testing';

describe('app-treament', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-treament></app-treament>');

    const element = await page.find('app-treament');
    expect(element).toHaveClass('hydrated');
  });
});
