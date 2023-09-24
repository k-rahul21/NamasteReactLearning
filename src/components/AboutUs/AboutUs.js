import React from "react";

class AboutUs extends React.Component {
  // this is how we get the props from parents component.
  // find out the answer why we use super keyword here.
  constructor(props) {
    super(props);

    // this is how we define state in class based component
    this.state = {
      count: 0,
    };
  }
  render() {
    const { Title } = this.props;
    // if we want to destructure state value then 👇
    const { count } = this.state;
    return (
      <div>
        <h1>About Us Page {Title}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {count}
        </button>
        <p>Here we'll show the extra details.</p>
      </div>
    );
  }
}

export default AboutUs;
