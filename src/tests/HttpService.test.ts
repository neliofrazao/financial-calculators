import { HttpService, errorMessages } from '../app/utils';

const payload = {
  amount: 15000,
  installments: 3,
  mdr: 6,
};

describe('testing http service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should post method have been called once', async () => {
    jest.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(true);
    const url = 'hash-front-test.herokuapp.com/';
    await HttpService.post(url, payload);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://hash-front-test.herokuapp.com/', {
      'body': '{"amount":15000,"installments":3,"mdr":6}',
      'headers': { 'Content-type': 'application/json', 'credentials': 'include' },
      'method': 'POST',
      'mode': 'cors',
    });
  });

  test('should print offline message', async () => {
    jest.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    const url = 'hash-front-test.herokuapp.com/';
    await HttpService.post(url, payload);
    const getAlert = document.getElementById('alert');

    expect(fetch).toHaveBeenCalledTimes(0);
    expect(getAlert.innerHTML).toContain(errorMessages.NETWORK_ERROR);
  });

});
