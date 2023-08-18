import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const serviceRequestSubCategoryPOST = (
  Constants,
  { action },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useServiceRequestSubCategoryPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPServiceRequestSubCategoryPOST', args],
    () => serviceRequestSubCategoryPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPServiceRequestSubCategoryPOSTS']),
    }
  );
};

export const FetchServiceRequestSubCategoryPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useServiceRequestSubCategoryPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchServiceRequestSubCategory: refetch,
  });
};

export const aNNOUNCEMENTSPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'ANNOUNCEMENTS',
        method: 'POST',
        req: { action: 'ANNOUNCEMENTS' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useANNOUNCEMENTSPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPANNOUNCEMENTSPOST', args],
    () => aNNOUNCEMENTSPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPANNOUNCEMENTSPOSTS']),
    }
  );
};

export const FetchANNOUNCEMENTSPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useANNOUNCEMENTSPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchANNOUNCEMENTS: refetch });
};

export const aftersentOTPforgorpasswordPOST = (
  Constants,
  { accno, newPassword, otp, transid },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'forgotPassword',
        method: 'POST',
        req: {
          accno: accno,
          otp: otp,
          type: 'EMAIL',
          action: 'forgotPassword',
          transid: transid,
          newPassword: newPassword,
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useAftersentOTPforgorpasswordPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPAftersentOTPforgorpasswordPOST', args],
    () => aftersentOTPforgorpasswordPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries([
          'cISAPPAftersentOTPforgorpasswordPOSTS',
        ]),
    }
  );
};

export const FetchAftersentOTPforgorpasswordPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  newPassword,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useAftersentOTPforgorpasswordPOST(
    { accno, newPassword, otp, transid },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchAftersentOTPforgorpassword: refetch,
  });
};

export const bANNERSPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'BANNERS',
        method: 'POST',
        req: { action: 'BANNERS' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useBANNERSPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPBANNERSPOST', args],
    () => bANNERSPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPBANNERSPOSTS']),
    }
  );
};

export const FetchBANNERSPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useBANNERSPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchBANNERS: refetch });
};

export const billingHistoryPrepaidPOST = (
  Constants,
  { action },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: action,
        method: 'GET',
        auth: 'TOKEN',
        baseUrlName: '',
        environmentName: 'SPM_ADANI',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useBillingHistoryPrepaidPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPBillingHistoryPrepaidPOST', args],
    () => billingHistoryPrepaidPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPBillingHistoryPrepaidPOSTS']),
    }
  );
};

export const FetchBillingHistoryPrepaidPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useBillingHistoryPrepaidPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchBillingHistoryPrepaid: refetch,
  });
};

export const billingHistoryPOST = (Constants, { action }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useBillingHistoryPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPBillingHistoryPOST', args],
    () => billingHistoryPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPBillingHistoryPOSTS']),
    }
  );
};

export const FetchBillingHistoryPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useBillingHistoryPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchBillingHistory: refetch });
};

export const changePasswordPOST = (
  Constants,
  { accno, newPwd, oldPwd },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'ChangePassword',
        method: 'POST',
        req: {
          action: 'ChangePassword',
          newPwd: newPwd,
          accno: accno,
          oldPwd: oldPwd,
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useChangePasswordPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPChangePasswordPOST', args],
    () => changePasswordPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPChangePasswordPOSTS']),
    }
  );
};

export const FetchChangePasswordPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  newPwd,
  oldPwd,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useChangePasswordPOST(
    { accno, newPwd, oldPwd },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchChangePassword: refetch });
};

export const complaintCategoryPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTypeFocc/',
        method: 'GET',
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useComplaintCategoryPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPComplaintCategoryPOST', args],
    () => complaintCategoryPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPComplaintCategoryPOSTS']),
    }
  );
};

export const FetchComplaintCategoryPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useComplaintCategoryPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchComplaintCategory: refetch });
};

export const complaintSubCategoryPOST = (
  Constants,
  { action },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useComplaintSubCategoryPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPComplaintSubCategoryPOST', args],
    () => complaintSubCategoryPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPComplaintSubCategoryPOSTS']),
    }
  );
};

export const FetchComplaintSubCategoryPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useComplaintSubCategoryPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchComplaintSubCategory: refetch,
  });
};

export const complaintSavePOST = (
  Constants,
  { consumerNo, requestDetails1, requestnatureId1 },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTsave',
        method: 'POST',
        req: {
          requestnatureId1: requestnatureId1,
          consumerNo: consumerNo,
          requestDetails1: requestDetails1,
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useComplaintSavePOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPComplaintSavePOST', args],
    () => complaintSavePOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPComplaintSavePOSTS']),
    }
  );
};

