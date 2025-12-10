import React from 'react';
import { CustomLink, CustomLinkVariants, Text, TextColor, TextWeight } from "shared/components";
import { RoutePaths } from "app/providers/AppRouter";
import fullLogo from "shared/assets/images/full-logo.png";
import shortLogo from "shared/assets/images/short-logo-wh.png";
import cls from "./Logo.module.css";

interface LogoProps {
    isFull: boolean;
}

export const Logo = ({isFull}: LogoProps) => {
    return (
        <CustomLink
            to={RoutePaths.HOME}
            variant={CustomLinkVariants.LOGO}
        >
            <>
                {isFull
                    ? <div className={cls.fullLogo}>
                        <img src={fullLogo} alt="logo"/>
                        <Text tag="p" weight={TextWeight.MEDIUM} color={TextColor.REVERSED}>
                            Репетиторський центр для школярів, студентів та дорослих
                        </Text>
                    </div>
                    : <img className={cls.shortLogo} src={shortLogo} alt="logo"/>
                }
            </>
        </CustomLink>
    );
};

