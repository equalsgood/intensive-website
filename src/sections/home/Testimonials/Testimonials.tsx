import React, { useState } from 'react';
import cls from './Testimonials.module.css';
import { Button, ButtonVariants, Carousel, Text, TextColor, TextWeight } from "shared/components";
import { Testimonial, TestimonialProps } from "./components/Testimonial";
import author1 from 'shared/assets/images/testimonial-authors/testimonial-author-1.png';
import ChevronIcon from 'shared/assets/icons/chevron.svg';

const testimonialsConfig: Array<TestimonialProps> = [
    { author: 'Олена, мама Софії', img: author1, text: 'Дуже вдячна центру за якісні уроки англійської. Софія завжди повертається із занять натхнена, розповідає про нові слова й ігри, які допомагають краще запам’ятовувати матеріал. Найголовніше — у неї з’явилося щире бажання вчити мову.' },
    { author: 'Андрій, тато Марка', img: author1, text: 'Марко із задоволенням ходить на уроки англійської. Викладачі пояснюють просто й цікаво.' },
    { author: 'Світлана, мама Каті й Олега', img: author1, text: 'Діти швидко підтягнули лексику та граматику. Уроки веселі та результативні.' },
    { author: 'Тетяна, мама Владислава', img: author1, text: 'Завдяки заняттям Владислав упевнено відповідає на уроках англійської в школі. Помітний прогрес.' },
    { author: 'Ірина, мама Назарчика', img: author1, text: 'Син ходить на уроки з великим задоволенням. Назарчик помітно збільшив словниковий запас і краще розуміє англійську на слух. Викладач постійно мотивує й підтримує — це дуже цінно.' },
    { author: 'Михайло, тато Артема', img: author1, text: 'Центр став справжнім порятунком для нас. Артем мав труднощі з англійською в школі, але після кількох місяців занять ситуація кардинально змінилася. Педагоги уважні та мотивують на результат.' },
    { author: 'Людмила, мама Єви', img: author1, text: 'Єва з радістю вчить нові слова та фрази. Чудовий педагогічний підхід!' },
    { author: 'Руслан, тато Дарини', img: author1, text: 'Дарина завжди чекає на заняття, бо вони проходять у цікавому форматі — багато розмов, вправ і творчих завдань. Помітно, що викладач вкладає душу в роботу й уважно стежить за прогресом кожної дитини.' },
    { author: 'Катерина, мама Богдана', img: author1, text: 'Мій син довго не міг зацікавитися англійською, але після перших занять у центрі буквально “загорівся”. Дуже подобається, що викладачі працюють сучасними методами, орієнтуються на дитину й дають багато практики.' },
    { author: 'Василь, тато Андрійка', img: author1, text: 'За короткий час Андрійко підтягнув базову граматику. Дуже професійні викладачі.' },
    { author: 'Юрій, тато Лесі та Петра', img: author1, text: 'Діти із задоволенням вчать англійську й показують стабільний прогрес. Рекомендую!' },
    { author: 'Марина, мама Злати', img: author1, text: 'Злата відвідує уроки англійської вже кілька місяців і кожного разу повертається додому з новими знаннями. За цей час помітно покращилося читання, вимова та загальна впевненість у використанні мови. Рекомендую центр усім батькам.' },
];

export const Testimonials = () => {
    const [nextClicked, setNextClicked] = useState(0);
    const [prevClicked, setPrevClicked] = useState(0);
    return (
        <section className={cls.section}>
            <div className={cls.container}>
                <Button onClick={() => setPrevClicked(prev => prev + 1)} type="button" variant={ButtonVariants.SWITCH_TRANSPARENT} icon={<ChevronIcon/>} classNamesProps={cls.left} />
                <Button onClick={() => setNextClicked(prev => prev + 1)} type="button" variant={ButtonVariants.SWITCH_TRANSPARENT} icon={<ChevronIcon/>} classNamesProps={cls.right} />
                <Text tag="h2" weight={TextWeight.EXTRA_BOLD} color={TextColor.REVERSED}
                      classNamesProps={cls.title}>Відгуки</Text>
                <Carousel
                    carouselItems={
                        testimonialsConfig.map(({author, img, text}) =>
                            <Testimonial author={author} text={text} img={img} key={author}/>
                        )
                    }
                    singleStep={550}
                    wrapperSizesClass={cls.carouselWrapper}
                    containerPropsClass={cls.carouselContainer}
                    nextClicked={nextClicked}
                    prevClicked={prevClicked}
                />
            </div>
        </section>
    );
};