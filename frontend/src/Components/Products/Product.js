import React,{Component} from 'react'
import {connect} from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'
import Pagination from '../Pagination/Pagination'
import {productPerPage} from '../commonFunc'
import {updateProductList} from "../../Actions/Action"
import {bindActionCreators} from 'redux'

class Product extends Component {

    constructor(props) {
      super(props)
      this.state = {
        totalPages : 0,
        startPosition : 0
      }
    }

    componentDidMount() {
        let me = this;
        fetch('products/product/')
        .then((resp) => resp.json()) 
        .then(function(data) {
            me.props.updateProductList(data.results)
            let count = data.count / productPerPage
            console.log(count)
            me.setState({ 
               totalPages:count,
              })
          })
    }
    
    render() {

      console.log('totalPages',this.state.totalPages)
      return (
        <main>
        <div style = {{padding:"0 15px 0 15px"}}>
          <nav class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
    
            <span class="navbar-brand">Categories:</span>
    
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="basicExampleNav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">All
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Shirts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sport wears</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Outwears</a>
                </li>
    
              </ul>
              
              <form class="form-inline">
                <div class="md-form my-0">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                </div>
              </form>
            </div>
            
          </nav>
     
          <section class="text-center mb-4">
            <div class="row wow fadeIn">
              {this.props.mainData.products.map( (product) => {
                console.log(product)
                  return <ProductItem data = {product} />
                })}    
            </div>
          </section>
          <Pagination totalPages={this.state.totalPages} />
        </div>
      </main>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      colorList : state.colorList,
      pagination : state.pagination,
      mainData : state.mainData
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      updateProductList : updateProductList
    }, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Product);