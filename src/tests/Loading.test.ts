import { Loading } from '../app/shared/Loading';
describe('test loading', () => {
  test('shoud output loading', () => {
    Loading.addLoading();
    const getLoading = document.getElementById('loading');

    expect(getLoading).toBeDefined();
  });

});
