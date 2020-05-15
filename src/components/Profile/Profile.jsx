import React, { Component } from "react";
import Link from "../Link/Link";
import "./Profile.css";

class Profile extends Component {
  state = {
    data: {},
    loading: true,
  };

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/RaphaelNagato");
    const profileJSON = await profile.json();

    if (profileJSON) {
      this.setState({
        data: profileJSON,
        loading: false,
      });
    }
  }
  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="Profile-container">
        <img className="Profile-avatar" src={data.avatar_url} alt={data.name} />
        <ul>
          <li>
            <strong>My github:</strong>
            <Link url={data.html_url} title="Github URL" />
          </li>
          <li>
            <strong>repos_url:</strong> {data.repos_url}
          </li>
          <li>
            <strong>name:</strong> {data.name}
          </li>
          <li>
            <strong>location:</strong>
            {data.location}
          </li>
          <li>
            <strong>email:</strong> raphbunor27@gmail.com
          </li>
          <li>
            <strong>bio:</strong> {data.bio}
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
