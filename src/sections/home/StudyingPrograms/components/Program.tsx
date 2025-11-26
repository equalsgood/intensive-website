import React, { useState } from 'react';
import classes from "../StudyingPrograms.module.css";
import { Text, TextVariants } from "shared/components";
import classNames from "classnames";

export interface ProgramData {
    background: string,
    title: string,
    img: string,
    programAspects: string[];
}

interface ProgramProps {
    program: ProgramData
}

export const Program = ({ program }: ProgramProps) => {
    const { background, title, img, programAspects } = program;
    const [isHovering, setIsHovering] = useState(false);

    return (
        <li onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} style={{background: `${background}`}} className={classes.program}>
            <Text tag="h4" variant={TextVariants.TITLE_SMALL}
                  classNamesProps={classNames(classes.programTitle, {[classes.hovered]: isHovering})}>{title}</Text>
            <img src={img} alt={`image of a ${title} program`} className={classNames(classes.programImage, {[classes.hovered]: isHovering, [classes.biggerImage]: title === 'Студенти'})}/>
            <ol style={{background: `${background}`}} className={classNames(classes.hoverContainer, {[classes.active]: isHovering})}>
                { programAspects.map(aspect =>
                    <li>
                        <Text tag="span" variant={TextVariants.TEXT}>{aspect}</Text>
                    </li>
                )}
            </ol>
        </li>
)
    ;
};
