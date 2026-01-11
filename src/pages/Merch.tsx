import { Typography, Button, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

const Merch = () => {
    const products = [
        { id: 1, title: "Wii Bowling Saved My Life T-skjorte", price: "699 NOK", image: "/wiibowlingsavedmylife.png", stock: false },
        { id: 2, title: "Wii Sports hettegenser", price: "1099 NOK", image: "/hettegenser.png", stock: false },
    ];

    return (
        <div style={{
            minHeight: '100vh',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
        }}>
            {/* Banner Section */}
            <div style={{ width: '100%', marginBottom: '2rem' }}>
                <img src="/banner.gif" alt="Banner" style={{ width: '100%', display: 'block' }} />
                <img src="/sub_banner.png" alt="Sub Banner" style={{ width: '100%', display: 'block' }} />
            </div>

            <Typography variant="h3" fontWeight="900" sx={{ marginBottom: '2rem' }}>
                MERCH
            </Typography>

            {/* FLEXBOX GRID - Works perfectly in TS */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {products.map((product) => (
                    <Card key={product.id} sx={{
                        width: { xs: '100%', sm: '300px' }, // Full width on phone, 300px on desktop
                        backgroundColor: '#000',
                        color: 'white',
                        borderRadius: '12px',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {/* Image Container */}
                        <div style={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                height="260"
                                image={product.image}
                                alt={product.title}
                            />
                            {!product.stock && (
                                <Chip
                                    label="UTSOLGT"
                                    sx={{
                                        position: 'absolute',
                                        top: '12px',      // Distance from top
                                        right: '12px',    // Distance from right
                                        fontWeight: '900',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        borderRadius: '4px', // Squared corners look a bit more "retail"
                                        zIndex: 10
                                    }}
                                />
                            )}
                        </div>

                        <CardContent sx={{ textAlign: 'left' }}>
                            <Typography variant="h6" fontWeight="bold">
                                {product.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'gold', fontWeight: '900' }}>
                                {product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Back Button */}
            <Button
                component={Link}
                to="/"
                sx={{
                    color: 'white',
                    marginTop: '4rem',
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                }}
            >
                Tilbake til forsiden
            </Button>
        </div>
    );
};

export default Merch;