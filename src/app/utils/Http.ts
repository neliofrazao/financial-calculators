export class Http {
  public static async post(url: RequestInfo): Promise<Response> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ amount: 15000, installments: 3, mdr: 6 }),
        headers: {
          'Content-type': 'application/json',
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
