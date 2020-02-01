import { Alert } from '../shared/Alert';

export class HttpService {
  public static async post(url: string, body: object): Promise<Response> {
    const BASE_URL = 'https';
    const alertMessage = new Alert();
    try {
      const response = await fetch(`${BASE_URL}://${url}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json',
        },
      });
      HttpService.handleErrors(response);
      return response;
    } catch (error) {
      alertMessage.error('Ops! Sistema instável, tente novamente mais tarde!');
    }
  }

  private static handleErrors(response: { ok: boolean; statusText: string }): object {
    if (!response.ok) {
      console.log(response);
      throw Error(response.statusText);
    }

    return response;
  }
}
