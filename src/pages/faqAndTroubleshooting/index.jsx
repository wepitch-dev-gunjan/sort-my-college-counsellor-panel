import './style.scss'
import 'rsuite/dist/rsuite.min.css';
import { IoMdSearch } from "react-icons/io";
import QnaList from '../../components/qnaList';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { HelpContext } from '../../context/HelpContext';

const FaqAndTroubleshooting = ({setAskQuestionDisable}) => {

    return(
        <div className="fat-main">

            <QnaList setAskQuestionDisable={setAskQuestionDisable} />
        </div>
    )
}

export default FaqAndTroubleshooting