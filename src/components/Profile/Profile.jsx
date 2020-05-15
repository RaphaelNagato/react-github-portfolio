import React, { Component } from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import List from "../List/List";

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const Avatar = styled.img`
  width: 150px;
`;

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
    const items = [
      {
        label: "My Github:",
        value: <Link url={data.html_url} title="Github URL" />,
      },
      { label: "repos_url:", value: data.repos_url },
      { label: "name:", value: data.name },
      { label: "location:", value: data.location },
      { label: "email:", value: "raphbunor27@gmail.com" },
      { label: "bio:", value: data.bio },
    ];
    return (
      <ProfileWrapper className="Profile-container">
        <Avatar src={data.avatar_url} alt={data.name} />
        <List items={items} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
