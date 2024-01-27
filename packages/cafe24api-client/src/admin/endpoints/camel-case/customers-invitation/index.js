import register from '../../customers-invitation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
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
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
