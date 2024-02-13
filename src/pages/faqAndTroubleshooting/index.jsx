import './style.scss'
import 'rsuite/dist/rsuite.min.css';
import { IoMdSearch } from "react-icons/io";
import QnaList from '../../components/qnaList';

const FaqAndTroubleshooting = () => {
    return(
        <div className="fat-main">
            <div className='secondary-header'>
                <div className="search-fat">
                    <input type="text" placeholder='Search'/>
                    <IoMdSearch size={28}/>
                </div>
                <div className='ask-question-btn'>
                    <a>Ask a Question</a>
                </div>
            </div>
            <QnaList />
        </div>
    )
}

export default FaqAndTroubleshooting