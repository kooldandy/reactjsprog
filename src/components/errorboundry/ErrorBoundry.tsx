import React, { Fragment } from 'react';
export default function ErrorBoundry(props: any) {
  const OopsText = () => {
    return <h2>Oops something went wrong.... we are working to fix it.</h2>;
  };

  const isEveryThingOk = props.isEveryThingOk;
  return <Fragment>{isEveryThingOk ? props.children : <OopsText />}</Fragment>;
}
