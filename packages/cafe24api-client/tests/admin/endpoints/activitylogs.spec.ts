import { Cafe24AdminAPIClient } from '../../../src/client/index';
import Auth from '../../../src/admin/endpoints/auth/index';
import ActivityLogs from '../../../src/admin/endpoints/activitylogs/index';
import { TEST_CLIENT_MALL_ID } from '../values';

describe('ActivityLogs', () => {
  /**
   * @type {Cafe24AdminAPIClient}
   */
  let client;
  it('should have newly added methods', () => {
    Cafe24AdminAPIClient.use(Auth);
    Cafe24AdminAPIClient.use(ActivityLogs);

    client = new Cafe24AdminAPIClient({
      mallId: TEST_CLIENT_MALL_ID,
      accessToken: 'test-access-token',
    });

    expect(typeof client.retrieveAListOfActionLogs).toEqual('function');
    expect(typeof client.retrieveAnActionLog).toEqual('function');
  });

  describe('retrieveAListOfActionLogs', () => {
    it('should return 200', async () => {
      const response = await client.retrieveAListOfActionLogs(
        {
          start_date: '2020-01-01T00:00:00+09:00',
          end_date: '2020-03-01T23:59:59+09:00',
        },
        { fields: ['process_no', 'mode', 'content'] },
      );
      expect(response.status).toEqual(200);
    });
  });

  describe('retrieveAnActionLog', () => {
    it('should return 200', async () => {
      const response = await client.retrieveAnActionLog(
        {
          process_no: 130,
        },
        {
          fields: [
            'process_no',
            'type',
            'manager_id',
            'manager_type',
            'process_date',
            'content',
          ],
        },
      );
      expect(response.status).toEqual(200);
    });
  });
});
