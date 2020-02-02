import { HttpService } from '../app/utils';
import { FetchMock } from 'jest-fetch-mock';

const fetchMock = fetch as FetchMock;

const navigatorOnline = jest.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(true);
const payload = {
  amount: 15000,
  installments: 3,
  mdr: 6,
};

describe('testing http service', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should post method have been called once', async () => {
    navigatorOnline;
    const url = 'hash-front-test.herokuapp.com/';
    await HttpService.post(url, payload);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://hash-front-test.herokuapp.com/', {
      'body': '{"amount":15000,"installments":3,"mdr":6}',
      'headers': { 'Content-type': 'application/json', 'credentials': 'include' },
      'method': 'POST',
      'mode': 'cors',
    });
  });
});
