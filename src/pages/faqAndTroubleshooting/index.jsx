import './style.scss'
import 'rsuite/dist/rsuite.min.css';
import { IoMdSearch } from "react-icons/io";
import QnaList from '../../components/qnaList';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { HelpContext } from '../../context/HelpContext';

const FaqAndTroubleshooting = () => {

    return(
        <div className="fat-main">

            <QnaList />
        </div>
    )
}

export default FaqAndTroubleshooting