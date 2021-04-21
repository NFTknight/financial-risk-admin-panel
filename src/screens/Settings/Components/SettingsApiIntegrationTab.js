import React, { useCallback, useEffect, useMemo, useState } from 'react';
import '../Settings.scss';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import Loader from '../../../common/Loader/Loader';
import {
  changeApiIntegrationDetails,
  getApiIntegration,
  updateApiIntegrationDetails,
} from '../redux/SettingAction';

const SettingsApiIntegrationTab = () => {
  const apiIntegrationDetails = useSelector(
    ({ settingReducer }) => settingReducer.apiIntegration.integration
  );
  const isLoading = useSelector(({ settingReducer }) => settingReducer.apiIntegration.isLoading);
  const dispatch = useDispatch();
  const [errorElementList, setErrorElementList] = useState([]);
  useEffect(() => {
    dispatch(getApiIntegration());
    setErrorElementList([]);
  }, []);
  const { equifax, illion, rss, abn } = useMemo(() => apiIntegrationDetails, [
    apiIntegrationDetails,
  ]);

  const settingsApiIntegrationRow = useMemo(
    () => [
      {
        title: 'Equifax',
        name: 'equifax',
        className: 'equifax-row-container',
        inputs: [
          {
            title: 'User name',
            name: 'username',
            placeholder: 'Enter user name',
            value: equifax?.username,
          },
          {
            title: 'Password',
            name: 'password',
            placeholder: 'Enter password',
            value: equifax?.password,
          },
        ],
      },
      {
        title: 'Illion',
        name: 'illion',
        inputs: [
          {
            title: 'User Id',
            name: 'userId',
            placeholder: 'Enter user ID',
            value: illion?.userId,
          },
          {
            title: 'Subscriber ID',
            name: 'subscriberId',
            placeholder: 'Enter subscriber ID',
            value: illion?.subscriberId,
          },
          {
            title: 'Password',
            name: 'password',
            placeholder: 'Enter password',
            value: illion?.password,
          },
        ],
      },
      {
        title: 'Really Simple Systems',
        name: 'rss',
        inputs: [
          {
            title: 'Access Token',
            name: 'accessToken',
            placeholder: 'Enter access token',
            type: 'textarea',
            value: rss?.accessToken,
          },
        ],
      },
      {
        title: 'Australian Business Register',
        name: 'abn',
        inputs: [
          {
            title: 'GUID',
            name: 'guid',
            placeholder: 'Enter GUID',
            value: abn?.guid,
            className: 'abn-guid-input',
          },
        ],
      },
    ],
    [apiIntegrationDetails]
  );

  const [isEditItemIndex, setIsEditItemIndex] = useState(null);
  const onEditItemIndex = useCallback(
    i => {
      if (errorElementList.length <= 0) setIsEditItemIndex(i);
    },
    [setIsEditItemIndex, errorElementList]
  );

  const onInputValueChange = useCallback((row, e) => {
    const { name, value } = e.target;
    const apiName = row.name;
    dispatch(changeApiIntegrationDetails({ name, value, apiName }));
  }, []);

  const onSaveItem = useCallback(
    async row => {
      let checkCondition = false;
      let tempArray = [];

      row.inputs.forEach((input, i) => {
        if (input.value.toString().trim().length === 0) {
          tempArray = tempArray.concat([i]);
          checkCondition = true;
        }
      });
      setErrorElementList(tempArray);

      if (!checkCondition) {
        const apiName = row.name;
        await dispatch(updateApiIntegrationDetails({ apiName, ...apiIntegrationDetails[apiName] }));
        setErrorElementList([]);
        setIsEditItemIndex(-1);
      }
    },
    [apiIntegrationDetails, setErrorElementList, setIsEditItemIndex]
  );

  const onCancelEditItemIndex = useCallback(() => {
    if (errorElementList.length <= 0) setIsEditItemIndex(-1);
    dispatch(getApiIntegration());
  }, [setIsEditItemIndex, errorElementList]);

  return (
    <>
      <div className="common-white-container settings-api-integration-container">
        {!isLoading ? (
          settingsApiIntegrationRow.map((row, index) => (
            <div className="settings-row">
              <div>
                <div className="title">{row.title}</div>
                <div className={`settings-input-container ${row?.className}`}>
                  {row.inputs.map((input, inputIndex) => (
                    <>
                      <span
                        className="settings-row-input-title"
                        style={{ alignSelf: input.type === 'textarea' && 'baseline' }}
                      >
                        {input.title}
                      </span>
                      <div
                        className={`${
                          (input?.name === 'accessToken' || input.name === 'guid') &&
                          'rss-access-token'
                        }`}
                      >
                        {/* eslint-disable-next-line no-nested-ternary */}
                        {input?.type !== 'textarea' ? (
                          <Input
                            type="text"
                            placeholder={input.placeholder}
                            name={input.name}
                            value={input.value}
                            testValue={input.value}
                            onChange={e => onInputValueChange(row, e)}
                            disabled={index !== isEditItemIndex}
                            borderClass={`${input?.className} ${
                              index !== isEditItemIndex ? 'disabled-control' : ''
                            }`}
                          />
                        ) : index === isEditItemIndex ? (
                          <textarea
                            rows={8}
                            name={input.name}
                            onChange={e => onInputValueChange(row, e)}
                            placeholder={input.placeholder}
                            value={input.value}
                          />
                        ) : (
                          <div className="rss-access-token">{input.value}</div>
                        )}{' '}
                        {index === isEditItemIndex && errorElementList.includes(inputIndex) && (
                          <div className="settings-no-value-error">Please enter {input.title}.</div>
                        )}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              {index !== isEditItemIndex ? (
                <Button
                  buttonType="primary"
                  title="Edit"
                  name={row.name}
                  onClick={() => onEditItemIndex(index)}
                />
              ) : (
                <div className="buttons-row">
                  <Button
                    buttonType="primary"
                    title="Save"
                    onClick={() => onSaveItem(row, index)}
                  />
                  <Button
                    buttonType="danger"
                    title="Cancel"
                    onClick={() => onCancelEditItemIndex(row, index)}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default SettingsApiIntegrationTab;
