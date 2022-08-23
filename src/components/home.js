import { Link } from 'react-router-dom';
import '../styles/home.css'

function Home () {

    const mediaPath = process.env.PUBLIC_URL+'/media/';
    
    const logos = () => {
        const partners = ['OCSD','PJHM','UCI'];

        return <ul id='logos'>
            {partners.map(partner => {return <li key={partner}>
                <img src={mediaPath+'/logos/'+partner+'.jpg'}
                    alt={partner} />
            </li>})}
        </ul>
    }
    
    const hook = () => {
        return <div id='hook'>
            HOOK
        </div>
    }
    
    const teaser = () => {
        return <div id='teaser'>
            TEASER
        </div>
    }
    
    const partners = () => {
        const partners = ['OCSD','PJHM','UCI'];

        return <ul id='partners'>
            {partners.map(partner => {return <div key={partner}>
                <Link to={'partners/'+partner}>
                    <img src={mediaPath+'/logos/'+partner+'.jpg'}
                        alt={partner} />
                </Link>
            </div>})}
        </ul>
    }
    
    const sponsors = () => {
        const sponsors = ['sponsor1','sponsor2'];

        return <ul id='sponsors'>
            {sponsors.map(sponsor => {return <div key={sponsor}>
                <Link to={'sponsors/'+sponsor}>
                    <img src={mediaPath+'/logos/'+sponsor+'.jpg'}
                        alt={sponsor} />
                </Link>
            </div>})}
        </ul>
    }
    
    const products = () => {
        const products = ['product1','product2'];

        return <ul id='products'>
            {products.map(product => {return <div key={product}>
                <Link to={'products/'+product}>
                    <img src={mediaPath+'/logos/'+product+'.jpg'}
                        alt={product} />
                </Link>
            </div>})}
        </ul>
    }
    
    const timeline = () => {
        return <div id='timeline'>
            <img src={mediaPath+'/timeline.jpg'}
                alt='timeline' />
        </div>
    }
    
    const newsletter = () => {
        return <div id='newsletter'>
            
            <form onSubmit={() => {alert('subscribed!')}}>
                <input type='text'
                    id='input_name'
                    name='name'
                    placeholder='First Name'/>
                <input type='email'
                    id='input_email'
                    name='email'
                    placeholder='Email'/>
                <button type='submit'>
                    Subscribe to Receive Updates
                </button>
            </form>
        </div>
    }
    
    const bottomNavbar = () => {
        const pages = ['home','vision','team','faculty','partners',
            'sponsors','products','timeline','blog','donate','contacts']

        return <ul id='bottomNavbar'>
            {pages.map(page => {
                return <li key={page}>
                    <Link to={page}>
                        {page}
                    </Link>
                </li>})}
        </ul>
    }
    
    const contacts = () => {
        const contacts = {
            twitter:'twitter.com',
            instagram:'instagram.com',
            facebook:'facebook.com'
        }

        const prefix = 'https://www.'

        // var sim = <a id="link-203-117" class="ct-link" href="https://www.instagram.com/uxreactor/" target="_blank">
        //     <div id="fancy_icon-100-117" class="ct-fancy-icon uxr-footer-icon">
        //         <svg id="svg-fancy_icon-100-117">
        //             <use xlink:href="#FontAwesomeicon-instagram"/>
        //         </svg>
        //     </div>
        // </a>

        return <ul id='contacts'>
            {Object.entries(contacts).map(contact => {
                var platform = contact[0];
                var link = contact[1];

                return <li key={platform}>
                    <a href={prefix+link}
                        target="_blank"
                        rel="noreferrer">
                        {platform}
                    </a>
                </li>})}
        </ul>
    }
    
    const copyright = () => {
        return <div id='copyright'>
            © 2022 The Official UCI Sustainability Decathlon Team. ALL RIGHTS RESERVED.
        </div>
    }
    
    return ( <>
    
        {logos()}
        {hook()}
        {teaser()}
        {partners()}
        {sponsors()}
        {products()}
        {timeline()}
        {newsletter()}
        {bottomNavbar()}
        {contacts()}
        {copyright()}
    
    </> );
}

export default Home ;