export const FetchComplaintSavePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  consumerNo,
  requestDetails1,
  requestnatureId1,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useComplaintSavePOST(
    { consumerNo, requestDetails1, requestnatureId1 },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchComplaintSave: refetch });
};

export const deleteAccountPOST = (
  Constants,
  { accountNumber, consumerNumber },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'DeleteAccount',
        method: 'POST',
        req: {
          accountNumber: accountNumber,
          consumerNumber: consumerNumber,
          action: 'DeleteAccount',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useDeleteAccountPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPDeleteAccountPOST', args],
    () => deleteAccountPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPDeleteAccountPOSTS']),
    }
  );
};

export const FetchDeleteAccountPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accountNumber,
  consumerNumber,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useDeleteAccountPOST(
    { accountNumber, consumerNumber },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchDeleteAccount: refetch });
};

export const downloadPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'UPLOAD_FORMS',
        method: 'POST',
        req: { action: 'UPLOAD_FORMS' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useDownloadPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPDownloadPOST', args],
    () => downloadPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPDownloadPOSTS']),
    }
  );
};

export const FetchDownloadPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useDownloadPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchDownload: refetch });
};

export const energyTipsPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'ENERGYTIPS',
        method: 'POST',
        req: { action: 'ENERGYTIPS' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useEnergyTipsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPEnergyTipsPOST', args],
    () => energyTipsPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPEnergyTipsPOSTS']),
    }
  );
};

export const FetchEnergyTipsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useEnergyTipsPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchEnergyTips: refetch });
};

export const faqsPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'FAQ',
        method: 'POST',
        req: { action: 'FAQ' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useFaqsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPFaqsPOST', args],
    () => faqsPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPFaqsPOSTS']),
    }
  );
};

export const FetchFaqsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFaqsPOST({}, { refetchInterval, handlers: { onData, ...handlers } });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFaqs: refetch });
};

export const feedbackPOST = (
  Constants,
  { email, name, response, suggestion },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'saveFeedback',
        method: 'POST',
        req: {
          name: name,
          email: email,
          suggestion: suggestion,
          response: response,
          action: 'saveFeedback',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useFeedbackPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPFeedbackPOST', args],
    () => feedbackPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPFeedbackPOSTS']),
    }
  );
};

export const FetchFeedbackPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  name,
  response,
  suggestion,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFeedbackPOST(
    { email, name, response, suggestion },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFeedback: refetch });
};

export const forgotpasswordPOST = (Constants, { accno }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'forgotPassword',
        method: 'POST',
        req: { accno: accno, otp: '', type: 'EMAIL', action: 'forgotPassword' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useForgotpasswordPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPForgotpasswordPOST', args],
    () => forgotpasswordPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPForgotpasswordPOSTS']),
    }
  );
};

export const FetchForgotpasswordPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useForgotpasswordPOST(
    { accno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchForgotpassword: refetch });
};

export const guestRaiseTicketSendOTPPOST = (
  Constants,
  { accno },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'sendEmailOTP',
        method: 'POST',
        req: { action: 'sendEmailOTP', accno: accno },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useGuestRaiseTicketSendOTPPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPGuestRaiseTicketSendOTPPOST', args],
    () => guestRaiseTicketSendOTPPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPGuestRaiseTicketSendOTPPOSTS']),
    }
  );
};

export const FetchGuestRaiseTicketSendOTPPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGuestRaiseTicketSendOTPPOST(
    { accno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchGuestRaiseTicketSendOTP: refetch,
  });
};

export const guestRaiseTicketAfterSendOTPPOST = (
  Constants,
  { otp, transid },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'validateOTP',
        method: 'POST',
        req: { action: 'validateOTP', transid: transid, otp: otp },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useGuestRaiseTicketAfterSendOTPPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPGuestRaiseTicketAfterSendOTPPOST', args],
    () => guestRaiseTicketAfterSendOTPPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries([
          'cISAPPGuestRaiseTicketAfterSendOTPPOSTS',
        ]),
    }
  );
};

export const FetchGuestRaiseTicketAfterSendOTPPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGuestRaiseTicketAfterSendOTPPOST(
    { otp, transid },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchGuestRaiseTicketAfterSendOTP: refetch,
  });
};

export const languagePOST = (Constants, { action }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'LANGUAGE',
        method: 'POST',
        req: { action: action },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useLanguagePOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPLanguagePOST', args],
    () => languagePOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPLanguagePOSTS']),
    }
  );
};

