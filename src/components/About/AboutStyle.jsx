const AboutStyle = {
    containerAbout : {
        display: 'flex',
        marginTop: '10vh',
        '@media (max-width: 600px)' : {
            flexDirection: 'column',
            margin: "0 auto"
        }, 
    },
    blockPiramide : {
        position:'absolute',
        left:'50%',
        marginLeft:120,
        top: '50%',
        marginTop: -210,
        height:500,
        width:100,
        transformStyle:'preserve-3d',
        animation: 'tourne 10s linear infinite',
        transformOrigin: '116px 200px 116px',
        '&>div': {
            position:'absolute',
            borderStyle: 'solid',
            borderWidth: '200px 0 200px 346px',
            transformOrigin: '0 0',
        },
        '&>div:after': {
            position:'absolute',
            color:"#fff",
            left:-311,
            top: - 69,
            textAlign: 'center',
            opacity: '.6',
        },
        '&>div:first-child': {
            borderColor: 'transparent transparent transparent rgba(50,50,50,.6)',
            transform: 'rotateY(-19.5deg) rotateX(180deg) translateY(-400px)',
        },
        '&>div:first-child:after': {
            position: 'absolute',
            content: 'url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo1.png)',      
        },
        '&>div:nth-child(2)': {
            borderColor: 'transparent transparent transparent rgba(50,50,50,.6)',
            transform: 'rotateY(90deg) rotateZ(60deg) rotateX(180deg) translateY(-400px)',
        },
        '&>div:nth-child(2):after': {
            position: 'absolute',
            content: 'url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo2.png)',
        },
        '&>div:nth-child(3)': {
            borderColor: 'transparent transparent transparent rgba(50,50,50,.9)',
            transform : 'otateX(60deg) rotateY(19.5deg)',
        },
        '&>div:nth-child(3):after': {
            position:'absolute',
            content: 'url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo3.png)',      
        },
        '&>div:nth-child(4)': {
            borderColor: 'transparent transparent transparent rgba(50,50,50,.8)',
            transform: 'rotateX(-60deg) rotateY(19.5deg) translateX(-116px) translateY(-200px) translateZ(326px)'
        },
        '&>div:nth-child(4):after': {
            position:'absolute',
            width: 150,
            content: 'url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo4.png)',
            left:-315,
            top:-91,
        }

    },
    '@keyframes tourne' : {
        '0%' : {
            transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
        },
        '100%' : {
            transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
        }
    }

}
export default AboutStyle;