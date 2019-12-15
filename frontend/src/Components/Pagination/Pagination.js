import React,{Component} from 'react';
import {connect} from 'react-redux'

class Product extends Component {

    constructor(props) {
      super(props)
      this.state = {
        pageSize : this.props.data.pageSize,
        pageNo : this.props.data.pageNo
      }
    }
    
    render() {
      let me = this;
      const pages = []
      for(let i=0 ; i < me.state.pageSize ; i++) {
        pages.push ( 
        <li key={i} class = {i == me.state.pageNo ? "page-item active" : "page-item" }>
        <a class="page-link" onClick = { e => this.setState({pageNo:i})}>{i+1}</a>
        </li>
        )
      }

      return (      
          <nav class="d-flex justify-content-center wow fadeIn">
            <ul class="pagination pg-blue">

              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>

              {pages}
    
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      pagination : state.pagination
    }
  }


  export default connect(mapStateToProps)(Product);