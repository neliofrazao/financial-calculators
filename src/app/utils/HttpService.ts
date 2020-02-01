export class HttpService {
  public static async post(url: string, body: object): Promise<Response> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json',
        },
      });
      this.handleErrors(response);
      return response;
    } catch (error) {
      return error;
    }
  }

  private static handleErrors(response: { ok: boolean; statusText: string }): object {
    if (!response.ok) throw Error(response.statusText);

    return response;
  }
}
