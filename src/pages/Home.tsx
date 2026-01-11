import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '1rem'}}>

    {/* GIF from https://cooltext.com/logo-design-burning */}
    <div
        style={{
        width: '100%',
    }}
>
    {/* GIFs inside the banner */}
    <img
        src="/banner.gif"
    alt="Banner"
    style={{
        width: '100%',
            display: 'block',
    }}
    />
    <img
    src="/sub_banner.png"
    alt="Sub Banner"
    style={{
        width: '100%',
            display: 'block',
    }}
    />
    </div>

    <div style={{
        marginTop: '1rem',
            display: 'flex',          // Enables Flexbox
            justifyContent: 'center', // Centers buttons horizontally
            flexWrap: 'wrap',         // Allows buttons to stack if the phone is too narrow
            gap: '10px'               // Adds consistent space between the buttons
    }}>
    <Button
        href="/contestants"
    component="a"
    sx={{
        color: 'white',
            fontSize: '1.1rem',      // Makes the text much larger
            fontWeight: '900',       // Makes the text extra bold
            textTransform: 'none',   // Keeps it as "Merch" instead of "MERCH"
            '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                textDecoration: 'none', // Ensures no underline appears on hover
        }
    }}
>
    DELTAKERNE
    </Button>
        <Button
            component={Link} // Change this from "a"
            to="/prize"      // Change this from href
            sx={{
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: '900',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }}
        >
            PREMIEN
        </Button>
    <Button
    href="/merch"
    component="a"
    sx={{
        color: 'white',
            fontSize: '1.1rem',      // Makes the text much larger
            fontWeight: '900',       // Makes the text extra bold
            textTransform: 'none',   // Keeps it as "Merch" instead of "MERCH"
            '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                textDecoration: 'none', // Ensures no underline appears on hover
        }
    }}
>
    MERCH
    </Button>
    </div>

    <div
    style={{
        width: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            overflow: 'hidden', // Ensures the corners stay rounded for both parts
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)' // Optional: adds some depth
    }}
>
    {/* Top Section: The Image */}
    <div
        style={{
        width: '100%',
            height: '250px', // Fixed height for the image part
            backgroundImage: 'url(/wiibowling.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

    }}
    />

    {/* Bottom Section: The Black Text Area */}
    <div
        style={{
        backgroundColor: '#000000',
            padding: '1.5rem',
            color: 'white',
            textAlign: 'left'
    }}
>
    <p style={{
        margin: 0,
            fontSize: '1.1rem',
            lineHeight: '1.6',
            opacity: 0.9,
            fontFamily: 'sans-serif'
    }}>
    19 November 2006 lanserte Nintendo det prisbelønnede spillet 'Wii Sports'.
        Nå, nesten 20 år senere, er det duket for duell i en av spillets mest krevende grener: Bowling.
        To erfarne spillere må nå yte sitt ytterste i kampen om heder, ære, og ikke minst den svimlende
    premien på 500 norske kroner. Måtte den beste bowleren vinne.
    </p>
    </div>
    </div>

    <Typography
    variant="h2"
    component="h1" // Semantic tag for SEO
    sx={{
        color: 'white',
            textAlign: 'center',
            fontWeight: '900',
            marginTop: '2rem',
            letterSpacing: '2px', // Gives it a premium look
            fontSize: { xs: '2rem', md: '3.5rem' } // Responsive: smaller on phones, larger on desktop
    }}
>
    AVSTEMNING
    </Typography>

    <iframe
    src="https://strawpoll.com/embed/PbZqbaWNByN"
    title="StrawPoll"
    style={{
        width: '100%',
            height: '600px',
            border: 'none',
            marginTop: '2rem',
    }}
    allowFullScreen
    />


    <footer style={{
        marginTop: '-4rem',
            padding: '2rem 1rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Subtle line to separate content
            color: 'rgba(255, 255, 255, 0.6)' // Muted white/grey text
    }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <Typography
        variant="caption"
    display="block"
    sx={{
        lineHeight: '1.6',
            fontStyle: 'italic',
            marginBottom: '1rem'
    }}
>
    Innholdet er beskyttet etter åndsverkloven. Regelmessig, systematisk eller kontinuerlig
    innhenting, lagring, indeksering, distribusjon og all annen form for sammenstilling
        av data tillates ikke uten eksplisitt, skriftlig tillatelse fra mor og far.
    </Typography>

    <Typography
    variant="body2"
    sx={{
        fontWeight: 'bold',
            letterSpacing: '1px'
    }}
>
© 2026 BEDRIFT AS
    </Typography>
    </div>
    </footer>
    </div>
)
}

export default Home