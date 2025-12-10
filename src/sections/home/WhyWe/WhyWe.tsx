import React from 'react';
import classes from './WhyWe.module.css';
import { Button, ButtonVariants, Text, TextVariants } from "shared/components";
import { Reason, ReasonProps } from "./components/Reason";

const whyWeConfig: Array<ReasonProps> = [
    { label: 'ЯКІСТЬ НАВЧАННЯ', details: [
            { title: 'Індивідуальний підхід', paragraph: 'Програму навчання складають на основі поточного рівня знань дитини, її психотипу та швидкості сприйняття.' },
            { title: 'Висококваліфіковані викладачі', paragraph: 'Під час прийому на роботу спеціалісти проходять суворий відбір: складають іспити та проходять навчання. Це дозволяє їм у подальшому підібрати методи та прийоми роботи так, щоб кожен учень досягнув поставленої навчальної мети.' },
            { title: 'Комплексна робота', paragraph: 'Ми вирішуємо навчальні труднощі дитини з усіх потрібних їй предметів.' },
            { title: 'Об’єктивність оцінювання знань', paragraph: 'Викладач визначає поточний рівень знань, спираючись лише на дані первинного моніторингу та результати бесіди з учнем. Сторонні фактори на оцінку не впливають.' },
        ]
    },
    { label: 'МОЖЛИВІСТЬ ВИБОРУ', details: [
            { title: 'Можливість відвідувати центр і навчатися онлайн', paragraph: 'Учень може обрати для себе комфортний формат занять: відвідувати центр особисто, займатися в online-режимі або придбати дистанційний курс.' },
        ]
    },
    { label: 'ПРИЄМНІ БОНУСИ', details: [
            { title: 'Система лояльності', paragraph: 'Діє система знижок для нових клієнтів, а також у разі, якщо ви радите нас своїм друзям та знайомим' },
        ]
    },
    { label: 'Системність у навчанні', details: [
            { title: 'Стабільний розклад', paragraph: 'Запорука успіху — це система, тому розклад вибудовується відповідно до зайнятості дитини; заняття проходять у той самий час; у разі пропуску заняття його можна відновити.' },
        ]
    }
];

export const WhyWe = () => {
    return (
        <section id="whyWe" className={classes.section}>
            <Text classNamesProps={classes.title} tag="h2" variant={TextVariants.TITLE_BOLD_REVERSED}>
                Чому саме ми?
            </Text>
            <div className={classes.reasonsContainer}>
                <div className={classes.biggest}>
                    <Reason label={whyWeConfig[0].label} details={whyWeConfig[0].details}/>
                    <Button classNamesProps={classes.button} type="button" variant={ButtonVariants.ACTION_SECOND} text="Переконайтесь самостійно"/>
                </div>
                { whyWeConfig.slice(1).map(({label, details}) =>
                    <Reason label={label.toUpperCase()} details={details} key={label}/>
                )}
            </div>
        </section>
    );
};

