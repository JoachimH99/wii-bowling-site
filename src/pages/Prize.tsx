import { Typography, Button } from '@mui/material';

const Prize = () => {
    return (
        <div style={{
            minHeight: '100vh',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            marginTop: '-1 rem'
        }}>

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

            <Typography variant="h3" fontWeight="900" sx={{ marginBottom: '2rem', marginTop: '2rem' }}>
                PREMIEN
            </Typography>

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
                        backgroundImage: 'url(/femhundrelapp.png)',
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
                    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '15px' }}>
                        <Typography variant="h4" color="gold" fontWeight="bold">
                            500 NOK
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                            Vinneren av Wii Bowling-duellen tar med seg hele potten og evig heder.
                        </Typography>
                    </div>
                </div>
            </div>

            <Button
                href="/"
                sx={{ color: 'white', marginTop: '2rem', textDecoration: 'underline' }}
            >
                Tilbake til forsiden
            </Button>
        </div>
    );
};

export default Prize;