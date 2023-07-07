import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const serviceRequestSubCategoryPOSTStatusAndText = (
  Constants,
  { action }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const serviceRequestSubCategoryPOST = (Constants, { action }) =>
  serviceRequestSubCategoryPOSTStatusAndText(Constants, { action }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useServiceRequestSubCategoryPOST = ({ action }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchServiceRequestSubCategoryPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchServiceRequestSubCategory: refetch,
  });
};

export const aNNOUNCEMENTSPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const aNNOUNCEMENTSPOST = Constants =>
  aNNOUNCEMENTSPOSTStatusAndText(Constants).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useANNOUNCEMENTSPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'ANNOUNCEMENTS',
        method: 'POST',
        req: { action: 'ANNOUNCEMENTS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchANNOUNCEMENTSPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'ANNOUNCEMENTS',
        method: 'POST',
        req: { action: 'ANNOUNCEMENTS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchANNOUNCEMENTS: refetch });
};

export const aftersentOTPforgorpasswordPOSTStatusAndText = (
  Constants,
  { accno, newPassword, otp, transid }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const aftersentOTPforgorpasswordPOST = (
  Constants,
  { accno, newPassword, otp, transid }
) =>
  aftersentOTPforgorpasswordPOSTStatusAndText(Constants, {
    accno,
    newPassword,
    otp,
    transid,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useAftersentOTPforgorpasswordPOST = ({
  accno,
  newPassword,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchAftersentOTPforgorpasswordPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  accno,
  newPassword,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchAftersentOTPforgorpassword: refetch,
  });
};

export const bANNERSPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const bANNERSPOST = Constants =>
  bANNERSPOSTStatusAndText(Constants).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useBANNERSPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'BANNERS',
        method: 'POST',
        req: { action: 'BANNERS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchBANNERSPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'BANNERS',
        method: 'POST',
        req: { action: 'BANNERS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchBANNERS: refetch });
};

export const billingHistoryPOSTStatusAndText = (Constants, { action }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const billingHistoryPOST = (Constants, { action }) =>
  billingHistoryPOSTStatusAndText(Constants, { action }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useBillingHistoryPOST = ({ action }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchBillingHistoryPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchBillingHistory: refetch });
};

export const complaintCategoryPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const complaintCategoryPOST = Constants =>
  complaintCategoryPOSTStatusAndText(Constants).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useComplaintCategoryPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTypeFocc/',
        method: 'GET',
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchComplaintCategoryPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTypeFocc/',
        method: 'GET',
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchComplaintCategory: refetch });
};

export const complaintSubCategoryPOSTStatusAndText = (Constants, { action }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const complaintSubCategoryPOST = (Constants, { action }) =>
  complaintSubCategoryPOSTStatusAndText(Constants, { action }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useComplaintSubCategoryPOST = ({ action }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchComplaintSubCategoryPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchComplaintSubCategory: refetch,
  });
};

export const complaintSavePOSTStatusAndText = (
  Constants,
  { consumerNo, requestDetails1, requestnatureId1 }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const complaintSavePOST = (
  Constants,
  { consumerNo, requestDetails1, requestnatureId1 }
) =>
  complaintSavePOSTStatusAndText(Constants, {
    consumerNo,
    requestDetails1,
    requestnatureId1,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useComplaintSavePOST = ({
  consumerNo,
  requestDetails1,
  requestnatureId1,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchComplaintSavePOST = ({
  children,
  onData = () => {},
  refetchInterval,
  consumerNo,
  requestDetails1,
  requestnatureId1,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchComplaintSave: refetch });
};

export const downloadPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const downloadPOST = Constants =>
  downloadPOSTStatusAndText(Constants).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useDownloadPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'UPLOAD_FORMS',
        method: 'POST',
        req: { action: 'UPLOAD_FORMS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchDownloadPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'UPLOAD_FORMS',
        method: 'POST',
        req: { action: 'UPLOAD_FORMS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchDownload: refetch });
};

export const faqsPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const faqsPOST = Constants =>
  faqsPOSTStatusAndText(Constants).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useFaqsPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'FAQ',
        method: 'POST',
        req: { action: 'FAQ' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchFaqsPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'FAQ',
        method: 'POST',
        req: { action: 'FAQ' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFaqs: refetch });
};

export const feedbackPOSTStatusAndText = (
  Constants,
  { email, name, response, suggestion }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const feedbackPOST = (
  Constants,
  { email, name, response, suggestion }
) =>
  feedbackPOSTStatusAndText(Constants, {
    email,
    name,
    response,
    suggestion,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useFeedbackPOST = ({ email, name, response, suggestion }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchFeedbackPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  email,
  name,
  response,
  suggestion,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchFeedback: refetch });
};

export const forgotpasswordPOSTStatusAndText = (Constants, { accno }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const forgotpasswordPOST = (Constants, { accno }) =>
  forgotpasswordPOSTStatusAndText(Constants, { accno }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useForgotpasswordPOST = ({ accno }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'forgotPassword',
        method: 'POST',
        req: { accno: accno, otp: '', type: 'EMAIL', action: 'forgotPassword' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchForgotpasswordPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  accno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'forgotPassword',
        method: 'POST',
        req: { accno: accno, otp: '', type: 'EMAIL', action: 'forgotPassword' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchForgotpassword: refetch });
};

export const guestRaiseTicketSendOTPPOSTStatusAndText = (
  Constants,
  { accno }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const guestRaiseTicketSendOTPPOST = (Constants, { accno }) =>
  guestRaiseTicketSendOTPPOSTStatusAndText(Constants, { accno }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useGuestRaiseTicketSendOTPPOST = ({ accno }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'sendEmailOTP',
        method: 'POST',
        req: { action: 'sendEmailOTP', accno: accno },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchGuestRaiseTicketSendOTPPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  accno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'sendEmailOTP',
        method: 'POST',
        req: { action: 'sendEmailOTP', accno: accno },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGuestRaiseTicketSendOTP: refetch,
  });
};

export const guestRaiseTicketAfterSendOTPPOSTStatusAndText = (
  Constants,
  { otp, transid }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const guestRaiseTicketAfterSendOTPPOST = (Constants, { otp, transid }) =>
  guestRaiseTicketAfterSendOTPPOSTStatusAndText(Constants, {
    otp,
    transid,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useGuestRaiseTicketAfterSendOTPPOST = ({ otp, transid }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'validateOTP',
        method: 'POST',
        req: { action: 'validateOTP', transid: transid, otp: otp },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchGuestRaiseTicketAfterSendOTPPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'validateOTP',
        method: 'POST',
        req: { action: 'validateOTP', transid: transid, otp: otp },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGuestRaiseTicketAfterSendOTP: refetch,
  });
};

export const loginPOSTStatusAndText = (Constants, { accountno, pwd }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const loginPOST = (Constants, { accountno, pwd }) =>
  loginPOSTStatusAndText(Constants, { accountno, pwd }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useLoginPOST = ({ accountno, pwd }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'Login',
        method: 'POST',
        req: { action: 'Login', accountno: accountno, pwd: pwd },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  accountno,
  pwd,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'Login',
        method: 'POST',
        req: { action: 'Login', accountno: accountno, pwd: pwd },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLogin: refetch });
};

export const manageAccountsPOSTStatusAndText = (Constants, { accountNumber }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const manageAccountsPOST = (Constants, { accountNumber }) =>
  manageAccountsPOSTStatusAndText(Constants, { accountNumber }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useManageAccountsPOST = ({ accountNumber }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'getAddedAccountList',
        method: 'POST',
        req: { accountNumber: accountNumber, action: 'getAddedAccountList' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchManageAccountsPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  accountNumber,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'getAddedAccountList',
        method: 'POST',
        req: { accountNumber: accountNumber, action: 'getAddedAccountList' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchManageAccounts: refetch });
};

export const notificationsPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const notificationsPOST = Constants =>
  notificationsPOSTStatusAndText(Constants).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useNotificationsPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'NOTIFICATIONS',
        method: 'POST',
        req: { action: 'NOTIFICATIONS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchNotificationsPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'NOTIFICATIONS',
        method: 'POST',
        req: { action: 'NOTIFICATIONS' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchNotifications: refetch });
};

export const registeredPOSTStatusAndText = (
  Constants,
  { accno, email, mobilenumber, password }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const registeredPOST = (
  Constants,
  { accno, email, mobilenumber, password }
) =>
  registeredPOSTStatusAndText(Constants, {
    accno,
    email,
    mobilenumber,
    password,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useRegisteredPOST = ({ accno, email, mobilenumber, password }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchRegisteredPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  accno,
  email,
  mobilenumber,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchRegistered: refetch });
};

export const serviceRequestSavePOSTStatusAndText = (
  Constants,
  { requestDetails, requestnatureId, scNo }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const serviceRequestSavePOST = (
  Constants,
  { requestDetails, requestnatureId, scNo }
) =>
  serviceRequestSavePOSTStatusAndText(Constants, {
    requestDetails,
    requestnatureId,
    scNo,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useServiceRequestSavePOST = ({
  requestDetails,
  requestnatureId,
  scNo,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchServiceRequestSavePOST = ({
  children,
  onData = () => {},
  refetchInterval,
  requestDetails,
  requestnatureId,
  scNo,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchServiceRequestSave: refetch });
};

export const serviceRequestCategoryPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const serviceRequestCategoryPOST = Constants =>
  serviceRequestCategoryPOSTStatusAndText(Constants).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useServiceRequestCategoryPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTypeCommercial/',
        method: 'GET',
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchServiceRequestCategoryPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'csc/rest/RequestTypeCommercial/',
        method: 'GET',
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchServiceRequestCategory: refetch,
  });
};

export const viewBillDetailsPOSTStatusAndText = (Constants, { action }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const viewBillDetailsPOST = (Constants, { action }) =>
  viewBillDetailsPOSTStatusAndText(Constants, { action }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useViewBillDetailsPOST = ({ action }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchViewBillDetailsPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchViewBillDetails: refetch });
};

export const addAccountConfirmOTPForNewScnoAddingPOSTStatusAndText = (
  Constants,
  { existAcct, newAcct, otp, txid }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const addAccountConfirmOTPForNewScnoAddingPOST = (
  Constants,
  { existAcct, newAcct, otp, txid }
) =>
  addAccountConfirmOTPForNewScnoAddingPOSTStatusAndText(Constants, {
    existAcct,
    newAcct,
    otp,
    txid,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useAddAccountConfirmOTPForNewScnoAddingPOST = ({
  existAcct,
  newAcct,
  otp,
  txid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchAddAccountConfirmOTPForNewScnoAddingPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  existAcct,
  newAcct,
  otp,
  txid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchAddAccountConfirmOTPForNewScnoAdding: refetch,
  });
};

export const addServiceConnectionAccountPOSTStatusAndText = (
  Constants,
  { existAcct, newAcct }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const addServiceConnectionAccountPOST = (
  Constants,
  { existAcct, newAcct }
) =>
  addServiceConnectionAccountPOSTStatusAndText(Constants, {
    existAcct,
    newAcct,
  }).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useAddServiceConnectionAccountPOST = ({ existAcct, newAcct }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchAddServiceConnectionAccountPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  existAcct,
  newAcct,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchAddServiceConnectionAccount: refetch,
  });
};

export const confirmOTPscreenPOSTStatusAndText = (
  Constants,
  { otp, transid }
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const confirmOTPscreenPOST = (Constants, { otp, transid }) =>
  confirmOTPscreenPOSTStatusAndText(Constants, { otp, transid }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useConfirmOTPscreenPOST = ({ otp, transid }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchConfirmOTPscreenPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  otp,
  transid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
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
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchConfirmOTPscreen: refetch });
};

export const consumerDetailsPOSTStatusAndText = (Constants, { action }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const consumerDetailsPOST = (Constants, { action }) =>
  consumerDetailsPOSTStatusAndText(Constants, { action }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useConsumerDetailsPOST = ({ action }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchConsumerDetailsPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchConsumerDetails: refetch });
};

export const getticketdeatilsPOSTStatusAndText = (Constants, { consId }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const getticketdeatilsPOST = (Constants, { consId }) =>
  getticketdeatilsPOSTStatusAndText(Constants, { consId }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useGetticketdeatilsPOST = ({ consId }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'getAllTickets',
        method: 'POST',
        req: { consId: consId, action: 'getAllTickets' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchGetticketdeatilsPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  consId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'getAllTickets',
        method: 'POST',
        req: { consId: consId, action: 'getAllTickets' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetticketdeatils: refetch });
};

export const paymentGatewayPOSTStatusAndText = Constants =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const paymentGatewayPOST = Constants =>
  paymentGatewayPOSTStatusAndText(Constants).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const usePaymentGatewayPOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'PAYMENT_CONFIG',
        method: 'POST',
        req: { action: 'PAYMENT_CONFIG' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchPaymentGatewayPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({
        action: 'PAYMENT_CONFIG',
        method: 'POST',
        req: { action: 'PAYMENT_CONFIG' },
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPaymentGateway: refetch });
};

export const paymentHistoryPOSTStatusAndText = (Constants, { action }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const paymentHistoryPOST = (Constants, { action }) =>
  paymentHistoryPOSTStatusAndText(Constants, { action }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const usePaymentHistoryPOST = ({ action }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchPaymentHistoryPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  action,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service`,
    {
      body: JSON.stringify({ action: action, method: 'GET', auth: 'NO' }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPaymentHistory: refetch });
};

export const prepaidApiPOSTStatusAndText = (Constants, { mtrno }) =>
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
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const prepaidApiPOST = (Constants, { mtrno }) =>
  prepaidApiPOSTStatusAndText(Constants, { mtrno }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const usePrepaidApiPOST = ({ mtrno }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'ProfileBasicDetails',
        method: 'POST',
        req: { action: 'ProfileBasicDetails', mtrno: mtrno },
        consType: 'PRE',
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchPrepaidApiPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  mtrno,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.api.ExtIntegrationService/service.`,
    {
      body: JSON.stringify({
        action: 'ProfileBasicDetails',
        method: 'POST',
        req: { action: 'ProfileBasicDetails', mtrno: mtrno },
        consType: 'PRE',
        auth: 'NO',
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
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
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPrepaidApi: refetch });
};
