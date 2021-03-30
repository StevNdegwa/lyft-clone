import { ThemeComponents } from "@chakra-ui/theme";
import TopBar from "./TopBar";
import Button from "./Button";
import Container from "./Container";
import Article from "./Article";
import Footer from "./Footer";
import Link from "./Link";
import Pages from "./Pages";

const Icon = {
    baseStyle:{
        cursor:"pointer"
    }
}

const components: ThemeComponents = {
    TopBar,
    Button,
    Container,
    Article,
    Footer,
    Link,
    Icon,
    Pages
}

export default components;