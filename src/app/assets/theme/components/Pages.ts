export default {
    parts: ["main"], 
    variants: {
        driver: {
            main: {
                h:"500px",
                bg:"gray.100",
                "&>div":{
                    h:"100%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center"
                }
            },
            articles:{
                height:"500px",
                bgRepeat:"no-repeat",
                bgPosition:"right center",
                bgSize:"600px 400px",
                "& article":{
                    width:"250px"
                }
            },
            howItWorks:{
                h:"900px",
                position:"relative",
                "&>div.stepsWrapper":{
                    position:"absolute",
                    top:"0",
                    left:"0",
                    width:"100%",
                    height:"90%",
                    "& *":{
                        bgRepeat:"no-repeat"
                    },
                    "& > div.step":{
                        h:"100%",
                        bgPosition:"center",
                        bgSize:"450px 750px",
                        cursor:"alias",
                        "&>div.p":{
                            userSelect: "none",
                            position:"absolute",
                            bottom:"0",
                            h:"150px",
                            "&.q":{
                                w:"200px",
                                left:"25%",
                                fontSize:"3xl",
                                fontWeight:"800"
                            },
                            "&.a":{
                                w:"300px",
                                left:"65%"
                            }
                        }
                    }
                }
            },
            feedback:{
                textAlign:"center",
                bg:"gray.100",
                py:"100px"
            }
        }
    }
}
