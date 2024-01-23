export namespace ClientTestFixtures {
  export const data = { foo: 'bar' };
  export const fields = ['foo', 'bar'];
  export const options = {
    fields,
    headers: { 'Content-Type': 'application/json' },
  };
  export const response = { data };

  export const expectedUrl = 'https://test.cafe24api.com/test';
  export const expectedParams = {
    foo: 'bar',
    fields: 'foo,bar',
  };
  export const expectedBody = {
    shop_no: 1,
    fields: 'foo,bar',
    request: {
      foo: 'bar',
    },
  };
}
