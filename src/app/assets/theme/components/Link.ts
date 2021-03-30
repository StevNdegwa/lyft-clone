export default {
    baseStyle:{
        display: "inline-block",
        border:"none",
        "_hover":{
            color: "brand.500",
            textDecoration:"none"
        }
    },
    variants :{
        highlight: {
            textDecoration:"underline",
            color: "rgba(139,55,255,1)",
            fontWeight:"600"
        },
        button: (props:any) =>{
            let style = {
                bg: "white",
                fontWeight:"600",
                border: "1px solid black",
                borderRadius:"35px",
                p:"0.5em 1em",
                fontSize:"1.1em",
                textAlign:"center",
                _hover: {
                    textDecoration:"none",
                    bg:"#ECF0F1",
                    color:"inherit"
                }
            };

            if(props.highlighted){
                Object.assign(style, {
                    bg: "brand.400",
                    border: "none",
                    color: "white",
                    _hover:{
                        bg:"brand.300",
                        textDecoration:"none",
                        color:"white"
                    }
                })
            }

            return style;
        }
    }
}