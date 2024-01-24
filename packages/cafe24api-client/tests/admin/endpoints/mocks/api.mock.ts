export namespace MockAPICall {
  // ActivityLogs
  export const retrieveAListOfActionLogs = () =>
    Promise.resolve({
      status: 200,
      data: {
        activitylogs: [
          {
            process_no: 130,
            mode: 'P',
            type: 'product management > product management > product list',
            content: 'Edit product name',
            process_date: '2020-02-01T00:00:00+09:00',
            manager_id: 'sampleid',
            manager_type: 'representative operator',
          },
          {
            process_no: 131,
            mode: 'P',
            type: 'product management > product management > product list',
            content: 'Edit product name',
            process_date: '2020-02-02T00:00:00+09:00',
            manager_id: 'sampleid',
            manager_type: 'representative operator',
          },
        ],
        links: [
          {
            rel: 'next',
            href: 'https://{mallid}.cafe24api.com/api/v2/admin/activitylogs?limit=10&offset=10',
          },
        ],
      },
    });

  export const retrieveAnActionLog = () =>
    Promise.resolve({
      status: 200,
      data: {
        activitylog: {
          process_no: 130,
          type: 'product management > product management > product list',
          manager_id: 'sampleid',
          manager_type: 'representative operator',
          process_date: '2020-02-01T00:00:00+09:00',
          content: 'Edit product name',
        },
      },
    });

  // Auth
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
