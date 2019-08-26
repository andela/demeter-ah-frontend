// import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';
import toast from '../../../components/Toast';


export const submitReportAction = body => async () => {
  try {
    const result = await axiosCall({
      path: '/api/v1/report', payload: body, method: 'post'
    });
    toast(result.message, 'success');
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const msg = response.data.message || response;
    /* istanbul ignore next */
    toast('something went wrong try again', 'error');
    throw msg;
  }
};
