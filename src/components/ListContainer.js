import React, { Component } from "react";
import ListItem from "./ListItem";
import API from "../utils/API";

class ListContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchPeople();
  }
  styles = {
    input: {
      width: "200px",
      border: "none",
    },
  };

  handleClickName() {
    this.setState({
      results: this.state.results.sort((a, b) => {
        let nameA = a.name.last.toUpperCase();
        let nameB = b.name.last.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }),
    });
  }

  handleClickDOB() {
    this.setState({
      results: this.state.results.sort((a, b) => {
        let aYear = a.dob.date.substring(0, 4);
        let bYear = b.dob.date.substring(0, 4);

        return aYear - bYear;
      }),
    });
  }

  searchPeople = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .then(() => console.log(this.state.results))
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form action="">
          <div className="form-group d-flex justify-content-center bg-light">
            <input
              onChange={(e) => {
                this.setState({ search: e.target.value });
                console.log(this.state.search);
              }}
              className="form-control-sm my-3"
              style={this.styles.input}
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
        <table className="table table-hover table-striped container ">
          <thead>
            <tr className="border-top border-bottom">
              <th className="border-0 align-center text-center" scope="col">
                Image
              </th>
              <th
                onClick={() => this.handleClickName()}
                className="border-0 align-center text-center name"
                scope="col"
              >
                Name
              </th>
              <th className="border-0 align-center text-center" scope="col">
                Phone
              </th>
              <th className="border-0 align-center text-center" scope="col">
                Email
              </th>
              <th
                onClick={() => this.handleClickDOB()}
                className="border-0 align-center text-center"
                scope="col"
              >
                DOB
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.results
              .filter((each) => {
                if (this.state.search === "") {
                  return each;
                } else if (
                  each.name.first
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()) ||
                  each.name.last
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                ) {
                  return each;
                }
              })
              .map((each, index) => {
                let dobArr = each.dob.date.slice(0, -14).split("-");
                let newDOB = `${dobArr[1]}-${dobArr[2]}-${dobArr[0]}`;

                return (
                  <ListItem
                    key={index}
                    first={each.name.first}
                    last={each.name.last}
                    picture={each.picture.medium}
                    phone={each.phone}
                    email={each.email}
                    DOB={newDOB}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListContainer;
