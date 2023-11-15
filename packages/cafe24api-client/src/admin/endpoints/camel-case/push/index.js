import register from '../../push/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrievePushNotificationDeliveryHistory =
    cls.prototype.retrievePushNotificationDeliveryHistory;
  cls.prototype.retrievePushNotificationDeliveryHistory = async function (
    input,
    options,
  ) {
    const response = await retrievePushNotificationDeliveryHistory.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAPushNotification = cls.prototype.createAPushNotification;
  cls.prototype.createAPushNotification = async function (input, options) {
    const response = await createAPushNotification.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAPushNotification = cls.prototype.updateAPushNotification;
  cls.prototype.updateAPushNotification = async function (input, options) {
    const response = await updateAPushNotification.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAPushNotification = cls.prototype.deleteAPushNotification;
  cls.prototype.deleteAPushNotification = async function (input, options) {
    const response = await deleteAPushNotification.call(
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
