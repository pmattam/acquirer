import React from 'react';

let TargetFinancialPerformance = ({ target }) => 
  <div>
    <div>
      {target.financial_performance.revenue}
    </div>
    <div>
      {target.financial_performance.net_income}
    </div>
    <div>
      {target.financial_performance.market_cap}
    </div>
    <div>
      <img src={target.financial_performance.financial_chart} alt={target.financial_performance.financial_chart}/>
    </div>
  </div>

export default TargetFinancialPerformance;