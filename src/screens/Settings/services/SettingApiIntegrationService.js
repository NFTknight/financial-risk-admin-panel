import ApiService from '../../../services/api-service/ApiService';
import { SETTING_URL } from '../../../constants/UrlConstants';

const SettingApiIntegrationServices = {
  getApiIntegrationDetails: data =>
    ApiService.getData(SETTING_URL.API_INTEGRATION.GET_API_INTEGRATION, data),
  updateApiIntegrationDetails: data =>
    ApiService.putData(SETTING_URL.API_INTEGRATION.UPDATE_API_INTEGRATION, data),
  testApiIntegrationDetails: params =>
    ApiService.getData(SETTING_URL.API_INTEGRATION.TEST_API_INTEGRATION, { params }),
};
export default SettingApiIntegrationServices;
