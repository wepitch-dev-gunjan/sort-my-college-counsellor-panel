import { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const RecentPayments = () => {
  const [payments, setPayments] = useState([
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered' // Corrected the typo here
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Pending'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Pending'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Cancelled'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Pending'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Pending'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Pending'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Pending'
    },
  ]);

  return (
    <div className='RecentPayments-container'>
      <div className="payments-top">
        <h1>Recent Payments</h1>
        <Link to='/payment'>
          <div className="see-all-button">SEE ALL</div>
        </Link>
      </div>
      <div className='dashboard-table-parent' >
        <div className="table payments-table">
          <div className="row">
            <div className="col"><h4>ID</h4></div>
            <div className="col"><h4>SERVICE</h4></div>
            <div className="col"><h4>DATE</h4></div>
            <div className="col"><h4>PAYMENT</h4></div>
            <div className="col"><h4>STATUS</h4></div>
          </div>
          {payments.map((payment, i) => (
            <div className='row' key={i}>
              <div className='col'> <p>{payment.id}</p></div>
              <div className='col'><p>{payment.service}</p></div>
              <div className='col'><p>{payment.date}</p></div>
              <div className='col'><p>{payment.payment}</p></div>
              <div className={`col ${payment.status === 'Cancelled' ? 'red' :
                payment.status === 'Delivered' ? 'green' :
                  payment.status === 'Pending' ? 'blue' : ''
                }`}><p>{payment.status}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPayments;
