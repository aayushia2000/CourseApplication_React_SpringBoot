import React, { useEffect } from "react";
import { Container, Button} from "reactstrap";
const Home = ()=>{
    useEffect(() => {
        document.title = "Home || Learning with Ayushi"
    }, []);
    return (
        <div className="jumbotron text-center">
                    <h1 className="display-3 ">Ayushi Gupta</h1>
                    <p>This is an application for learning courses.</p>
                    <Container>
                        <Button  color="primary" outline>Start Using</Button>
                    </Container>
        </div>
    );
}

export default Home;