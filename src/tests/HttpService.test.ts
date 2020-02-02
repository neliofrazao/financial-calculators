import { HttpService } from '../app/utils';
import { FetchMock } from 'jest-fetch-mock';

const fetchMock = fetch as FetchMock;

const payload = {
  amount: 15000,
  installments: 3,
  mdr: 6,
};

describe('testing http service', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });

  test('should show offline message', async () => {
    jest.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    const url = 'hash-front-test.herokuapp.com/';
    const alertMessage = 'Para utilizar o nosso sistema é necessário estar conectado a uma Rede';
    await HttpService.post(url, payload);
    const getAlert = document.getElementById('alert');

    expect(fetchMock).toHaveBeenCalledTimes(0);
    expect(getAlert.innerHTML).toContain(alertMessage);
  });

  test('should post method have been called once', async () => {
    jest.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(true);
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
