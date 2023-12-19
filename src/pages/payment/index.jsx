import "./style.scss"
import { useState, useEffect } from 'react';
import Pagination from '../../components/pagination';


const Payment = () => {
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
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    },
    {
      id: '12354',
      service: 'Group session',
      date: '24 May 2024',
      payment: '$1,000',
      status: 'Delivered'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 5; 
  const indexOfLastPayment = currentPage * pageLimit;
  const indexOfFirstPayment = indexOfLastPayment - pageLimit;
  const currentPayments = payments.slice(indexOfFirstPayment, indexOfLastPayment);

  // Handle page change
  const handlePageChange = ({ currentPage, totalPages }) => {
    if (currentPage >= 1 && currentPage <= totalPages) {
      setCurrentPage(currentPage);
    }
  };
  return (
    <div className="Payments-container">
      <div className="heading sticky">
        <h1>All Payments</h1>
        <div className="row">
          <div className="col"><h4>ID</h4></div>
          <div className="col"><h4>SERVICE</h4></div>
          <div className="col"><h4>DATE</h4></div>
          <div className="col"><h4>PAYMENT</h4></div>
          <div className="col"><h4>STATUS</h4></div>
        </div>
      </div>
      <div className='RecentPayments-container'>

        <div className="table">

          {payments.map((payment, i) => (
            <div className='row' key={i}>
              <div className='col'>{payment.id}</div>
              <div className='col'>{payment.service}</div>
              <div className='col'>{payment.date}</div>
              <div className='col'>{payment.payment}</div>
              <div className={`col ${payment.status === 'Cancelled' ? 'red' :
                payment.status === 'Delivered' ? 'green' :
                  payment.status === 'Pending' ? 'blue' : ''
                }`}>{payment.status}</div>
            </div>
          ))}
        </div>
        <Pagination
          totalRecords={payments.length}
          pageLimit={pageLimit}
          pageNeighbours={2}
          onPageChanged={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Payment