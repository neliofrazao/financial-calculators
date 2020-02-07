import { Alert } from '../shared/Alert';
import { errorMessages } from './constants';

const BASE_URL = 'https';
export class HttpService {
  private static alertMessage = new Alert();
  /**
   *
   *
   * @static
   * @param {string} url
   * @param {object} body
   * @returns {Promise<Response>}
   * @memberof HttpService
   */
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
        HttpService.handleErrors(response);
        return response;
      } catch (error) {
        HttpService.handleStatusCodeMenssage(error.message);
      } finally {
        clearInterval(getSlowRequest);
      }
    }
  }
  /**
   *
   *
   * @private
   * @static
   * @returns
   * @memberof HttpService
   */
  private static handleSlowRequest() {
    const setTimeoutRequest = setTimeout(() => {
      this.alertMessage.info(errorMessages.SLOW_REQUEST);
    }, 3000);

    return setTimeoutRequest;
  }
  /**
   *
   *
   * @private
   * @static
   * @param {Response} response
   * @returns {Response}
   * @memberof HttpService
   */
  private static handleErrors(response: Response): Response {
    const { ok, status } = response;
    if (!ok) throw Error(status.toString());

    return response;
  }
  /**
   *
   *
   * @private
   * @static
   * @param {string} statusCode
   * @memberof HttpService
   */
  private static async handleStatusCodeMenssage(statusCode: string) {
    const getStatusCode = await statusCode;
    if (getStatusCode === '408') this.alertMessage.warning(errorMessages.ERROR_TIMEOUT);
    else this.alertMessage.error(errorMessages.ERROR_DEFAULT);
  }
}
