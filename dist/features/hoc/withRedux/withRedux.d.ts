import * as React from 'react';
declare const withRedux: <T extends any>(WrappedComponent: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | React.FC<any>, mapStateToProps?: any, mapDispatchToProps?: any, additionalHOCs?: any) => React.ComponentType<T>;
export default withRedux;
