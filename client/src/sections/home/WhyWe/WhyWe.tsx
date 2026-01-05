import React, { useContext } from 'react';
import classes from './WhyWe.module.css';
import { Button, ButtonVariants, Text, TextVariants } from "shared/components";
import { Reason, ReasonProps } from "./components/Reason";
import { Context } from "app/providers/ContextProvider";

const whyWeConfig: Array<ReasonProps> = [
    { label: 'ЯКІСТЬ НАВЧАННЯ', details: [
            { title: 'Індивідуальний підхід', paragraph: 'Програму навчання розробляємо на основі рівня знань студента, його особистих особливостей та швидкості засвоєння матеріалу.' },
            { title: 'Висококваліфіковані викладачі', paragraph: 'Наші фахівці проходять суворий відбір: складають іспити та проходять спеціальну підготовку. Це дозволяє їм підбирати методи та прийоми роботи так, щоб кожен учень досягнув поставленої мети.' },
            { title: 'Комплексний підхід', paragraph: 'Ми допомагаємо подолати навчальні труднощі, опрацьовуючи всі необхідні аспекти вивчення предмету.' },
            { title: 'Об’єктивність оцінювання', paragraph: 'Викладач визначає рівень знань, спираючись на дані первинного моніторингу та результати бесіди. Ми гарантуємо неупереджений підхід та прозорість оцінювання результатів.' },
        ]
    },
    { label: 'МОЖЛИВІСТЬ ВИБОРУ', details: [
            { title: 'Можливість відвідувати центр або навчатися онлайн', paragraph: 'Учень може обрати комфортний формат занять: відвідувати центр особисто або займатися в онлайн-форматі.' },
        ]
    },
    { label: 'ПРИЄМНІ БОНУСИ', details: [
            { title: 'Система лояльності', paragraph: 'У нас діє система знижок для нових клієнтів, а також за умови, якщо ви рекомендуєте нас своїм друзям та знайомим.' },
        ]
    },
    { label: 'СИСТЕМНІСТЬ У НАВЧАННІ', details: [
            { title: 'Стабільний розклад', paragraph: 'Запорука успіху — це системність, тому графік вибудовується відповідно до зайнятості дитини; заняття проходять в один і той самий час, а в разі пропуску урок можна відпрацювати.' },
        ]
    }
];

export const WhyWe = () => {
    const { changeModalVisibility } = useContext(Context);

    return (
        <section id="whyWe" className={classes.section}>
            <Text classNamesProps={classes.title} tag="h2" variant={TextVariants.TITLE_BOLD_REVERSED}>
                Чому саме ми?
            </Text>
            <div className={classes.reasonsContainer}>
                <div className={classes.biggest}>
                    <Reason label={whyWeConfig[0].label} details={whyWeConfig[0].details}/>
                    <Button onClick={() => changeModalVisibility(true)} classNamesProps={classes.button} type="button" variant={ButtonVariants.ACTION_SECOND} text="Переконайтесь самостійно"/>
                </div>
                { whyWeConfig.slice(1).map(({label, details}) =>
                    <Reason label={label.toUpperCase()} details={details} key={label}/>
                )}
            </div>
        </section>
    );
};

