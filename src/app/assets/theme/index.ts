import {extendTheme, theme, ThemeOverride} from "@chakra-ui/react";

import breakpoints from "./rwd";
import components from "./components";

const myTheme: ThemeOverride = {
    textStyles: {
        largeText:{
            fontSize:"2rem",
            fontWeight:"500",
            lineHeight:"1"
        },
        largerText:{
            fontSize:"3rem",
            fontWeight:"600",
            lineHeight:"1.2"
        },
        largestText:{
            fontSize:"3.5rem",
            fontWeight:"800",
            lineHeight:"1.3"
        }
    },
    styles: {
        global: {
            body: {
                fontSize: "16px",
                fontFamily: "'Roboto', sans-serif",
                color: "rgba(12,11,49,1)",
                borderColor: "#D0D3D4"
            }
        }
    },
    colors: {
        brand: {
            "100": "#E9D8FD",
            "200": "#D6BCFA",
            "300": "#B794F4",
            "400": "#9F7AEA",
            "500": "#805AD5",
            "600": "#6B46C1",
            "700": "#553C9A",
            "800": "#44337A",
            "900": "#322659"
        }
    },
    breakpoints,
    components: {
        ...components
    }
}

console.log(theme)

export default extendTheme({
    ... myTheme
});