export const FetchLanguagePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useLanguagePOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLanguage: refetch });
};

export const loadPatternPOST = (
  Constants,
  { accountno, days, mtrno },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'loadPattern',
        method: 'POST',
        req: {
          action: 'loadPattern',
          mtrno: mtrno,
          accountno: accountno,
          consType: 'PRE',
          contactedLoad: '5.00',
          loadUnit: 'kW',
          days: days,
          metering_mode: 'NORMAL',
        },
        consType: 'PRE',
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useLoadPatternPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPLoadPatternPOST', args],
    () => loadPatternPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPLoadPatternPOSTS']),
    }
  );
};

export const FetchLoadPatternPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accountno,
  days,
  mtrno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useLoadPatternPOST(
    { accountno, days, mtrno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLoadPattern: refetch });
};

export const loginPOST = (Constants, { accountno, pwd }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'Login',
        method: 'POST',
        req: { action: 'Login', accountno: accountno, pwd: pwd },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useLoginPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPLoginPOST', args],
    () => loginPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPLoginPOSTS']),
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accountno,
  pwd,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useLoginPOST(
    { accountno, pwd },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLogin: refetch });
};

export const loginWithOTPPOST = (Constants, { accno }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'LoginWithOTP',
        method: 'POST',
        req: { accno: accno, action: 'LoginWithOTP', otp: '' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useLoginWithOTPPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPLoginWithOTPPOST', args],
    () => loginWithOTPPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPLoginWithOTPPOSTS']),
    }
  );
};

export const FetchLoginWithOTPPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useLoginWithOTPPOST(
    { accno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLoginWithOTP: refetch });
};

export const manageAccountsPOST = (
  Constants,
  { accountNumber },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'getAddedAccountList',
        method: 'POST',
        req: { accountNumber: accountNumber, action: 'getAddedAccountList' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useManageAccountsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPManageAccountsPOST', args],
    () => manageAccountsPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPManageAccountsPOSTS']),
    }
  );
};

export const FetchManageAccountsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accountNumber,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useManageAccountsPOST(
    { accountNumber },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchManageAccounts: refetch });
};

export const notificationsPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'NOTIFICATIONS',
        method: 'POST',
        req: { action: 'NOTIFICATIONS' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useNotificationsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPNotificationsPOST', args],
    () => notificationsPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPNotificationsPOSTS']),
    }
  );
};

export const FetchNotificationsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useNotificationsPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNotifications: refetch });
};

export const oTPEmailUpdatePOST = (
  Constants,
  { accno, newEmail, oldEmail, otp, txid, userId },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'UpdateEmail',
        method: 'POST',
        req: {
          oldEmail: oldEmail,
          newEmail: newEmail,
          otp: otp,
          accno: accno,
          userId: userId,
          type: 'UPDATEEMAIL',
          action: 'UpdateEmail',
          txid: txid,
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useOTPEmailUpdatePOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPOTPEmailUpdatePOST', args],
    () => oTPEmailUpdatePOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPOTPEmailUpdatePOSTS']),
    }
  );
};

export const FetchOTPEmailUpdatePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  newEmail,
  oldEmail,
  otp,
  txid,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useOTPEmailUpdatePOST(
    { accno, newEmail, oldEmail, otp, txid, userId },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchOTPEmailUpdate: refetch });
};

export const oTPMobileUpdatePOST = (
  Constants,
  { accno, newMobile, oldMobile, otp, txid, userId },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'UpdateMobile',
        method: 'POST',
        req: {
          action: 'UpdateMobile',
          newMobile: newMobile,
          oldMobile: oldMobile,
          otp: otp,
          accno: accno,
          userId: userId,
          type: 'UPDATEMOBILE',
          txid: txid,
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useOTPMobileUpdatePOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPOTPMobileUpdatePOST', args],
    () => oTPMobileUpdatePOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPOTPMobileUpdatePOSTS']),
    }
  );
};

export const FetchOTPMobileUpdatePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  newMobile,
  oldMobile,
  otp,
  txid,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useOTPMobileUpdatePOST(
    { accno, newMobile, oldMobile, otp, txid, userId },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchOTPMobileUpdate: refetch });
};

