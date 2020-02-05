import { Alert } from '../shared/Alert';
import { errorMessages } from './constants';

const BASE_URL = 'https';
export class HttpService {
  private static alertMessage = new Alert();

  public static async post(url: string, body: object): Promise<Response> {
    const getSlowRequest = HttpService.handleSlowRequest();
    if (!window.navigator.onLine) {
      this.alertMessage.info(errorMessages.NETWORK_ERROR);
    } else {
      getSlowRequest;
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
        clearInterval(getSlowRequest);
        HttpService.handleErrors(response);

        return response;
      } catch (error) {
        clearInterval(getSlowRequest);
        HttpService.handleStatusCodeMenssage(error.message);
      }
    }
  }

  private static handleSlowRequest() {
    const setTimeoutRequest = setTimeout(() => {
      this.alertMessage.info(errorMessages.SLOW_REQUEST);
    }, 3000);

    return setTimeoutRequest;
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
