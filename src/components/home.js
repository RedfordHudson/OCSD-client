import { Link } from 'react-router-dom';
import '../styles/home.css'
import { SocialIcon } from 'react-social-icons';

function Home () {

    const mediaPath = process.env.PUBLIC_URL+'/media/';
    
    const hook = () => {
        return <div id='hook'>
            <div>
                Is it possible to go negative?
            </div>
        </div>
    }
    
    const teaser = () => {
        const teasers = [
            {
                image:'1',
                text:'By using materials from the local landscape, we can reduce manufacturing costs and bring'
                  + ' construction to the residents.'
            },
            {
                image:'2',
                text:'Using smart technologies and artificial intelligence, our home automatically adjusts'
                  + ' its temperature and humidity to the residents\' needs.'
            },
            {
                image:'3',
                text:'Our house operates entirely on electricity and sustainable fuel sources, and emits absolutely'
                  + ' no excess carbon dioxide to the surrounding environment.'
            },
        ]

        return <div id='teaser'>
            <ul>
                {teasers.map(teaser => {
                    var { image,text } = teaser
                    
                    return <div key={image} className='teaser-card'>
                        <div><p>{text}</p></div>
                        <img src={mediaPath+'/images/'+image+'.jpeg'}
                            alt={image} />
                    </div>})}
            </ul>
        </div>
    }
    
    const partners = () => {
        const partners = ['OCSD','PJHM','UCI'];

        return <div id='partners' className='cards'>
            <p>Our <span>Partners</span></p>
            <ul>
                {partners.map(partner => {return <Link to={'partners/'+partner}>
                    <div key={partner} className='card'>
                        <img src={mediaPath+'/logos/'+partner+'.jpg'}
                            alt={partner} />
                        <div><p>{partner}</p></div>
                    </div>
                </Link>})}
            </ul>
        </div>
    }
    
    const sponsors = () => {
        const sponsors = ['sponsor1','sponsor2'];

        return <div id='sponsors' className='cards'>
            <p>Our <span>Sponsors</span></p>
            <ul>
                {sponsors.map(sponsor => {return <Link to={'sponsors/'+sponsor}>
                    <div key={sponsor} className='card'>
                        <img src={mediaPath+'/logos/'+sponsor+'.jpeg'}
                            alt={sponsor} />
                        <div><p>{sponsor}</p></div>
                    </div>
                </Link>})}
            </ul>
        </div>
    }
    
    const technology = () => {
        const technology = ['tech1','tech2'];

        return <div id='technology' className='cards'>
            <p>Our <span>Technology</span></p>
            <ul>
                {technology.map(tech => {return <Link to={'technology/'+tech}>
                    <div key={tech} className='card'>
                        <img src={mediaPath+'/logos/'+tech+'.jpeg'}
                            alt={tech} />
                        <div><p>{tech}</p></div>
                    </div>
                </Link>})}
            </ul>
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
            'sponsors','technology','timeline','blog','donate','contacts']

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
                        <SocialIcon network={platform} bgColor='#f18700'/>
                    </a>
                </li>})}
        </ul>
    }
    
    const copyright = () => {
        return <div id='copyright'>
            © 2022 The Official UCI Sustainability Decathlon Team. ALL RIGHTS RESERVED.
        </div>
    }

    const footer = () => {
        return <div id='footer'>
            {newsletter()}
            {bottomNavbar()}
            {contacts()}
            {copyright()}
        </div>
    }
    
    return ( <>
    
        {hook()}
        {teaser()}
        {partners()}
        {sponsors()}
        {technology()}
        
        {footer()}
    
    </> );
}

export default Home ;