export const payemntServicePOST = (
  Constants,
  {
    accno,
    amount,
    billid,
    consid,
    from,
    gateway,
    mobile,
    name,
    officeName,
    officeid,
    scno,
    ucode,
  },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'callPgRequest',
        method: 'POST',
        req: {
          action: 'callPgRequest',
          email: '',
          accno: accno,
          mobile: mobile,
          amount: amount,
          scno: scno,
          consid: consid,
          name: name,
          billid: billid,
          ucode: ucode,
          officeid: officeid,
          officeName: officeName,
          from: from,
          paymentType: 'POST',
          gateway: gateway,
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePayemntServicePOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPayemntServicePOST', args],
    () => payemntServicePOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPPayemntServicePOSTS']),
    }
  );
};

export const FetchPayemntServicePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  amount,
  billid,
  consid,
  from,
  gateway,
  mobile,
  name,
  officeName,
  officeid,
  scno,
  ucode,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePayemntServicePOST(
    {
      accno,
      amount,
      billid,
      consid,
      from,
      gateway,
      mobile,
      name,
      officeName,
      officeid,
      scno,
      ucode,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchPayemntService: refetch });
};

export const powerQualityCurrentPOST = (
  Constants,
  { accountno, days, mtrno },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'PQCURRENT',
        method: 'POST',
        req: {
          action: 'PQCURRENT',
          mtrno: mtrno,
          accountno: accountno,
          days: days,
        },
        consType: 'PRE',
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePowerQualityCurrentPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPowerQualityCurrentPOST', args],
    () => powerQualityCurrentPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPPowerQualityCurrentPOSTS']),
    }
  );
};

export const FetchPowerQualityCurrentPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accountno,
  days,
  mtrno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePowerQualityCurrentPOST(
    { accountno, days, mtrno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchPowerQualityCurrent: refetch,
  });
};

export const powerQualityPowerFactorPOST = (
  Constants,
  { accountno, days, mtrno },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'AVGPF',
        method: 'POST',
        req: {
          action: 'AVGPF',
          mtrno: mtrno,
          accountno: accountno,
          days: days,
        },
        consType: 'PRE',
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePowerQualityPowerFactorPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPowerQualityPowerFactorPOST', args],
    () => powerQualityPowerFactorPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPPowerQualityPowerFactorPOSTS']),
    }
  );
};

export const FetchPowerQualityPowerFactorPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accountno,
  days,
  mtrno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePowerQualityPowerFactorPOST(
    { accountno, days, mtrno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchPowerQualityPowerFactor: refetch,
  });
};

export const powerQualityVoltagePOST = (
  Constants,
  { accountno, days, mtrno },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'PQVoltage',
        method: 'POST',
        req: {
          action: 'PQVoltage',
          mtrno: mtrno,
          accountno: accountno,
          days: days,
        },
        consType: 'PRE',
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePowerQualityVoltagePOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPowerQualityVoltagePOST', args],
    () => powerQualityVoltagePOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPPowerQualityVoltagePOSTS']),
    }
  );
};

export const FetchPowerQualityVoltagePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accountno,
  days,
  mtrno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePowerQualityVoltagePOST(
    { accountno, days, mtrno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchPowerQualityVoltage: refetch,
  });
};

export const privacyPoliciesPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'PRIVACYPOLICIES',
        method: 'POST',
        req: { action: 'PRIVACYPOLICIES' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePrivacyPoliciesPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPrivacyPoliciesPOST', args],
    () => privacyPoliciesPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPPrivacyPoliciesPOSTS']),
    }
  );
};

export const FetchPrivacyPoliciesPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePrivacyPoliciesPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchPrivacyPolicies: refetch });
};

export const rechargeHistoryPrepaidPOST = (
  Constants,
  { action },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: action,
        method: 'GET',
        auth: 'TOKEN',
        baseUrlName: '',
        environmentName: 'SPM_ADANI',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useRechargeHistoryPrepaidPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPRechargeHistoryPrepaidPOST', args],
    () => rechargeHistoryPrepaidPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPRechargeHistoryPrepaidPOSTS']),
    }
  );
};

export const FetchRechargeHistoryPrepaidPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useRechargeHistoryPrepaidPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchRechargeHistoryPrepaid: refetch,
  });
};

export const registeredPOST = (
  Constants,
  { accno, email, mobilenumber, password },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'createWssUser',
        method: 'POST',
        req: {
          action: 'createWssUser',
          mobilenumber: mobilenumber,
          accno: accno,
          address: null,
          billgroup: null,
          caNumber: null,
          email: email,
          firstName: null,
          lastName: null,
          password: password,
          role: 'consumer',
          otp: '',
          type: 'REGISTRATION',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useRegisteredPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPRegisteredPOST', args],
    () => registeredPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPRegisteredPOSTS']),
    }
  );
};

