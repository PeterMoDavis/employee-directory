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
              <th className="border-0 align-center text-center" scope="col">
                Name
              </th>
              <th className="border-0 align-center text-center" scope="col">
                Phone
              </th>
              <th className="border-0 align-center text-center" scope="col">
                Email
              </th>
              <th className="border-0 align-center text-center" scope="col">
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
            {/* {this.state.results.map((each, index) => {
              if (this.state.search === "") {
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
              } else {
                let newArr = this.state.results
                  .filter((each) => {
                    if (
                      each.name.first
                        .toLowerCase()
                        .match(new RegExp(`${this.state.search}]`, "ig"))
                    ) {
                      return each;
                    }
                  })
                  .map((each) => {
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
                  });
              }
            })} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListContainer;
