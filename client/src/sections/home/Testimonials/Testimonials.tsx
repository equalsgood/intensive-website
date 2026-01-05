import React, { useContext, useEffect, useState } from 'react';
import cls from './Testimonials.module.css';
import { Button, ButtonVariants, Carousel, DottedCarousel, Text, TextColor, TextWeight } from "shared/components";
import { Testimonial, TestimonialProps } from "./components/Testimonial";
import author1 from 'shared/assets/images/testimonial-authors/testimonial-author-1.png';
import ChevronIcon from 'shared/assets/icons/chevron.svg';
import { Context } from "app/providers/ContextProvider";

const testimonialsConfig: Array<TestimonialProps> = [
    { author: 'Олена, мама Софії', img: author1, text: 'Дуже вдячна центру за якісні уроки англійської. Софія завжди повертається із занять натхненною, розповідає про нові слова й ігри, які допомагають краще запам’ятовувати матеріал. Найголовніше — у неї з’явилося щире бажання вчити мову.' },
    { author: 'Андрій, тато Марка', img: author1, text: 'Марко із задоволенням ходить на заняття з англійської. Викладачі пояснюють матеріал просто й цікаво.' },
    { author: 'Світлана, мама Каті й Олега', img: author1, text: 'Діти швидко підтягнули лексику та граматику. Уроки проходять весело та результативно.' },
    { author: 'Тетяна, мама Владислава', img: author1, text: 'Завдяки заняттям Владислав упевнено відповідає на уроках англійської в школі. Прогрес дуже помітний.' },
    { author: 'Ірина, мама Назарчика', img: author1, text: 'Син ходить на уроки з великим задоволенням. Назарчик помітно збільшив словниковий запас і краще розуміє англійську на слух. Викладач постійно мотивує й підтримує — це дуже цінно.' },
    { author: 'Михайло, тато Артема', img: author1, text: 'Центр став справжнім порятунком для нас. Артем мав труднощі з англійською в школі, але за кілька місяців занять ситуація кардинально змінилася. Педагоги уважні та мотивують на результат.' },
    { author: 'Людмила, мама Єви', img: author1, text: 'Єва з радістю вчить нові слова та фрази. Чудовий педагогічний підхід!' },
    { author: 'Руслан, тато Дарини', img: author1, text: 'Дарина завжди чекає на заняття, бо вони проходять у цікавому форматі: багато розмов, вправ і творчих завдань. Помітно, що викладач вкладає душу в роботу й уважно стежить за прогресом дитини.' },
    { author: 'Катерина, мама Богдана', img: author1, text: 'Мій син довго не міг зацікавитися англійською, але після перших занять у центрі буквально «загорівся». Дуже подобається, що викладачі працюють за сучасними методами й дають багато практики.' },
    { author: 'Василь, тато Андрійка', img: author1, text: 'За короткий час Андрійко підтягнув базову граматику. Дуже професійні викладачі.' },
    { author: 'Юрій, тато Лесі та Петра', img: author1, text: 'Діти із задоволенням вчать англійську й показують стабільний прогрес. Рекомендую!' },
    { author: 'Марина, мама Злати', img: author1, text: 'Злата відвідує уроки вже кілька місяців і кожного разу повертається додому з новими знаннями. За цей час помітно покращилися читання, вимова та загальна впевненість. Рекомендую центр усім батькам.' },
];

export const Testimonials = () => {
    const { widthWithoutScroll: screenWidth, screenWidth: clientScreenWidth, isMobile } = useContext(Context);
    const [singleStep, setSingleStep] = useState(550);
    const [singleItemWidth, setSingleItemWidth] = useState(450);
    const [nextClicked, setNextClicked] = useState(0);
    const [prevClicked, setPrevClicked] = useState(0);

    useEffect(() => {
        if(clientScreenWidth >= 1280) {
            setSingleStep(550);
            setSingleItemWidth(450);
        }
        else if(clientScreenWidth < 1280 && clientScreenWidth >= 960) {
            let itemSize = (screenWidth - 80 - 120 - 44) / 2;
            itemSize = itemSize > 430 ? 430 : itemSize;
            setSingleStep(itemSize + 44);
            setSingleItemWidth(itemSize);
        } else if(clientScreenWidth < 960 && clientScreenWidth >= 640) {
            let itemSize = (screenWidth - 52 - 80 - 24) / 2;
            itemSize = itemSize > 430 ? 430 : itemSize;
            setSingleStep(itemSize + 24);
            setSingleItemWidth(itemSize);
        } else if(clientScreenWidth < 640) {
            let itemSize = (screenWidth - 52);
            // itemSize = itemSize > 430 ? 430 : itemSize;
            setSingleStep(itemSize + 24);
            setSingleItemWidth(itemSize);
        }
    }, [clientScreenWidth]);
    return (
        <section id="testimonials" className={cls.section}>
            <div className={cls.container}>
                {!isMobile &&
                    <>
                        <Button onClick={() => setPrevClicked(prev => prev + 1)} type="button" variant={ButtonVariants.SWITCH_TRANSPARENT} icon={<ChevronIcon/>} classNamesProps={cls.left} />
                        <Button onClick={() => setNextClicked(prev => prev + 1)} type="button" variant={ButtonVariants.SWITCH_TRANSPARENT} icon={<ChevronIcon/>} classNamesProps={cls.right} />
                    </>
                }
                <Text tag="h2" weight={TextWeight.EXTRA_BOLD} color={TextColor.REVERSED}
                      classNamesProps={cls.title}>Відгуки</Text>
                { isMobile
                    ? <DottedCarousel
                        adjusted
                        carouselItems={
                            testimonialsConfig.map(({author, img, text}) =>
                                <Testimonial width={singleItemWidth} author={author} text={text} img={img} key={author}/>
                            )
                        }
                        singleStep={singleStep}
                        wrapperSizesClass={cls.carouselWrapper}
                        containerPropsClass={cls.carouselContainer}
                        reversed
                    />
                    : <Carousel
                        adjusted
                        carouselItems={
                            testimonialsConfig.map(({author, img, text}) =>
                                <Testimonial width={singleItemWidth} author={author} text={text} img={img} key={author}/>
                            )
                        }
                        singleStep={singleStep}
                        wrapperSizesClass={cls.carouselWrapper}
                        containerPropsClass={cls.carouselContainer}
                        nextClicked={nextClicked}
                        prevClicked={prevClicked}
                    />
                }
            </div>
        </section>
    );
};