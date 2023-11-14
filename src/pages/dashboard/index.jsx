import RecentPayments from '../../components/dashboardComponents/RecentPayments';
import Widget from '../../components/dashboardComponents/widget';
import './style.scss'

const Dashboard = () => {
  return (
    <div className='Dashboard-container'>
      <div className="business-dashbaord">
        <h1>Business Dashboard</h1>
        <div className="widgets-container">
          <Widget heading='USERS' value='1000' />
          <Widget heading='INCOME' value='$10000' />
          <Widget heading='SESSIONS' value='1000' />
        </div>
      </div>

      {/* recent payments */}
      <RecentPayments />
    </div>
  );
};

export default Dashboard;