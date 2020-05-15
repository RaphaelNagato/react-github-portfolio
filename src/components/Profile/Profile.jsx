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
    repositories: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const profile = await fetch("https://api.github.com/users/RaphaelNagato");
      const profileJSON = await profile.json();

      if (profileJSON) {
        const repositories = await fetch(profileJSON.repos_url);
        const repositoriesJSON = await repositories.json();
        this.setState({
          data: profileJSON,
          repositories: repositoriesJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }
  render() {
    const { data, repositories, loading, error } = this.state;

    if (loading || error) {
      return <div>{loading ? "Loading..." : error}</div>;
    }
    const items = [
      {
        label: "My Github:",
        value: <Link url={data.html_url} title="Github URL" />,
      },
      { label: "name:", value: data.name },
      { label: "location:", value: data.location },
      { label: "email:", value: "raphbunor27@gmail.com" },
      { label: "bio:", value: data.bio },
    ];

    const projects = repositories.map((repository) => ({
      label: repository.name,
      value: <Link url={repository.html_url} title="Github URL" />,
    }));
    return (
      <ProfileWrapper className="Profile-container">
        <Avatar src={data.avatar_url} alt={data.name} />
        <List title="Profile" items={items} />
        <List title="Projects" items={projects} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
