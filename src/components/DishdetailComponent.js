import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

export class Dishdetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.setDish.image} alt={this.props.setDish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.setDish.name}</CardTitle>
                                <CardText>{this.props.setDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md m-1">
                        <h4>Comments</h4>
                        
                    </div>
                </div>
            </div>
        )
    }
}


