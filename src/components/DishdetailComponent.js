import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderDish({dish}) {
        if(dish != null) {
            return(
                <Card>
                   <CardImg top src={dish.image} alt={dish.name}/>
                   <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                   </CardBody> 
                </Card>
            );
        }

        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        if(dish != null) {
            const allComment = dish.comments.map((comment) => {
                return(
                   <ul className="list-unstyled">
                     <li>{comment.comment}</li>
                     <br></br>
                     <li>-- {comment.author} , { new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                     <br></br>
                   </ul> 
                );
            });
            return(
                <ul><h4>Comments</h4>{allComment}</ul>
            );
        }

        else {
            return(
                <div></div>
            );
        }
    }

    const Dishdetail = (props) => {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderComments dish={props.dish} />
                    </div>
                </div>                 
            </div>
        )
    }

export default Dishdetail;    



