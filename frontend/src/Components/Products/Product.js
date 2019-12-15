import React,{Component} from 'react'
import {connect} from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'
import Pagination from '../Pagination/Pagination'
import {productPerPage} from '../commonFunc'
import {setDefaultPage} from "../../Actions/Action"
import {bindActionCreators} from 'redux'

class Product extends Component {

    constructor(props) {
      super(props)
      this.state = {
          productList : []
      }
    }

    componentDidMount() {
        let me = this;
        fetch('/products')
        .then((resp) => resp.json()) 
        .then(function(data) {
            let totalPages = data.count / productPerPage
            me.setState({productList:data.results})
            me.props.setDefaultPage(0,totalPages)
          })
    }
    
    render() {
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
                {this.state.productList.map( (product) => {
                   return <ProductItem data = {product} />
                 })}    
            </div>
          </section>
          {this.props.pagination.pageSize >= 1 ?
          <Pagination data={{
            pageNo:this.props.pagination.currentPage,
            pageSize:this.props.pagination.pageSize}}/> : "" }
        </div>
      </main>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      colorList : state.colorList,
      pagination : state.pagination
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      setDefaultPage : setDefaultPage 
    }, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Product);