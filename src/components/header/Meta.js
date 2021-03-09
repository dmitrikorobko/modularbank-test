import HeadPortal from "./HeadPortal"
import ico from '../../assets/images/icon.png'
import image from '../../assets/images/modularbank_share.jpg'

const Meta = ({sitename, title, description, author, keywords, copyright, contact}) => (

    <HeadPortal>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>{title}</title>
        <link href={ico} rel="icon" sizes="32x32" type="image/png"/>

        <meta name="description" content={description}/>
        <meta name="author" content={author}/>
        <meta name="keywords" content={keywords}/>
        <meta name="revisit-after" content="1 month"/>
        <meta name="image" content={image}/>
        <meta name="copyright" content={copyright}/>
        <meta name="contact" content={contact}/>



        <meta name="og:title" content={title}/>
        <meta name="og:description" content={description}/>
        <meta name="og:site_name" content={sitename}/>
        <meta name="og:image" content={image}/>
        <meta name="og:type" content="website"/>



        <meta itemprop="description" content={description}/>
        <meta itemprop="name" content={sitename}/>
        <meta itemprop="image" content={image}/>



        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>

        <meta name="robots" content="noindex"/>
    
    </HeadPortal>

);

export default Meta;