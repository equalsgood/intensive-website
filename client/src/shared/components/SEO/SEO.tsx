import { Helmet } from 'react-helmet-async';
import ogImage from 'shared/assets/images/og-share-image.jpg';

interface SEOProps {
    title: string;
    description: string;
    url?: string;
}

export const SEO = ({ title, description, url = "https://intensiveschool.com.ua" }: SEOProps) => {
    return (
        <Helmet
            htmlAttributes={{lang: 'uk'}}
        >
            <title>{title}</title>
            <meta name='description' content={description}/>
            <link rel="canonical" href={url}/>

            {/* 3. Social Media (Telegram/Viber/FB) */}
            <meta property="og:locale" content="uk_UA"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={url}/>
            <meta property="og:site_name" content="Репетиторський центр «Інтенсив»"/>
            {/* Make sure this image actually exists in your public folder! */}
            <meta property="og:image" content={`https://intensiveschool.com.ua${ogImage}`}/>
        </Helmet>
    );
};