import React from 'react';
import { QuestionAnswers } from "sections/faq";
import cls from './FaqPage.module.css';

const FaqPage = () => {
    return (
        <main className={cls.main}>
            <QuestionAnswers/>
        </main>
    );
};

export default FaqPage;