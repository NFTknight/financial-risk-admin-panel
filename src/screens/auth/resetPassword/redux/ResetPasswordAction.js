import AuthApiService from '../../services/AuthApiService';
import { errorNotification, successNotification } from '../../../../common/Toast';

export const resetPassword = async (token, password) => {
  try {
    const data = { token, password };
    const response = await AuthApiService.resetPassword(data);

    if (response.data.status === 'SUCCESS') {
      successNotification('Password changed successfully.');
    }
  } catch (e) {
    if (e.response.data.status === undefined) {
      errorNotification('It seems like server is down, Please try again later.');
    } else if (e.response.data.status === 'INTERNAL_SERVER_ERROR') {
      errorNotification('Internal server error');
    } else if (e.response.data.status === 'ERROR') {
      if (e.response.data.messageCode) {
        switch (e.response.data.messageCode) {
          case 'SAME_OLD_PASSWORD':
            errorNotification("You can't set set last used password");
            break;
          default:
            break;
        }
      } else {
        errorNotification('It seems like server is down, Please try again later.');
      }
    }
    throw Error();
  }
};
