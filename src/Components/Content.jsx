import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Media/person.jpeg"


export default class Content extends React.Component{
    render() {
        return(
          <div className="text-center">
            <Container>
                <div style={{paddingTop:"300px", paddingBottom:"100px"}}>
            <Image src="./media/person.jpeg" alt="Logo" fluid />
<h1>Hi! I'm Dimas</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, libero. Quibusdam impedit illum quam sed esse sit, delectus recusandae laudantium expedita, fugiat error architecto harum ullam assumenda minima repellendus quidem.</p>
</div>
</Container>
</div>
        )
    }
}