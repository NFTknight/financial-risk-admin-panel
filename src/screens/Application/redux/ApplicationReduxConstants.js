export const APPLICATION_REDUX_CONSTANTS = {
  APPLICATION_LIST_SUCCESS: 'APPLICATION_LIST_SUCCESS',
  APPLICATION_DETAILS: 'APPLICATION_DETAILS',
  UPDATE_APPLICATION_DETAILS_ON_BACK_TO_COMPANY_STEP:
    'UPDATE_APPLICATION_DETAILS_ON_BACK_TO_COMPANY_STEP',
  RESET_APPLICATION_LIST_PAGINATION_DATA: 'RESET_APPLICATION_LIST_PAGINATION_DATA',
  RESET_APPLICATION_LIST_DATA: 'RESET_APPLICATION_LIST_DATA',

  EDIT_APPLICATION: {
    APPLICATION_COMPANY_EDIT_APPLICATION_CHANGE_FIELD_VALUE:
      'APPLICATION_COMPANY_EDIT_APPLICATION_CHANGE_FIELD_VALUE',
    APPLICATION_COMPANY_EDIT_APPLICATION_UPDATE_ALL_DATA:
      'APPLICATION_COMPANY_EDIT_APPLICATION_UPDATE_ALL_DATA',
    APPLICATION_COMPANY_EDIT_APPLICATION_UPDATE_FIELD:
      'APPLICATION_COMPANY_EDIT_APPLICATION_UPDATE_FIELD',
    APPLICATION_COMPANY_EDIT_APPLICATION_RESET_DATA:
      'APPLICATION_COMPANY_EDIT_APPLICATION_RESET_DATA',
  },

  COMPANY: {
    APPLICATION_COMPANY_DROP_DOWN_DATA: 'APPLICATION_COMPANY_DROP_DOWN_DATA',
    APPLICATION_SEARCH_DROP_DOWN_DATA: 'APPLICATION_SEARCH_DROP_DOWN_DATA',
    APPLICATION_COMPANY_ENTITY_TYPE_DATA: 'APPLICATION_COMPANY_ENTITY_TYPE_DATA',
    APPLICATION_COMPANY_WIPE_OUT_DATA_IF_EXIST: 'APPLICATION_COMPANY_WIPE_OUT_DATA_IF_EXIST',
    APPLICATION_COMPANY_WIPE_OUT_OLD_DATA_ON_SUCCESS:
      'APPLICATION_COMPANY_WIPE_OUT_OLD_DATA_ON_SUCCESS',
    WIPE_OUT_ENTITY_TABLE_DATA: 'WIPE_OUT_ENTITY_TABLE_DATA',
    ENTITY_TYPE_CHANGED: 'ENTITY_TYPE_CHANGED',
  },
  DOCUMENTS: {
    DOCUMENT_TYPE_LIST_DATA: 'DOCUMENT_TYPE_LIST_DATA',
    APPLICATION_DOCUMENT_GET_UPLOAD_DOCUMENT_DATA: 'APPLICATION_DOCUMENT_GET_UPLOAD_DOCUMENT_DATA',
    UPLOAD_DOCUMENT_DATA: 'UPLOAD_DOCUMENT_DATA',
  },

  PERSON: {
    ADD_APPLICATION_PERSON: 'ADD_APPLICATION_PERSON',
    REMOVE_APPLICATION_PERSON: 'REMOVE_APPLICATION_PERSON',
    EDIT_APPLICATION_PERSON: 'EDIT_APPLICATION_PERSON',
    CHANGE_APPLICATION_PERSON_TYPE: 'CHANGE_APPLICATION_PERSON_TYPE',
    PERSON_STEP_COMPANY_EDIT_APPLICATION_UPDATE_ALL_DATA:
      'PERSON_STEP_COMPANY_EDIT_APPLICATION_UPDATE_ALL_DATA',
  },

  VIEW_APPLICATION: {
    APPLICATION_DETAIL_REQUEST_ACTION: 'APPLICATION_DETAIL_REQUEST_ACTION',
    APPLICATION_DETAIL_SUCCESS_ACTION: 'APPLICATION_DETAIL_SUCCESS_ACTION',
    APPLICATION_DETAIL_FAIL_ACTION: 'APPLICATION_DETAIL_FAIL_ACTION',
    APPLICATION_STATUS_CHANGE_ACTION: 'APPLICATION_STATUS_CHANGE_ACTION',
    APPLICATION_TASK: {
      APPLICATION_TASK_LIST_ACTION: 'APPLICATION_TASK_LIST_ACTION',
      APPLICATION_TASK_ASSIGNEE_DROP_DOWN_DATA_ACTION:
        'APPLICATION_TASK_ASSIGNEE_DROP_DOWN_DATA_ACTION',
      APPLICATION_TASK_ENTITY_DROP_DOWN_DATA_ACTION:
        'APPLICATION_TASK_ENTITY_DROP_DOWN_DATA_ACTION',
      DEFAULT_APPLICATION_TASK_ENTITY_DROP_DOWN_DATA_ACTION:
        'DEFAULT_APPLICATION_TASK_ENTITY_DROP_DOWN_DATA_ACTION',
      APPLICATION_UPDATE_TASK_FIELD_STATUS: 'APPLICATION_UPDATE_TASK_FIELD_STATUS',
      APPLICATION_RESET_ADD_TASK_STATE_ACTION: 'APPLICATION_RESET_ADD_TASK_STATE_ACTION',
      // edit
      GET_APPLICATION_TASK_DETAILS_ACTION: 'GET_APPLICATION_TASK_DETAILS_ACTION',
    },
    APPLICATION_MODULES: {
      APPLICATION_MODULE_LIST_DATA: 'APPLICATION_MODULE_LIST_DATA',
      VIEW_APPLICATION_DOCUMENT_TYPE_LIST_DATA: 'VIEW_APPLICATION_DOCUMENT_TYPE_LIST_DATA',
      VIEW_APPLICATION_UPLOAD_DOCUMENT_DATA: 'VIEW_APPLICATION_UPLOAD_DOCUMENT_DATA',
    },
    APPLICATION_NOTES: {
      APPLICATION_NOTES_LIST_DATA: 'APPLICATION_NOTES_LIST_DATA',
    },
    APPLICATION_REPORTS: {
      APPLICATION_REPORTS_LIST_DATA: 'APPLICATION_REPORTS_LIST_DATA',
      FETCH_APPLICATION_REPORTS_LIST_DATA_FOR_FETCH:
        'FETCH_APPLICATION_REPORTS_LIST_DATA_FOR_FETCH',
    },
    APPLICATION_ALERTS: {
      FETCH_APPLICATION_ALERTS_LIST: 'FETCH_APPLICATION_ALERTS_LIST',
      GET_APPLICATION_ALERTS_DETAILS: 'GET_APPLICATION_ALERTS_DETAILS',
      CLEAR_APPLICATION_ALERTS_DETAILS: 'CLEAR_APPLICATION_ALERTS_DETAILS',
    },
  },

  IMPORT_APPLICATION: {
    GO_TO_NEXT_STEP: 'GO_TO_NEXT_STEP',
    SET_FILE: 'SET_FILE',
    DELETE_IMPORTED_FILE: 'DELETE_IMPORTED_FILE',
    UPDATE_DATA_ERROR: 'UPDATE_DATA_ERROR',
    UPDATE_DATA_ON_SUCCESS: 'UPDATE_DATA_ON_SUCCESS',
    RESET_STEPPER_DATA: 'RESET_STEPPER_DATA',
  },
};
export const APPLICATION_COLUMN_LIST_REDUX_CONSTANTS = {
  APPLICATION_COLUMN_LIST_ACTION: 'APPLICATION_COLUMN_LIST_ACTION',
  APPLICATION_DEFAULT_COLUMN_LIST_ACTION: 'APPLICATION_DEFAULT_COLUMN_LIST_ACTION',
  UPDATE_APPLICATION_COLUMN_LIST_ACTION: 'UPDATE_APPLICATION_COLUMN_LIST_ACTION',
};
export const APPLICATION_FILTER_LIST_REDUX_CONSTANTS = {
  APPLICATION_FILTER_LIST_ACTION: 'APPLICATION_FILTER_LIST_ACTION',
};
