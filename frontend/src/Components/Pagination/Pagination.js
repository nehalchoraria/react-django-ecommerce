import React,{Component} from 'react';
import {connect} from 'react-redux'

class Pagination extends Component {

    constructor(props) {
      super(props)
      this.state = {
        pageNo : 0
      }
    }
    
    render() {
      let me = this;
      const pages = []
      for(let i=0 ; i < me.props.totalPages ; i++) {
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

  
  export default Pagination;