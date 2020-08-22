const ProjectStyle = {
    papaProject : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        '@media (max-width:600px)' : {

        }
    },
    bouton: {
        padding:12,
        textTransform: 'uppercase',
        ':active' : {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
    },


    containerBouton : {
        textAlign: 'center',
    },
    containerProject : {
        maxWidth:"30%",
        width: "386.667px",
    }
}
export default ProjectStyle;