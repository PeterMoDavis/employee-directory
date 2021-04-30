import React, { Component } from "react";
import ListItem from "./ListItem";
import API from "../utils/API";

class ListContainer extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.searchPeople();
  }

  searchPeople = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .then(() => console.log(this.state.results));
  };
  render() {
    return (
      <div>
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
            {this.state.results.map((each) => {
              let dobArr = each.dob.date.slice(0, -14).split("-");
              let newDOB = `${dobArr[1]}-${dobArr[2]}-${dobArr[0]}`;
              console.log(dobArr);
              return (
                <ListItem
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
