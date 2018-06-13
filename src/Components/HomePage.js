import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Label, LabelList } from 'recharts';
import '../index.css';
import { statusChartColors, sectorChartColors } from '../Constants/index';
import add_button from '../Icons/add-button1.png';
import Header from './Header';

let HomePageWrapper = ({ target_companies }) => {

  let researching = target_companies.filter(target => target.status === 'Researching');
  let pending = target_companies.filter(target => target.status === 'Pending Approval');
  let approved = target_companies.filter(target => target.status === 'Approved');
  let declined = target_companies.filter(target => target.status === 'Declined');
  
  const statusChartData = [
    {name: 'Researching', value: researching.length}, 
    {name: 'Pending Approval', value: pending.length},
    {name: 'Approved', value: approved.length},
    {name: 'Declined', value: declined.length}
  ];

  /* A new statusChartData to filter any objects that has value 0 so the status is not shown in the PieChart*/
  const filteredStatusChartData = statusChartData.filter(chartData => chartData.value >= 1);
  
  let sector = {};
  target_companies.forEach(target => {
    sector[target.company_profile.sector] = (target.company_profile.sector in sector) ? sector[target.company_profile.sector] + 1 : 1;
  });

  let sectorChartData = Object.keys(sector).map(eachSector => ({ name: eachSector, value: sector[eachSector] }));

  return (
    <div>
      <Header/>
      <div className='charts'>
        <div className='status-chart'>
          <PieChart width={800} height={300}>
            <Pie data={filteredStatusChartData} fill='#8884d8' dataKey='value' innerRadius={10}>
              {
                filteredStatusChartData.map((entry, index) => <Cell key={index} fill={statusChartColors[index % statusChartColors.length]}/>)
              }
              <LabelList dataKey='name' position='outside' fill='teal' fontSize={20} fontWeight='bold' font-family='Arial'/>
            </Pie>
            <Tooltip/>
          </PieChart> 
        </div>
        <div className='sector-chart'>
          <PieChart width={700} height={300}>
            <Pie data={sectorChartData} fill='#4DB6AC' dataKey='value' innerRadius={80} outerRadius={120}>
              {
                sectorChartData.map((entry, index) => <Cell key={index} fill={sectorChartColors[index % sectorChartColors.length]}/>)
              }
              <Label value='Sector' position='center' fill='teal' fontSize={20} fontWeight='bold' font-family='Arial'/>
              <LabelList dataKey='name' position='outside' fill='teal' fontSize={20} fontWeight='bold' font-family='Arial'/>
            </Pie>
            <Tooltip/>
          </PieChart> 
        </div>
      </div>
      <div className='targets'>
        {
          target_companies.map((target, i) => 
          <div className={target.status}  key={i}>
            <Link className='target-link' to={`/target/${target.id}`} key={i}>
              <div className='target' key={i}>
              <div className='logo-target-name'>
                <div className='target-img-div'><img className='target-img' src={target.logo} alt={target.logo}/></div>
                <div className={`${target.status}-name`}>{target.company_name}</div>
              </div>
                <div className={`${target.status}-sector`}>{target.company_profile.sector}</div>
                <div className={`${target.status}-addr`}>
                {
                  /* When creating a new target check if the target address undefined */
                  (target.company_profile.address !== undefined) ?
                  target.company_profile.address.split(',').map((addr, i) => <div key={i}>{addr}</div>) :
                  target.company_profile.address === ''
                }</div>
              </div>
            </Link>
          </div>)
        }
        <div>
          <Link to='/newtarget'>
            <img src={add_button} className='new-contact-icon' alt={add_button}/>
          </Link>
        </div>
      </div>
    </div>
  );
};
    
let mapStateToProps = ({ target_companies }, props) => ({ target_companies });

let HomePage = connect(mapStateToProps)(HomePageWrapper);

export default HomePage;