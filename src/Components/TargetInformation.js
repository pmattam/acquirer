import React from 'react';
import { connect } from 'react-redux';
import TargetNavbar from './TargetNavbar';

let TargetInformationWrapper = ({ target_companies, props }) => {
  console.log('tc', target_companies);
  console.log('props', props);
  return (
    <div>
    {/* <TargetNavbar
      id={props.match.params.id}
    /> */}
    </div>
  )
};
  

let mapStateToProps = ({ target_companies }, props) => ({ target_companies, props });

let TargetInformation = connect(mapStateToProps)(TargetInformationWrapper);

export default TargetInformation;