export const FetchRegisteredPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  email,
  mobilenumber,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useRegisteredPOST(
    { accno, email, mobilenumber, password },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchRegistered: refetch });
};

export const serviceRequestSavePOST = (
  Constants,
  { requestDetails, requestnatureId, scNo },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTCommercialsave',
        method: 'POST',
        req: {
          requestnatureId: requestnatureId,
          scNo: scNo,
          requestDetails: requestDetails,
          newOwnerName: '',
          newOwnerFname: '',
          newOwnerphone: '',
          newOwnerEmail: '',
          newCat: '',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useServiceRequestSavePOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPServiceRequestSavePOST', args],
    () => serviceRequestSavePOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPServiceRequestSavePOSTS']),
    }
  );
};

export const FetchServiceRequestSavePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  requestDetails,
  requestnatureId,
  scNo,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useServiceRequestSavePOST(
    { requestDetails, requestnatureId, scNo },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchServiceRequestSave: refetch });
};

export const serviceRequestCategoryPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTypeCommercial/',
        method: 'GET',
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useServiceRequestCategoryPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPServiceRequestCategoryPOST', args],
    () => serviceRequestCategoryPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPServiceRequestCategoryPOSTS']),
    }
  );
};

export const FetchServiceRequestCategoryPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useServiceRequestCategoryPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchServiceRequestCategory: refetch,
  });
};

export const updateEmailPOST = (
  Constants,
  { accno, newEmail, oldEmail, userId },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'UpdateEmail',
        method: 'POST',
        req: {
          oldEmail: oldEmail,
          newEmail: newEmail,
          otp: '',
          accno: accno,
          userId: userId,
          type: 'UPDATEEMAIL',
          action: 'UpdateEmail',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useUpdateEmailPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPUpdateEmailPOST', args],
    () => updateEmailPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPUpdateEmailPOSTS']),
    }
  );
};

export const FetchUpdateEmailPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  newEmail,
  oldEmail,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useUpdateEmailPOST(
    { accno, newEmail, oldEmail, userId },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateEmail: refetch });
};

export const updateProfileMobileNumberPOST = (
  Constants,
  { accno, newMobile, oldMobile, userId },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'UpdateMobile',
        method: 'POST',
        req: {
          action: 'UpdateMobile',
          newMobile: newMobile,
          oldMobile: oldMobile,
          otp: '',
          accno: accno,
          userId: userId,
          type: 'UPDATEMOBILE',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useUpdateProfileMobileNumberPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPUpdateProfileMobileNumberPOST', args],
    () => updateProfileMobileNumberPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPUpdateProfileMobileNumberPOSTS']),
    }
  );
};

export const FetchUpdateProfileMobileNumberPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  newMobile,
  oldMobile,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useUpdateProfileMobileNumberPOST(
    { accno, newMobile, oldMobile, userId },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchUpdateProfileMobileNumber: refetch,
  });
};

export const viewBillDetailsPOST = (Constants, { action }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useViewBillDetailsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPViewBillDetailsPOST', args],
    () => viewBillDetailsPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPViewBillDetailsPOSTS']),
    }
  );
};

export const FetchViewBillDetailsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useViewBillDetailsPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchViewBillDetails: refetch });
};

export const addAccountConfirmOTPForNewScnoAddingPOST = (
  Constants,
  { existAcct, newAcct, otp, txid },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'WssAddAccount',
        method: 'POST',
        req: {
          newAcct: newAcct,
          existAcct: existAcct,
          otp: otp,
          txid: txid,
          type: 'EMAIL',
          action: 'WssAddAccount',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useAddAccountConfirmOTPForNewScnoAddingPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPAddAccountConfirmOTPForNewScnoAddingPOST', args],
    () => addAccountConfirmOTPForNewScnoAddingPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries([
          'cISAPPAddAccountConfirmOTPForNewScnoAddingPOSTS',
        ]),
    }
  );
};

export const FetchAddAccountConfirmOTPForNewScnoAddingPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  existAcct,
  newAcct,
  otp,
  txid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useAddAccountConfirmOTPForNewScnoAddingPOST(
    { existAcct, newAcct, otp, txid },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchAddAccountConfirmOTPForNewScnoAdding: refetch,
  });
};

