import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Company from './Components/Company';
import Name from './Components/Name'
import AdvertisedRate from './Components/AdvertisedRate'
import UpFrontFee from './Components/UpFrontFee'
import LegalFee from './Components/LegalFee'
import Pagination from './Components/Pagination';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loans: [],
      columns: [
        "Company",
        "Name",
        "Advertised Rate",
        "Up Front Fee",
        "Legal Fee"
      ],
      currentPage: [],
      postsPerPage: 10
    }
  };


  loans = async () => {
    await axios.get("https://blaze.ratecity.com.au/api/search/home-loans?page=")
      .then(res => {
        console.log(res);
        this.setState({
          loans: res.data.hits
        });
      })
  }

  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
  }

  componentDidMount() {
    this.loans()
  }

  render() {
    const { loans } = this.state
    const { columns } = this.state
    const { postsPerPage } = this.state
    const { currentPage } = this.state

    const indexOfLastPost = currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = loans.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="App">
        <h5>Home Loans</h5>
        <table className="data-table" loan={currentPosts}>
          <thead>
            <tr>
              {columns.map((row, index) => (
                <th key={index}>
                  <li className="thead">{row}</li>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <Company loans={currentPosts} />
              <Name loans={currentPosts} />
              <AdvertisedRate loans={currentPosts} />
              <UpFrontFee loans={currentPosts} />
              <LegalFee loans={currentPosts} />
            </tr>
          </tbody>
        </table>
        <Pagination postsPerPage={postsPerPage} totalPosts={loans.length} paginate={this.paginate} />
      </div>
    )
  }
}

export default App
