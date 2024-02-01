import register from '../../customers-invitation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const sendAnInvitationToActivateAccount =
    cls.prototype.sendAnInvitationToActivateAccount;
  cls.prototype.sendAnInvitationToActivateAccount = async function (
    input,
    options,
  ) {
    const response = await sendAnInvitationToActivateAccount.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
