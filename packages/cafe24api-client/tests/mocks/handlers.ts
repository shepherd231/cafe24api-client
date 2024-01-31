import { http, HttpResponse } from 'msw';
import { TEST_CLIENT_MALL_ID } from '../admin/values';

const url = `https://${TEST_CLIENT_MALL_ID}.cafe24api.com`;

export const handlers = [
  // Auth
  http.post(`${url}/api/v2/oauth/token`, () => {
    return HttpResponse.json(
      {
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
      { status: 200 },
    );
  }),

  // ActivityLogs
  http.get(`${url}/api/v2/admin/activitylogs`, () => {
    return HttpResponse.json({
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
    });
  }),
  http.get(`${url}/api/v2/admin/activitylogs/:process_no`, ({ params }) => {
    const { process_no } = params;

    return HttpResponse.json({
      activitylog: {
        process_no,
        type: 'product management > product management > product list',
        manager_id: 'sampleid',
        manager_type: 'representative operator',
        process_date: '2020-02-01T00:00:00+09:00',
        content: 'Edit product name',
      },
    });
  }),
];
