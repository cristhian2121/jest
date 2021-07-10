import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call API and return data', () => {
    // Create mock to response
    fetch.mockResponseOnce(JSON.stringify({ data: '123' }));

    // Validate request to API
    return getData('https://google.com').then((response) => {
      expect(response.data).toEqual('123');
    });

    // expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
