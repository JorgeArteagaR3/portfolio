import "./App.css";
import { FirstPage } from "./components/FirstPage";
import { Header } from "./components/Header/index";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact/index";
function App() {
    return (
        <>
            <Header />
            <div className="app">
                <FirstPage />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
