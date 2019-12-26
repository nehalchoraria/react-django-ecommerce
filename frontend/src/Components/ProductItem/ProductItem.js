import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = {
    card: {
      boxShadow : "5px 5px 5px 5px rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)"
    },
    product : {
      textDecoration : 'none'
    }
}

class ProductItem extends Component {

    constructor(props) {
      super(props)
      this.state = {
      }
    } 
   
    render() {
      console.log(this.props)
      const classes = useStyles;
      const productURL = "/product/" + this.props.data.id
      return (
        <div class="col-lg-3 col-md-6 mb-4">
            <a href = {productURL} style={classes.product} >
            <Card style={classes.card}>
                <CardMedia
                    component="img"
                    image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    title="Paella dish"
                />
                <CardContent className = "card-body text-center">
                    <Typography variant="body2" color="textSecondary" component="h5" >
                            {this.props.data.productname}
                            <span class="badge badge-pill danger-color">NEW</span>
                    </Typography>
                    <Typography component="strong">
                            {this.props.data.description}
                    </Typography>
                    <Typography className = "font-weight-bold blue-text" component="h4">
                            <strong> {this.props.data.price}$</strong>
                    </Typography>
                </CardContent>
            </Card>
            </a>
        </div>
      )
    }
  }



  export default ProductItem;