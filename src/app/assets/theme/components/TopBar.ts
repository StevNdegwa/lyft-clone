export default {
    parts: [
        "bar",
        "logo",
        "links",
        "hmenu",
        "vmenu"
    ],
    baseStyle: {
        bar: {
            w: "100%",
            h: "80px",
            bg: "white",
            borderBottom: "1px outset",
            borderColor: "inherit",
            position:"static",
            transition:"position 200ms",
            zIndex:"sticky",
            "&.sticky": {
                position: "sticky",
                top: "0px"
            }
        },
        logo: {
            p: 5,
            h: "100%",
            color: "rgb(255, 0, 191) !important",
            "_hover": {
                color: "black !important"
            }
        },
        links: {
            borderLeft: {
                lg: "1px solid #D0D3D4"
            },
            h: "80px",
            w: {
                lg: "100%"
            },
            p: "0 20px",
            textTransform: "uppercase",
            fontWeight: "600"
        },
        hmenu: {
            display: {
                base: "none",
                lg: "inherit"
            }
        },
        vmenu: {
            display: {
                lg: "none"
            }
        }
    }
}
