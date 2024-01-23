export namespace MockAPICall {
  export const getAuthenticationCode = () =>
    Promise.resolve({
      status: 302,
      headers: {
        location: '{redirect_uri}?code={authorize_code}&state={state}',
      },
    });
  export const getAccessToken = () =>
    Promise.resolve({
      status: 200,
      data: {
        access_token: '21EZes0dGSfN..........',
        expires_at: '2021-03-01T15:50:00.000',
        refresh_token: 'xLlhWztQHBik............',
        refresh_token_expires_at: '2021-03-15T13:50:00.000',
        client_id: 'BrIfqEKoPxeE..........',
        mall_id: 'yourmall',
        user_id: 'test',
        scopes: [
          'mall.read_order',
          'mall.read_product',
          'mall.read_store',
          '...etc...',
        ],
        issued_at: '2021-03-01T13:50:00.000',
      },
    });
  export const getAccessTokenUsingRefreshToken = () =>
    Promise.resolve({
      status: 200,
      data: {
        access_token: '21EZes0dGSfN..........',
        expires_at: '2021-03-01T15:50:00.000',
        refresh_token: 'xLlhWztQHBik............',
        refresh_token_expires_at: '2021-03-15T13:50:00.000',
        client_id: 'BrIfqEKoPxeE..........',
        mall_id: 'yourmall',
        user_id: 'test',
        scopes: [
          'mall.read_order',
          'mall.read_product',
          'mall.read_store',
          '...etc...',
        ],
        issued_at: '2021-03-01T13:50:00.000',
      },
    });
}
