import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Label, LabelList } from 'recharts';
import '../index.css';
import { statusChartColors, sectorChartColors } from '../Constants/index';
import add_button from '../Icons/add_button.png';

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

  let sector = {};
  target_companies.forEach(target => {
    sector[target.company_profile.sector] = (target.company_profile.sector in sector) ? sector[target.company_profile.sector] + 1 : 1;
  });

  let sectorChartData = Object.keys(sector).map(eachSector => ({ name: eachSector, value: sector[eachSector] }));

  return (
    <div>
      <div>
        <PieChart width={800} height={300}>
          <Pie data={statusChartData} fill='#8884d8' dataKey='value' innerRadius={10}>
            {
          	  statusChartData.map((entry, index) => <Cell key={index} fill={statusChartColors[index % statusChartColors.length]}/>)
            }
            <LabelList dataKey='name' position='outside' fill='#FF8042' fontSize={20} fontWeight='bold'/>
            {/* <Label value='Status' position='center' fill='#006064' fontWeight='bold'/> */}
          </Pie>
          <Tooltip/>
        </PieChart> 
      </div>
      <div>
        <PieChart width={800} height={300}>
          <Pie data={sectorChartData} fill='#4DB6AC' dataKey='value' innerRadius={80} outerRadius={120}>
            {
              sectorChartData.map((entry, index) => <Cell key={index} fill={sectorChartColors[index % sectorChartColors.length]}/>)
            }
            <Label value='Sector' position='center' fill='#FF8042' fontSize={20} fontWeight='bold'/>
            <LabelList dataKey='name' position='outside' fill='#FF8042' fontSize={20} fontWeight='bold'/>
          </Pie>
          <Tooltip/>
        </PieChart> 
      </div>
      <div>
        <Link to='/newtarget'>
          <img src={add_button} className='new-contact-icon' alt={add_button}/>
        </Link>
      </div>
      <div>
        {
          target_companies.map((target, i) => 
          <div key={i}>
            <Link to={`/target/${target.id}`} key={i}>
              <div className='target' key={i}>
                <div>{target.company_name}</div>
                <div>{target.company_profile.sector}</div>
                <div>{target.company_profile.address.split(',').map((addr, i) => <div key={i}>{addr}</div>)}</div>
              </div>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};
    
let mapStateToProps = ({ target_companies }, props) => ({ target_companies });

let HomePage = connect(mapStateToProps)(HomePageWrapper);

export default HomePage;