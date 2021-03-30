export default {
    parts: ['wrapper', 'image', 'heading', 'content'],
    baseStyle: {
        wrapper:{
            w:"100%",
            "_first": {
                borderLeft:"none"
            }
        },
        image: {
            w:"66.66%"
        },
        content:{
            ">h3":{
                fontSize:"1.3em"
            }
        }
    }
}