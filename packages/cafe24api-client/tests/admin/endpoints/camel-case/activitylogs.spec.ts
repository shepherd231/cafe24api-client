import axios from 'axios';
import { MockAPICall } from '../mocks/api.mock';
import { Cafe24AdminAPIClient } from '../../../../src/client/index';
import Auth from '../../../../src/admin/endpoints/auth/index';
import ActivityLogs from '../../../../src/admin/endpoints/activitylogs/index';

// https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest
jest.mock('axios');

describe('ActivityLogs', () => {
  /**
   * @type {Cafe24AdminAPIClient}
   */
  let client;
  it('should have newly added methods', () => {
    Cafe24AdminAPIClient.use(Auth);
    Cafe24AdminAPIClient.use(ActivityLogs);

    client = new Cafe24AdminAPIClient({
      mallId: 'test',
      accessToken: 'test-access-token',
    });

    expect(typeof client.retrieveAListOfActionLogs).toEqual('function');
    expect(typeof client.retrieveAnActionLog).toEqual('function');
  });

  describe('retrieveAListOfActionLogs', () => {
    it('should return 200', async () => {
      // @ts-ignore
      axios.get.mockImplementationOnce(MockAPICall.retrieveAListOfActionLogs);
      const response = await client.retrieveAListOfActionLogs(
        {
          startDate: '2020-01-01T00:00:00+09:00',
          endDate: '2020-03-01T23:59:59+09:00',
        },
        { fields: ['processNo', 'mode', 'content'] },
      );
      expect(response.status).toEqual(200);
    });
  });

  describe('retrieveAnActionLog', () => {
    it('should return 200', async () => {
      // @ts-ignore
      axios.get.mockImplementationOnce(MockAPICall.retrieveAnActionLog);
      const response = await client.retrieveAnActionLog(
        {
          processNo: 130,
        },
        {
          fields: [
            'processNo',
            'type',
            'managerId',
            'managerType',
            'processDate',
            'content',
          ],
        },
      );
      expect(response.status).toEqual(200);
    });
  });
});
