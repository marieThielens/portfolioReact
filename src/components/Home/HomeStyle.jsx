const HomeStyle = {
    containerHome : {
        display: 'flex',
        marginTop: '10vh',
        '@media (max-width: 600px)' : {
            flexDirection: 'column',
            margin: '0 auto',
        },
    },
    blockGauche: {
        width:'60%',
        marginLeft: '4vh',
        '@media (max-width: 600px)' : {
            fontSize: 35,
            width:'100%',
            marginTop: '1em'
        }
    },
    intro : {
            color:'white',
            fontSize:'42px',
    },

    gris : {
            color:'#8d8d8d',
            marginTop: '20px',
            marginBottom:'20px',
            fontSize: '15px',
            letterSpacing: '3px'
    },
    bouton: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    newMarieImage: {
        animationName: 'bougeMarie',
        animationDuration: '4s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection:'alternate',
        animationPlayState: 'running',
        '@media (max-width: 600px)' : {
            maxWidth: '40%',
        },
    }
}
export default HomeStyle;
