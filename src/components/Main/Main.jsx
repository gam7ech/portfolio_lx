import './Main.scss';
import { telegramIcon, twitchIcon, instagramIcon, youtubeIcon, tiktokIcon } from '../../assets/images/icons';

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <h1 className='main__title'>
                        STREAMER & CREATOR 
                    </h1>
                    <p className='main__subtitle'>
                        Broadcasting high-quality gameplay and interactive content.
                    </p>
                    <p className='main__desc'>
                        Welcome to the official hub for Gam7lx. This is where gaming, tech, and creativity collide. Follow my live broadcasts on Twitch, catch the highlights on YouTube, and join our community on Telegram.
                    </p>
                </div>
                <div className="main__socials">
                    <a href="https://t.me/Gam7lx_Team"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={telegramIcon} alt="Telegram" className="main__social-icon" />
                    </a>
                    <a href="https://www.twitch.tv/gam7lx" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={twitchIcon} alt="Twitch" className="main__social-icon" />
                    </a>
                    <a href="https://www.instagram.com/gam7lx" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={instagramIcon} alt="Instagram" className="main__social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@gam7lx" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={youtubeIcon} alt="YouTube" className="main__social-icon" />
                    </a>
                    <a href="https://www.tiktok.com/@gam7lx" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={tiktokIcon} alt="TikTok" className="main__social-icon" />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Main;