import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./payment.scss"

const Payment = () => {
  return (
    <div className="payment">
        <Sidebar/>
        <div className="paymentContainer">
        <Navbar/>
        This is payments
        </div>
    </div>
  )
}

export default Payment