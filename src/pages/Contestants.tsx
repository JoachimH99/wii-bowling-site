import { Typography, Button } from '@mui/material';

const Contestants = () => {
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
                DELTAKERNE
            </Typography>

            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'left', // Aligns text to the left like a doc
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: subtle background
                padding: '2rem',
                borderRadius: '12px'
            }}>
                <ul style={{
                    color: 'white',
                    fontSize: '1.2rem',
                    lineHeight: '2', // Adds vertical space between contestants
                    paddingLeft: '1.5rem', // Space for the dots
                    margin: 0
                }}>
                    <li>Simon Andreasen</li>
                    <li>Jarand Ando nerud</li>
                </ul>
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

export default Contestants;