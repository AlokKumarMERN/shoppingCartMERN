import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Carts = ({name, img, para}) => {
    // const btnClick = () =>{
        
    // }
  return (
    <>
    <Card className=" mt-2 shadow-lg cardZoom stretch-col">
        <Card.Img
          variant="top"
          src={img}
          style={{ maxHeight: "9rem", minHeight: "7rem", height:"10rem" }} 
          className="shadow"
        />
            <Card.Body>
              <Card.Title className="text-primary">{name}</Card.Title>
              <Card.Text className="text-success">
                {para}
              </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default Carts
