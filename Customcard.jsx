import React from "react";
import {Button,Card,CardActions,CardContent,CardMedia,Typography} from "@mui/material";
import tree from "../assets/images/tree.jpg"; 
function CustomCard(){
    return(
        <div>
            <Card>
                <CardMedia component="img" image={tree}/>
                    <CardContent>
                        <Typography>Nature</Typography>
                        <Typography>In the embrace of nature, the symphony of chirping birds and the gentle caress of a breeze paint a serene canvas of tranquility.</Typography>
                        <CardActions><Button>Share</Button>
                        <Button>Learn More</Button></CardActions>
                        </CardContent>
               
            </Card>
            </div>
    )
}
export default CustomCard;
