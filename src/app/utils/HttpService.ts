import { Alert } from '../shared/Alert';
import { errorMessages } from './constants';

const BASE_URL = 'https';
export class HttpService {
  private static alertMessage = new Alert();

  public static async post(url: string, body: object): Promise<Response> {
    if (!window.navigator.onLine) {
      this.alertMessage.info(errorMessages.NETWORK_ERROR);
    } else {
      try {
        const response = await fetch(`${BASE_URL}://${url}`, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json',
            credentials: 'include',
          },
        });
        HttpService.handleErrors(response);

        return response;
      } catch (error) {
        HttpService.handleStatusCodeMenssage(error.message);
      }
    }
  }

  private static handleErrors(response: Response): Response {
    const { ok, status } = response;
    if (!ok) throw Error(status.toString());

    return response;
  }

  private static async handleStatusCodeMenssage(statusCode: string) {
    const getStatusCode = await statusCode;
    if (getStatusCode === '408') this.alertMessage.warning(errorMessages.ERROR_TIMEOUT);
    else this.alertMessage.error(errorMessages.ERROR_DEFAULT);
  }
}
