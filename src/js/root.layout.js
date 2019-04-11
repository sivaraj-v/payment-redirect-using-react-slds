import React from 'react';
import Spinner from '@salesforce/design-system-react/components/spinner';
import { request } from './request';
import { payloadDecrytUrl } from './config';
class RedirectLoader extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    request({ url: payloadDecrytUrl, name: 'PAYLOAD_DECRYT', header: { bearer: 'xxxxxxx' }, payload: { name: 'some', job: 'some' } });
  }
  render() {
    return (
      <div className="loader-center">
        <Spinner variant={'brand'} size="large" assistiveText={{ label: 'large spinner' }} />
        <div className="slds-text-heading_large loader-text">Loading...</div>
      </div>
    );
  }
}
export default RedirectLoader;
