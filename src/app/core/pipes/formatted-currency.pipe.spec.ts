import { FormattedCurrencyPipe } from './formatted-currency.pipe';

xdescribe('FormattedCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new FormattedCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
