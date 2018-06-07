import React from 'react';

let TargetFinancialPerformance = ({ target }) => 
  <div className='tfp-main'>
    <div className='tfp-img-div'>
      <img className='tfp-img' src={target.financial_performance.financial_chart} alt={target.financial_performance.financial_chart}/>
    </div>
    <div className='tfp-data'>
      <div>
        REVENUE &nbsp;|&nbsp;
        {target.financial_performance.revenue}
      </div>
      <div>
        NET INCOME &nbsp;|&nbsp;
        {target.financial_performance.net_income}
      </div>
      <div>
        MARKET CAP &nbsp;|&nbsp;
        {target.financial_performance.market_cap}
      </div>
    </div>
  </div>

export default TargetFinancialPerformance;