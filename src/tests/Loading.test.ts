import { Loading } from '../app/shared/loading';
describe('test loading', () => {
  test('shoud output loading', () => {
    Loading.addLoading();
    const getLoading = document.getElementById('loading');

    expect(getLoading).toBeDefined();
  });

  test('shoud loading to be undefined', () => {
    Loading.removeLoading();
    const getLoading = document.getElementById('loading');

    expect(getLoading).toBeNull();
  });
});
