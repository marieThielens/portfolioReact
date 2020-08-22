const AboutStyle = {
    containerAbout : {
        display: 'flex',
        marginTop: '10vh',
        '@media (max-width: 600px)' : {
            flexDirection: 'column',
            margin: "0 auto"
        },
        '&:hover':{
            color: 'red',
        },  
    },
    blockPiramide : {
        height:500,
        width:100,
        '&:firstChild': {
            borderColor: 'transparent transparent transparent rgba(50,50,50,.6)',
            transform: 'rotateY(-19.5deg)',
            color:'red'
        },

    },

}
export default AboutStyle;