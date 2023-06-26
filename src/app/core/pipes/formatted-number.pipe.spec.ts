import { FormattedNumberPipe } from './formatted-number.pipe';

xdescribe('FormattedNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FormattedNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