export const addServiceConnectionAccountPOST = (
  Constants,
  { existAcct, newAcct },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'WssAddAccount',
        method: 'POST',
        req: {
          newAcct: newAcct,
          existAcct: existAcct,
          otp: '',
          type: 'EMAIL',
          action: 'WssAddAccount',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useAddServiceConnectionAccountPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPAddServiceConnectionAccountPOST', args],
    () => addServiceConnectionAccountPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries([
          'cISAPPAddServiceConnectionAccountPOSTS',
        ]),
    }
  );
};

export const FetchAddServiceConnectionAccountPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  existAcct,
  newAcct,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useAddServiceConnectionAccountPOST(
    { existAcct, newAcct },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchAddServiceConnectionAccount: refetch,
  });
};

export const confirmOTPscreenPOST = (
  Constants,
  { otp, transid },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'forgotPassword',
        method: 'POST',
        req: {
          accno: '341201210711',
          otp: otp,
          type: 'EMAIL',
          action: 'forgotPassword',
          transid: transid,
          newPassword: 'Test@1234444',
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useConfirmOTPscreenPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPConfirmOTPscreenPOST', args],
    () => confirmOTPscreenPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPConfirmOTPscreenPOSTS']),
    }
  );
};

export const FetchConfirmOTPscreenPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useConfirmOTPscreenPOST(
    { otp, transid },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchConfirmOTPscreen: refetch });
};

export const consumerDetailsPOST = (Constants, { action }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useConsumerDetailsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPConsumerDetailsPOST', args],
    () => consumerDetailsPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPConsumerDetailsPOSTS']),
    }
  );
};

export const FetchConsumerDetailsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useConsumerDetailsPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchConsumerDetails: refetch });
};

export const getticketdeatilsPOST = (Constants, { consId }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'getAllTickets',
        method: 'POST',
        req: { consId: consId, action: 'getAllTickets' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useGetticketdeatilsPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPGetticketdeatilsPOST', args],
    () => getticketdeatilsPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPGetticketdeatilsPOSTS']),
    }
  );
};

export const FetchGetticketdeatilsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  consId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetticketdeatilsPOST(
    { consId },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetticketdeatils: refetch });
};

export const getticketstatusPOST = (
  Constants,
  { ticketNumber },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'getTicketStatus',
        method: 'POST',
        req: { ticketNumber: ticketNumber, action: 'getTicketStatus' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useGetticketstatusPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPGetticketstatusPOST', args],
    () => getticketstatusPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPGetticketstatusPOSTS']),
    }
  );
};

export const FetchGetticketstatusPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  ticketNumber,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetticketstatusPOST(
    { ticketNumber },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetticketstatus: refetch });
};

export const loginConfirmOTPPOST = (
  Constants,
  { accno, otp, transid },
  handlers = {}
) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'LoginWithOTP',
        method: 'POST',
        req: {
          accno: accno,
          action: 'LoginWithOTP',
          otp: otp,
          transid: transid,
        },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useLoginConfirmOTPPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPLoginConfirmOTPPOST', args],
    () => loginConfirmOTPPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPLoginConfirmOTPPOSTS']),
    }
  );
};

export const FetchLoginConfirmOTPPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  accno,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useLoginConfirmOTPPOST(
    { accno, otp, transid },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLoginConfirmOTP: refetch });
};

export const paymentGatewayPOST = (Constants, _args, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'PAYMENT_CONFIG',
        method: 'POST',
        req: { action: 'PAYMENT_CONFIG' },
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePaymentGatewayPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPaymentGatewayPOST', args],
    () => paymentGatewayPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPPaymentGatewayPOSTS']),
    }
  );
};

export const FetchPaymentGatewayPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePaymentGatewayPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchPaymentGateway: refetch });
};

export const paymentHistoryPOST = (Constants, { action }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePaymentHistoryPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPaymentHistoryPOST', args],
    () => paymentHistoryPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['cISAPPPaymentHistoryPOSTS']),
    }
  );
};

export const FetchPaymentHistoryPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePaymentHistoryPOST(
    { action },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchPaymentHistory: refetch });
};

export const prepaidApiPOST = (Constants, { mtrno }, handlers = {}) =>
  fetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'ProfileBasicDetails',
        method: 'POST',
        req: { action: 'ProfileBasicDetails', mtrno: mtrno },
        consType: 'PRE',
        auth: 'NO',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const usePrepaidApiPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['cISAPPPrepaidApiPOST', args],
    () => prepaidApiPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['cISAPPPrepaidApiPOSTS']),
    }
  );
};

export const FetchPrepaidApiPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  mtrno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = usePrepaidApiPOST(
    { mtrno },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchPrepaidApi: refetch });
};
